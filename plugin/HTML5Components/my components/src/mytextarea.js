
(function($) {
    
        $.anwidget("my.Textarea", {
            options: {
                'visible': true,
                'disabled': false,
                'text': "",
                'position': 'absolute'
            },
            _props: ["left", "top", "width", "height", "position", "transform-origin", "transform","resize","outline","box-sizing","border","font-family","font-size"],
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
