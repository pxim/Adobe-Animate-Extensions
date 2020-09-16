/*
 * @Description: link
 * @Author: 彭祥 (QQ:245803627)
 * @Date: 2018-12-05 16:41:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-02-27 11:01:55
 */
(function($) {

    $.anwidget("c.Link", {
        options: {
			'visible': false
        },
		_attrs: ['rel', 'type', 'href'],
		// Return the string for creating the DOM element
		// For image we just need to create the <img> tag
		getCreateString: function() {
			return "<link>";
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
