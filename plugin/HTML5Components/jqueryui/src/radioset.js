(function($) {    

    $.anwidget("an.RadioSet", {
        options: {
			'visible': true,
			'disabled': false,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "disabled", "class"],
		getCreateOptions: function() {
			return $.extend(
				this.options,	
				{
					'id': "radioset" + _widgetID++,
					'name': "radio" + _widgetID++
				});
		},
		getCreateString: function() {
			return "<fieldset>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		},	
		update: function(force) {
			this._superApply(arguments);
			if(force || this._dirty['items']) {
				this._$this.empty();
				var _this = this;

				var items = this._options['items'];
				if(items) {
					items = items.split(",");
					if(items.length < 9)
						return;
					
					items = items.splice(9);
				}

				var _this = this;
				this._$this.append($("<legend>" + this._options['label'] + "</legend>"));
				$.each(items, function(k, v) {
					var item = "<input type='radio' name='" + _this._options['name'] + "' id='" + _this._options['name'] + k + "'>\
					<label for='" + _this._options['name'] + k + "'>" + v + "\
					</label>";
					_this._$this.append($(item));
				});
				
				this._$this.find("input").checkboxradio();
				this._$this.controlgroup();
			}
		}
    });   
})(jQuery);