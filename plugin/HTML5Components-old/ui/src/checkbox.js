(function($) {    

    $.anwidget("an.Checkbox", {
        options: {
			'visible': true,
			'disabled': false,
			'text': "",
			'position': 'absolute',
			'inline': true
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "disabled", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "checkbox" + _widgetID++ });
		},
		getCreateString: function() {
			return "<div><input type='checkbox' id='" + this._options['id'] + "'><label for='" + this._options['id'] + "'></label></div>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		},
        attach: function ( parent, bPrepend ) {
            this._superApply(arguments);
			this._$div = $('#'+this._options['id']).parent();	// 	Parent div
			this._$label = this._$div.find("label");			// 	Label
			this._$this = this._$div.find("input");				//	Checkbox
			
			this.show();
			this.update(true);
        },	
		detach: function() {
			if(!this._$this)
				return;
			
			this._$div.remove();
			this._attached = false;
			this._$this = this._$label = this._$div = null;
			$(parent).trigger("detached", this.getEventData("detached"));			
		},
		show: function() {
			this._$div.show();
			this._$this.show();
			this._$label.show();			
		},
		update: function(force) {
			if(!this._$div)
				return;

			// Do not force update the visibility
			if(!force && this._dirty["display"]) {
				this._$this.css("display", this._options["visible"] == false ? "none" : (this._options['inline'] == true ? "inline" : "block"));
				this._$label.css("display", this._options["visible"] == false ? "none" : (this._options['inline'] == true ? "inline" : "block"));
				this._$div.css("display", this._options["visible"] == false ? "none" : (this._options['inline'] == true ? "inline" : "block"));
				this._dirty["display"] = false;
			}
			if(force || this._dirty["text"]) {
				this._$label.text(this._options["label"]);	
				this._dirty["text"] = false;
			}			
			
			this.applyProperties(this._$div, force);
			this.applyAttributes(this._$this, force);	
		},
		show: function() {
			if(this._$this) this._$this.show();
			if(this._$label) this._$label.show();
			if(this._$div) this._$div.show();
		},
		hide: function() {
			if(this._$this) this._$this.hide();
			if(this._$label) this._$label.hide();
			if(this._$div) this._$div.hide();
		}
    });   
})(jQuery);