/*
 * @Description: video
 * @Author: 彭祥 (QQ:245803627)
 * @Date: 2018-12-05 16:41:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-04-24 13:28:39
 */
(function($) {    
    $.anwidget("cu.Video", {
        options: {
            left: 0,
            top: 0,
            width: 400,
            height: 300,
            source: "",
			autoplay: true,
			visible: true,
			position: "absolute"
        },
		_props: ["left", "top", "width", "height", "position", "z-index", "transform-origin", "transform", "display", "visibility"],
		_attrs: ["id", "src", "controls", "autoplay", "loop", "class", "muted", "poster"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "video" + _widgetID++ });
		},
		getCreateString: function() {
			return "<div><video webkit-playsinline='true' playsinline='true' x-webkit-airplay='allow' x5-playsinline='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-orientation='portraint' style='object-fit: fill;' /></div>";
		},
		getProperties: function() {
			return this._props;
		},
		attach: function() {
			if(this._attached)
				return;
			
			this._superApply(arguments);
			this._$div = $(this._element);
			this._$this = this._$div.find('video');			
			
			this.update(true);			
		},
		detach: function() {
			if(!this._$div)
				return;
			
			this._$div.remove();
			this._attached = false;
			this._$div = null;
			$(parent).trigger("detached", this.getEventData("detached"));
		},
		getAttributes: function() {
			return this._attrs;
		},
		show: function() {
			if(this._$div) this._$div.show();
		},
		hide: function() {
			if(this._$div) this._$div.hide();
		},
		applyAttributes: function($el, force) {
			this._superApply(arguments);
			if(!this._options["muted"]) {
				$el.removeAttr("muted");
			}
		},
		update: function(force) {
			if(!this._$div)
				return;

			var updateSize = force || this._dirty["width"] || this._dirty["height"];
			this.applyProperties(this._$div, force);
			this.applyAttributes(this._$this, force);	

			if(updateSize) {
				// Copy the width and height from parent
				this._$this.css("width", this._$div.css("width"));
				this._$this.css("height", this._$div.css("height"));								
			}			
		}
    });   
})(jQuery);

