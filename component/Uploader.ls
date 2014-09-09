define = window?define or require(\amdefine) module
require, exports, module <- define

require! \./PBComponent

{show-tooltip, lazy-load-html5-uploader} = require \../client/client-helpers

# XXX this component must be rendered inside a <form enctype="multipart/form-data">

module.exports =
  class Uploader extends PBComponent
    default-locals =
      post-url:   ''
      on-success: (->)

    init: !->
      @local \name, \background unless @local \name
      for k,v of default-locals when @local(k) is void
        @local k, v

    delete-preview: ->
      @@$.ajax {method:\DELETE, url:@local \postUrl}
        ..error (data) ~>
          show-tooltip ($ \#warning), if typeof! data.msg?0 is \String then data.msg.0 else 'Unable to Delete!'
        ..success (data) ~>
          @set-preview void # remove thumb
          @locals!on-delete data # cb

    set-preview: (uri) ->
      @$.find \.inline-preview
        ..data \src, uri
        ..attr \src,
          if uri and not uri.match /transparent-1px/
            "#{cacheUrl}/sites/#uri"
          else
            "#{cacheUrl}/images/transparent-1px.gif"

    on-attach: !->
      <~ lazy-load-html5-uploader

      #{{{ Event Delegates
      @$.on \click \.onclick-delete (ev) ~> # delete
        if confirm "Permanently Delete?"
          @delete-preview!
      #}}}

      init-html5-uploader = (locals) ~>
        @set-preview locals.preview
        @$.find('.drop-target, input[type=file]').html5-uploader {
          name: locals.name
          post-url: locals.postUrl
          on-server-progress: (progress, file) ~>
            @$.find \.action .hide!
            p = parse-int((progress.loaded/file.size) * 100)
            @$.find \.progress # progress update!
              ..html p + '<small>%</small>'
              ..css  \width, (if p < 35 then 35 else p) + \%
          on-client-load-end: ~> @$.find \.progress .width 0px; @$.find \.action .show!
          on-success: (xhr, file, r-json) ~>
            @$.find \.progress .width 0px
            @$.find \.action .show!
            # load current preview
            try r = JSON.parse r-json
            if r?success
              @set-preview r[locals.name]
            else
              show-tooltip ($ \.tooltip:first), r?msg or 'Try Again!'
            if locals.on-success then locals.on-success xhr, file, r
        }

      ####  main  ;,.. ___  _
      init-html5-uploader @locals!

    on-detach: -> @$.off!; @$.html '' # cleanup & reap

# vim:fdm=marker
