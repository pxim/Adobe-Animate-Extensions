(function($) {    

    $.anwidget("an.NumericStepper", {
        options: {
			'visible': true,
			'disabled': false,
			'text': "",
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "disabled", "min", "max", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "numericstepper" + _widgetID++ });
		},
		getCreateString: function() {
			return "<input type='number'>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		}
    });   
})(jQuery);