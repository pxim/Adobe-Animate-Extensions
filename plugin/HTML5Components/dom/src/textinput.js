(function($) {

    $.anwidget("c.TextInput", {
        options: {
			'visible': true,
			'disabled': false,
			'text': "",
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform", "display", "visibility", "z-index", "pointer-events", "background-color", "font-family", "font-size", "color", "border", "outline", "text-align"],
		_attrs: ["id", "disabled", "class", "readonly"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "textinput" + _widgetID++ });
		},
		getCreateString: function() {
			return "<input type='text'>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		}
    });
})(jQuery);
