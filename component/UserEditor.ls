define = window?define or require(\amdefine) module
require, exports, module <- define

require! {
  Component: yacomponent
}
{templates} = require \../build/component-jade

module.exports =
  class UserEditor extends Component
    template: templates.UserEditor
    on-attach: ->
      c = @
      dollarish = @@$
      @$.on \submit \form ->
        $form = dollarish @
        data = $form.serialize!
        $.ajax {
          type: \PUT
          url: "/resources/users/#{c.local(\user).id}"
          data: $form.serialize!
        }
        false
# vim:fdm=marker
