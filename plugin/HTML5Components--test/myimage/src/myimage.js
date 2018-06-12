(function($) {    

	// Register a component with the className: my.Image,
	// and prototype with the following overrides 
	// getCreateOptions
	// getCreateString
	// getProperties
	// getAttributes
    $.anwidget("my.Image", {
        options: {
			'visible': true,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "src", "alt", "class", "border"],
		// Return a unique ID with the prefix image
		// _widgetID is a global declared in anwidget
		// This id is used only if the user has not set any instance ID for the component in Animate CC
		// Otherwise the user configured name is used
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "image" + _widgetID++ });
		},
		// Return the string for creating the DOM element
		// For image we just need to create the <img> tag
		getCreateString: function() {
			return "<img>";
		},
		// Set of configurable properties
		getProperties: function() {
			return this._props;
		},
		// Set of configurable attributes
		getAttributes: function() {
			return this._attrs;
		}    
	});   
})(jQuery);