(function($) {    

    $.anwidget("an.List", {
        options: {
			'visible': true,
			'disabled': false,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "disabled", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "list" + _widgetID++ });
		},
		getCreateString: function() {
			return this._options["type"] == "Ordered" ? "<ol>" : "<ul>";
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

				$.each(items, function(k, v) {
					_this._$this.append($('<li>').text(v));
				});
			}
		}
    });   
})(jQuery);