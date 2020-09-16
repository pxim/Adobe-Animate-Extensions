/*
 * @Description: div
 * @Author: 彭祥 (QQ:245803627)
 * @Date: 2018-12-05 16:41:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-04-01 14:26:05
 */

(function($) {

	// Register a component with the className: my.Image,
	// and prototype with the following overrides
	// getCreateOptions
	// getCreateString
	// getProperties
	// getAttributes
    $.anwidget("c.Div", {
        options: {
			'visible': true,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "z-index", "transform-origin", "transform", "display", "visibility", "border", "pointer-events", "background-color", "overflow-x", "overflow-y", "fontFamily", "fontSize", "color"],
		_attrs: ["id", "class", "innerText"],
		// Return a unique ID with the prefix image
		// _widgetID is a global declared in anwidget
		// This id is used only if the user has not set any instance ID for the component in Animate CC
		// Otherwise the user configured name is used
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "div" + _widgetID++ });
		},
		// Return the string for creating the DOM element
		// For image we just need to create the <img> tag
		getCreateString: function() {
			return "<div>";
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
