/*
 * @Description: textarea
 * @Author: 彭祥 (QQ:245803627)
 * @Date: 2018-12-05 16:41:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-04-01 14:28:12
 */
(function($) {
    
        $.anwidget("cu.Textarea", {
            options: {
                'visible': true,
                'disabled': false,
                'text': "",
                'position': 'absolute'
            },
            _props: ["left", "top", "width", "height", "position", "z-index", "transform-origin", "transform", "visibility", "resize","outline","box-sizing","border","font-family","font-size", "text-align"],
            _attrs: ["id", "disabled", "class", "readonly", "contenteditable"],
            getCreateOptions: function() {
                return $.extend(this.options, { 'id': "textarea" + _widgetID++ });
            },
            getCreateString: function() {
                return "<textarea>";
            },
            getProperties: function() {
                return this._props;
            },
            getAttributes: function() {
                return this._attrs;
            }
            // ,
            // update: function(force) {
            //     this._superApply(arguments);
            //     if(force || this._dirty["text"]) {
            //         this._$this.text(this._options["label"]);
            //         this._dirty["text"] = false;
            //     }
            // }
        });   
    })(jQuery);
