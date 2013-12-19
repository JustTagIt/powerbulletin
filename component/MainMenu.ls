define = window?define or require(\amdefine) module
require, exports, module <- define

require! \./PBComponent

module.exports =
  class MainMenu extends PBComponent

    # XXX renders in mutant static app/views/menu.jade

    init: !~>
      @menu = @@$R((new-menu) ~>
        # TODO reactive menu
      ).bind-to @state.menu

    on-attach: !~>
      #{{{ Event Delegates
      #}}}

      ####  main  ;,.. ___  _
      # menu has already rendered server-side from mutant/site.config.menu, so--
      # get menu rows
      rows = @$.find '> .row > a'

      intent-timer = void
      remove-hover = -> rows.remove-class \hover

      # setup delegates
      rows.on \mouseenter -> # set hover
        clear-timeout intent-timer
        remove-hover!
        r  = $ this .add-class \hover # row
        s  = r.next \.submenu         # row's menu

        # precalc
        w  = $ window .width!
        ds = w - (s.offset!?left + s.width!)
        if ds < 0 # intelligently reposition submenu
          set-timeout (-> s.transition {left:ds - 80px}, 500ms, \easeOutExpo), 200ms

      @$.on \mouseleave ~> # mouse-hover-intent'd out
        intent-timer := set-timeout (~>
          remove-hover!), 400ms
          #@$.find \.active:first .add-class \hover), 400ms

    on-detach: -> @$.off!

# vim:fdm=marker
