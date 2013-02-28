# Common
layout-static = (w, mutator, id) ->
  # indicate current
  forum-class = if id then " forum-#{id}" else ''
  w.$ \html .attr(\class "#{mutator}#{forum-class}") # stylus
  w.marshal \mutator, mutator                        # js
  # handle active forum background
  w.$ '.bg-set' .remove!
  w.$ '.bg' .each -> w.$ this .add-class \bg-set .remove!prepend-to w.$ 'body' # position behind
  # handle active main menu
  w.$ 'header .menu' .find '.active' .remove-class \active # remove prev
  w.$ 'menu .row' # add current
    .has ".forum-#{id}"
    .find '.title'
    .add-class \active

flip-background = (w, cur, direction='down') ->
  clear-timeout w.bg-anim if w.bg-anim
  last = w.$ '.bg.active'
  next = w.$ '#forum'+"_bg_#{cur.data \id}"
  next.css \display \block
  unless last.length
    next.add-class \active
  else
    w.bg-anim := set-timeout (->
      last.css \top if direction is \down then -300 else 300 # stage animation
      last.remove-class \active
      next.add-class \active # ... and switch!
      w.bg-anim = 0
    ), 100

@homepage =
  static:
    (window, next) ->
      window.render-jade 'main_content' \homepage
      layout-static window, \homepage, @active-forum-id
      next!
  on-load:
    (window, next) ->
      # reflow masonry content
      window.$ '.forum .container' .masonry(
        item-selector: '.post'
        is-animated:   true
        is-fit-width:  true
        is-resizable:  true)
      #{{{ Waypoints
      set-timeout (->
        # sticky forum headers
        $ = window.$
        $ '.forum .header' .waypoint \sticky { offset: -70 }

        # forum switches
        $ '.forum' .waypoint {
          offset  : '25%',
          handler : (direction) ->
            e   = $ this
            eid = e.attr \id

            # handle menu active
            id = if direction is \down then eid else
              $ '#'+eid .prev-all '.forum:first' .attr \id
            return unless id # guard
            $ 'header .menu' .find '.active' .remove-class \active # remove prev
            cur = $ 'header .menu'
              .find ".#{id.replace /_/ \-}"
              .add-class \active # ...and activate!

            # handle forum headers
            $ '.forum .stuck' .remove-class \stuck
            # TODO if direction is \up stick last forum

            flip-background window, cur, direction
        }), 100

      #window.awesome-scroll-to "forum_#{}"
      #}}}
      next!
  on-unload:
    (window, next) ->
      window.$ '.forum .container' .masonry(\destroy)
      window.$ '.forum .header' .waypoint(\destroy)
      window.$ '.forum' .waypoint(\destroy)
      next!
  on-personalize: (w, u, next) ->
    console.log w, u
    console.log 'HARHAR'
    next!

@forum =
  static:
    (window, next) ->
      window.render-jade 'left_content' \nav
      window.render-jade 'main_content' \posts
      window.marshal \activeForumId @active-forum-id
      window.marshal \activePostId @active-post-id
      layout-static window, \forum, @active-forum-id
      next!
  on-load:
    (window, next) ->
      cur = window.$ "header .menu .forum-#{window.active-forum-id}"
      flip-background window, cur
      $ = window.$
      $ '.forum .breadcrumb' .waypoint(\sticky, { offset: -70 })
      $f = $ '#main_content.container .forum'
      $l = $ '#left_content'
      $l.resizable(
        min-width: 200
        max-width: 450
        resize: (e, ui) ->
          $f.css('padding-left', ui.size.width);window.save-ui!)
      $f.css('padding-left', ($l.width! + 20))
      next!
  on-mutate:
    (window, next) ->
      window.scroll-to-top!
      window.s
      next!
  on-unload:
    (window, next) ->
      window.$ '.forum .breadcrumb' .waypoint(\destroy)
      window.$ '#left_content' .resizable(\destroy)
      next!

@search =
  static:
    (window, next) ->
      next!
  on-load:
    (window, next) ->
      next!
  on-initial:
    (window, next) ->
      # set initial state
      next!
  on-mutate:
    (window, next) ->
      next!

@admin =
  static:
    (window, next) ->
      next!

# vim:fdm=indent
