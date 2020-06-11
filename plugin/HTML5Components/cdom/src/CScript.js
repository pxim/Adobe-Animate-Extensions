/*
 * @Description: script
 * @Author: 彭祥 (QQ:245803627)
 * @Date: 2018-12-05 16:41:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-02-27 11:02:02
 */
(function($) {

    $.anwidget("c.Script", {
        options: {
			'visible': false
		},
		//属性说明文档 http://www.w3school.com.cn/tags/tag_script.asp
		_attrs: ['type', 'src', 'async', 'charset', 'defer', 'xml:space'],
		getCreateString: function() {
			return "<script>";
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
