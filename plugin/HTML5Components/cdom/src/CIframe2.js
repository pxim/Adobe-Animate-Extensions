/*
 * @Description: iframe2
 * @Author: 彭祥 (QQ:245803627)
 * @Date: 2018-12-05 16:41:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-02-27 11:01:52
 */

(function($) {

	// Register a component with the className: my.Image,
	// and prototype with the following overrides
	// getCreateOptions
	// getCreateString
	// getProperties
	// getAttributes
    $.anwidget("c.Iframe", {
        options: {
			'visible': true,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform", "border", "pointer-events", "background-color"],
		_attrs: ["id", "src", "alt", "class", "frameborder", "scrolling", "marginheight", "marginwidth"],
		// Return a unique ID with the prefix image
		// _widgetID is a global declared in anwidget
		// This id is used only if the user has not set any instance ID for the component in Animate CC
		// Otherwise the user configured name is used
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "iframe" + _widgetID++ });
		},
		// Return the string for creating the DOM element
		// For image we just need to create the <img> tag
		getCreateString: function() {
			return "<iframe>";
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
