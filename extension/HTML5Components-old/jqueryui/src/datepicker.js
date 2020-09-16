(function($) {    

    $.anwidget("an.DatePicker", {
        options: {
			'visible': true,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["disabled", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "picker" + _widgetID++ });
		},
		getCreateString: function() {
			return "<div id='_datepicker_" + this._options['id'] +"'>" + this._options['label'] + " <input type='text' id='" + this._options['id'] + "'></div>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		}, 
		attach: function(parent, bPrepend) {
			var alreadyAttached = this._attached;
			this._superApply(arguments);
						
			if(alreadyAttached)
				return;
			
			$("#" + this._options['id'] + "").datepicker();
			$(parent).trigger("attached", this.getEventData("attached"));
			this._$this = $("#" + this._options['id']);
			this._$div = this._$this.parent();
			
			this.update(true);
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