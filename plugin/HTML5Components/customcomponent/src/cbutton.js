/*
 * @Description: button
 * @Author: 彭祥 (Email:245803627@qq.com)
 * @Date: 2019/4/16 11:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-04-24 13:28:40
 */
(function($) {

    $.anwidget("cu.Button", {
        options: {
            'visible': true,
            'disabled': false,
            'text': "",
            'position': 'absolute'
        },
        _props: ["left", "top", "width", "height", "position", "transform-origin", "transform", "z-index", "visibility", "pointer-events"],
        _attrs: ["id", "disabled", "class", "name", "type", "value"],
        getCreateOptions: function() {
            return $.extend(this.options, { 'id': "button" + _widgetID++ });
        },
        getCreateString: function() {
            return "<button type='button'>";
        },
        getProperties: function() {
            return this._props;
        },
        getAttributes: function() {
            return this._attrs;
        },
        update: function(force) {
            this._superApply(arguments);
            if(force || this._dirty["text"]) {
                this._$this.text(this._options["label"]);
                this._dirty["text"] = false;
            }
        }
    });
})(jQuery);
