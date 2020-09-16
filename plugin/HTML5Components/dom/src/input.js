/*
 * @Description:
 * @Author: 彭祥 (Email:245803627@qq.com)
 * @Date: 2020-06-17 10:33
 * @LastEditors: pengxiang
 * @LastEditTime: 2020-06-17 10:33
 */
(function($) {

    $.anwidget("c.Input", {
        options: {
            // 'visible': true,
            'disabled': false,
            'text': "",
            'position': 'absolute'
        },
        _props: ["left", "top", "width", "height", "position", "transform-origin", "transform", "display", "visibility", "z-index", "pointer-events", "background-color", "font-family", "font-size", "color", "border", "outline", "text-align"],
        _attrs: [ "type", "name", "id", "disabled", "class", "readonly", "value"],
        getCreateOptions: function() {
            return $.extend(this.options, { 'id': "input" + _widgetID++ });
        },
        getCreateString: function() {
            return "<input autocomplete='on' >";
        },
        getProperties: function() {
            return this._props;
        },
        getAttributes: function() {
            return this._attrs;
        }
    });
})(jQuery);
