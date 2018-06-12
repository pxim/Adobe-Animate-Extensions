(function($) {    
	// Register a datepicker widget as an.DatePicker
    $.anwidget("an.DatePicker", {
        options: {
			'visible': true,
			'disabled': false,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["disabled", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "picker" + _widgetID++ });
		},
		// Create a div with the label text and an input text 
		// The input text field will be converted to a datepicker widget at runtime
		getCreateString: function() {
			return "<div id='_datepicker_" + this._options['id'] +"'>" 
						+ this._options['label'] 
						+ " <input type='text' id='" + this._options['id'] + "'></div>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		}, 
		attach: function(parent, bPrepend) {
			// call the base function, but remember if the instance is already attached
			// On the first attach, we convert the textinput to a datepicker using the jqueryui widget call
			var alreadyAttached = this._attached;
			this._superApply(arguments);
						
			if(alreadyAttached)
				return;
			
			// This is called only when we are attaching the instance for the first time
			// use the .datepicker() API to convert this DOM element to a datepicker widget
			$("#" + this._options['id'] + "").datepicker();
			$(parent).trigger("attached", this.getEventData("attached"));

			// Reset the this._$this variable to point to the actual input element
			// Since we initialize this._$this with $(this.getCreateString()), by default it will point to the parent div
			this._$this = $("#" + this._options['id']);
			this._$div = this._$this.parent();
		},
		update: function(force) {
			if(!this._$div)
				return;

			var updateSize = force || this._dirty["width"] || this._dirty["height"];
			// Apply css properties on the container div
			this.applyProperties(this._$div, force);
			// But attributes on the real element
			this.applyAttributes(this._$this, force);	

			if(updateSize) {
				// Copy the width and height from parent
				this._$this.css("width", this._$div.css("width"));
				this._$this.css("height", this._$div.css("height"));								
			}
		}
    });   
})(jQuery);