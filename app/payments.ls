require! stripe

export client = stripe cvars.stripe.private-key

export test-card =
  number: '4242424242424242'
  exp_month: 12
  exp_year: 2014
  cvc: 123

# example...
# works in test mode
export test = ->
  pay.client.charges.create {
    amount: 50
    currency: \USD
    description: 'mr clifton collector cap'
    card: @test-card
  }, console.log

# NOTE: need to verify yourself whether said can purchase for this site
export subscribe = ({
  site-id = void
  product-id = void
  card = void
} = {}, cb = (->)) ->
  unless site-id
    return cb new Error "siteId is required to subscribe"

  err, product <~ db.products.find-one {
    criteria: {id: product-id}
    columns: [\price]
  }
  if err then return cb err
  unless product
    return cb new Error "subscription requires a valid product"

  err, res <~ db.sites.find-one {
    criteria: {id: site-id}
    columns: [\user_id]
  }
  if err then return cb err
  unless user-id = res?user_id
    return cb new Error "the site must have an owner to subscribe"

  err, total-monthly-cost <~ db.subscription-total user-id
  if err then return cb err
  console.log {user-id, total-monthly-cost}
  total-monthly-cost += product.price
  console.log {user-id, new-total-monthly-cost: total-monthly-cost}

  subscription = {
    plan: \plan
    quantity: total-monthly-cost
  }
  subscription <<< {card} if card

  err, res <~ db.users.find-one {
    criteria: {id: user-id}
    columns: [\stripe_id]
  }
  if err then return cb err
  if stripe-id = res.stripe_id
    err <- @client.customers.update_subscription stripe-id, subscription
    if err then return cb err

    err <- db.add-subscription site-id, product-id
    if err then return cb err

    cb!
  else
    err, customer <- @client.customers.create subscription
    if err then return cb err

    err <- db.users.update {criteria: {id: user-id}, data: {stripe_id: customer.id}}
    if err then return cb err

    err <- db.add-subscription site-id, product-id
    if err then return cb err

    cb!
