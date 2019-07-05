/*
 * @Description: 音频插件
 * @Author: 彭祥 (QQ:245803627)
 * @Date: 2018-12-05 16:41:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-02-27 10:26:19
 */
 
(function($) {
	//Firefox，IE11支持自动播放;
	//Chrome自动播放存在问题；
    $.anwidget("cu.Audio", {
        options: {
			'visible': true,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "z-index", "transform-origin", "transform"],
		_attrs: ["id", "src", "disabled", "class", "preload", "autoplay", "loop", "controls"],
		// Return a unique ID with the prefix image
		// _widgetID is a global declared in anwidget
		// This id is used only if the user has not set any instance ID for the component in Animate CC
		// Otherwise the user configured name is used
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "audio" + _widgetID++ });
		},
		// Return the string for creating the DOM element
		// For image we just need to create the <img> tag
		getCreateString: function() {
			return "<audio>";
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
