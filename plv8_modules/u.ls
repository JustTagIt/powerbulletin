top-forums = ->
  sql = '''
  SELECT * FROM forums
  WHERE parent_id IS NULL AND site_id=$1
  ORDER BY created DESC, id DESC
  '''
  plv8.execute sql, arguments

sub-forums = ->
  sql = '''
  SELECT f.*
  FROM forums f
  WHERE site_id=$1 AND f.parent_id=$2
  ORDER BY created DESC, id DESC
  '''
  plv8.execute sql, arguments

top-posts = ->
  sql = '''
  SELECT p.*, a.name user_name
  FROM posts p, aliases a
  WHERE a.user_id=p.user_id
    AND a.site_id=1
    AND p.parent_id IS NULL
    AND p.forum_id=$1
  ORDER BY created DESC, id DESC
  '''
  plv8.execute sql, arguments

sub-posts = ->
  sql = '''
  SELECT p.*, a.name user_name
  FROM posts p, aliases a
  WHERE a.user_id=p.user_id
    AND a.site_id=1
    AND p.parent_id=$1
  ORDER BY created DESC, id DESC
  '''
  sub-posts = plv8.execute sql, arguments

# recurses to build entire comment tree
sub-posts-tree = (parent-id) ->
  [p <<< {posts: sub-posts-tree(p.id)} for p in sub-posts(parent-id)]

# gets entire list of top posts and inlines all sub-posts to them
export posts = (forum-id) ->
  [p <<< {posts: sub-posts-tree(p.id)} for p in top-posts(forum-id)]

export doc = ->
  if res = plv8.execute('SELECT json FROM docs WHERE type=$1 AND key=$2', arguments)[0]
    JSON.parse(res.json)
  else
    null

export put-doc = ->
  insert-sql =
    'INSERT INTO docs (type, key, json) VALUES ($1, $2, $3)'
  update-sql =
    'UPDATE docs SET json=$3 WHERE type=$1::varchar(64) AND key=$2::varchar(64)'

  args = Array.prototype.slice.call(arguments)
  try
    plv8.subtransaction ->
      plv8.execute insert-sql, args
  catch
    plv8.execute update-sql, args

  true # rval

# single forum
export forum = (forum-id) ->
  sql = 'SELECT * FROM forums WHERE id=$1 LIMIT 1'
  f = plv8.execute sql, [forum-id]
  f <<< {posts: @posts(forum-id), subforums: []}

# all forums for site
export forums = (site-id) ->
  [f <<< {posts: @posts(f.id)} for f in top-forums(site-id)]

