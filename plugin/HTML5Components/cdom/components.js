{
	"category": "CATEGORY_CUSTOM_COMPONENTS",
	"components": [{
			"className": "c.Iframe",
			"displayName": "CIframe",
			"version": "1.0",
			"source": "src/CIframe.js",
			"icon": "assets/SP_Image_Sm",
			"dimensions": [100, 100],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_source", "variable": "src", "type": "String", "default": ""},
				{"name": "PROP_alt", "variable": "alt", "type": "String", "default": "iframe"},
				{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_class", "variable": "class", "type": "String", "default": "ui-iframe"},
				{"name": "PROP_display", "variable": "display", "type": "List", "default": "inline, none, block, inherit"},
				{"name": "PROP_visibility", "variable": "visibility", "type": "List", "default": "visible, hidden, collapse, inherit"},
                {"name": "PROP_z-index", "variable": "z-index", "type": "String", "default": "auto"},
				{"name": "PROP_marginwidth", "variable": "marginwidth", "type": "String", "default": "0"},
				{"name": "PROP_marginheight", "variable": "marginheight", "type": "String", "default": "0"},
                {"name": "PROP_border", "variable": "border", "type": "Integer", "default": "0"},
                {"name": "PROP_frameborder", "variable": "frameborder", "type": "String", "default": "0"},
				{"name": "PROP_scrolling", "variable": "scrolling", "type": "String", "default": "no"},
				{"name": "PROP_pointer-events", "variable": "pointer-events", "type": "String", "default": "auto"},
				{"name": "PROP_background-color", "variable": "background-color", "type": "String", "default": "transparent"}
            ]
		},
    	{
        	"className": "c.Textarea",
        	"displayName": "CTextarea",
        	"version": "1.0",
        	"source": "src/CTextarea.js",
        	"icon": "assets/SP_Label_Sm",
        	"dimensions": [100, 22],
        	"dependencies": [
            	{"src": "../lib/jquery-2.2.4.min.js"},
            	{"src": "../sdk/anwidget.js"}
        	],
        	"properties": [
            	{"name": "PROP_value", "variable": "value", "type": "String", "default": ""},
            	{"name": "PROP_disabled", "variable": "disabled", "type": "Boolean", "default": "false"},
            	{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_class", "variable": "class", "type": "String", "default": "ui-textarea"},
				{"name": "PROP_visibility", "variable": "visibility", "type": "List", "default": "visible, hidden, collapse, inherit"},
				{"name": "PROP_z-index", "variable": "z-index", "type": "String", "default": "auto"},
				{"name": "PROP_resize", "variable": "resize", "type": "String", "default": "none"},
				{"name": "PROP_readonly", "variable": "readonly", "type": "String", "default": "readonly"},
				{"name": "PROP_contenteditable", "variable": "contenteditable", "type": "Boolean", "default": "false"},
				{"name": "PROP_box-sizing", "variable": "box-sizing", "type": "String", "default": "border-box"},
                {"name": "PROP_outline", "variable": "outline", "type": "String", "default": "none"},
                {"name": "PROP_border", "variable": "border", "type": "Integer", "default": "none"},
                {"name": "PROP_font-family", "variable": "font-family", "type": "String", "default": "宋体"},
                {"name": "PROP_font-size", "variable": "font-size", "type": "String", "default": "12px"}
        	]
    	},
    	{
        	"className": "c.Audio",
        	"displayName": "CAudio",
        	"version": "1.0",
        	"source": "src/CAudio.js",
        	"icon": "assets/SP_FLVPlayback_Sm",
        	"dimensions": [100, 22],
        	"dependencies": [
            	{"src": "../lib/jquery-2.2.4.min.js"},
            	{"src": "../sdk/anwidget.js"}
        	],
        	"properties": [
				{"name": "PROP_source", "variable": "src", "type": "File Path", "default": ""},
				{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_z-index", "variable": "z-index", "type": "String", "default": "auto"},
				{"name": "PROP_preload", "variable": "preload", "type": "List", "default": "auto, metadata, none"},
				{"name": "PROP_autoplay", "variable": "autoplay", "type": "String", "default": "autoplay"},
                {"name": "PROP_loop", "variable": "loop", "type": "Boolean", "default": "false"},
                {"name": "PROP_controls", "variable": "controls", "type": "Boolean", "default": "false"}
            ]
    	},
    	{
        	"className": "c.Video2",
        	"displayName": "CVideo2",
        	"version": "1.0",
        	"source": "src/CVideo2.js",
        	"icon": "assets/SP_FLVPlayback_Sm",
			"dimensions": [400, 300],
        	"dependencies": [
            	{"src": "../lib/jquery-2.2.4.min.js"},
            	{"src": "../sdk/anwidget.js"},
                {"src": "lib/videojs-6.6.3.css"},
                {"src": "lib/videojs-6.6.3.js"},
                {"src": "lib/custom-videojs.css"}
        	],
        	"properties": [
            	{"name": "PROP_source", "variable": "src", "type": "Video Content Path", "default": ""},
            	{"name": "PROP_autoplay", "variable": "autoplay", "type": "Boolean", "default": "true"},
            	{"name": "PROP_controls", "variable": "controls", "type": "Boolean", "default": "true"},
            	{"name": "PROP_muted", "variable": "muted", "type": "Boolean", "default": "false"},
            	{"name": "PROP_loop", "variable": "loop", "type": "Boolean", "default": "true"},
            	{"name": "PROP_poster", "variable": "poster", "type": "Image Path", "default": ""},
				{"name": "PROP_preload", "variable": "preload", "type": "Boolean", "default": "true"},
                {"name": "PROP_playsinline", "variable": "playsinline", "type": "String", "default": "true"},
                {"name": "PROP_data-setup", "variable": "data-setup", "type": "String", "default": "{}"},
				{"name": "PROP_class", "variable": "class", "type": "String", "default": "video-js vjs-big-play-centered"},
				{"name": "PROP_webkit-playsinline", "variable": "webkit-playsinline", "type": "String", "default": "true"},
				{"name": "PROP_x-webkit-airplay", "variable": "x-webkit-airplay", "type": "String", "default": "allow"},
				{"name": "PROP_x5-playsinline", "variable": "x5-playsinline", "type": "String", "default": "true"},
				{"name": "PROP_x5-video-player-type", "variable": "x5-video-player-type", "type": "String", "default": "h5"},
				{"name": "PROP_x5-video-player-fullscreen", "variable": "x5-video-player-fullscreen", "type": "String", "default": "true"},
				{"name": "PROP_x5-video-orientation", "variable": "x5-video-orientation", "type": "String", "default": "portraint"},
				{"name": "PROP_object-fit", "variable": "object-fit", "type": "String", "default": "fill"}
        	]
		},
		{
			"className": "c.Video",
			"displayName": "CVideo",
			"version": "1.0",
			"source": "src/CVideo.js",
			"icon": "assets/SP_FLVPlayback_Sm",
			"dimensions": [100, 100],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_SOURCE", "variable": "src", "type": "Video Content Path", "default": ""},
				{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "video"},
				{"name": "PROP_display", "variable": "display", "type": "List", "default": "inline, none, block, inherit"},
				{"name": "PROP_visibility", "variable": "visibility", "type": "List", "default": "visible, hidden, collapse, inherit"},
				{"name": "PROP_z-index", "variable": "z-index", "type": "String", "default": "auto"},
				{"name": "PROP_AUTOPLAY", "variable": "autoplay", "type": "Boolean", "default": "true"},
				{"name": "PROP_CONTROLS", "variable": "controls", "type": "Boolean", "default": "true"},
				{"name": "PROP_MUTED", "variable": "muted", "type": "Boolean", "default": "false"},
				{"name": "PROP_LOOP", "variable": "loop", "type": "Boolean", "default": "true"},
				{"name": "PROP_POSTER", "variable": "poster", "type": "Image Path", "default": ""},
				{"name": "PROP_PRElOAD", "variable": "preload", "type": "Boolean", "default": "true"}
			]
		},
		{
			"className": "c.Link",
			"displayName": "CLink",
			"version": "1.0",
			"source": "src/CLink.js",
			"icon": "assets/SP_PL_CodeSample",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_SOURCE", "variable": "href", "type": "String", "default": ""},
				{"name": "PROP_rel", "variable": "rel", "type": "String", "default": "stylesheet"},
				{"name": "PROP_type", "variable": "type", "type": "String", "default": "text/css"}
			]
		},
		{
		   "className": "c.Script",
		   "displayName": "CScript",
		   "version": "1.0",
		   "source": "src/CScript.js",
		   "icon": "assets/SP_PL_CodeSample",
		   "dimensions": [100, 22],
		   "dependencies": [
			   {"src": "../lib/jquery-2.2.4.min.js"},
			   {"src": "../sdk/anwidget.js"}
		   ],
		   "properties": [
			   {"name": "PROP_SOURCE", "variable": "src", "type": "String", "default": ""},
			   {"name": "PROP_type", "variable": "type", "type": "String", "default": "text/javascript"},
			   {"name": "PROP_charset", "variable": "charset", "type": "String", "default": ""},
			   {"name": "PROP_async", "variable": "async", "type": "String", "default": ""},
			   {"name": "PROP_defer", "variable": "defer", "type": "String", "default": ""},
			   {"name": "PROP_xml:space", "variable": "xml:space", "type": "String", "default": ""}
		   ]
		},
	   	{
			"className": "c.Div",
			"displayName": "CDiv",
			"version": "1.0",
			"source": "src/CDiv.js",
			"icon": "assets/SP_PL_CodeSample",
			"dimensions": [100, 20],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_class", "variable": "class", "type": "String", "default": "ui-div"},
				{"name": "PROP_display", "variable": "display", "type": "List", "default": "inline, none, block, inherit"},
				{"name": "PROP_visibility", "variable": "visibility", "type": "List", "default": "visible, hidden, collapse, inherit"},
				{"name": "PROP_z-index", "variable": "z-index", "type": "String", "default": "auto"},
				{"name": "PROP_pointer-events", "variable": "pointer-events", "type": "String", "default": "auto"},
				{"name": "PROP_background-color", "variable": "background-color", "type": "String", "default": "transparent"},
				{"name": "PROP_innerText", "variable": "innerText", "type": "String", "default": ""},
				{"name": "PROP_overflow-x", "variable": "overflow-x", "type": "String", "default": "auto"},
				{"name": "PROP_overflow-y", "variable": "overflow-y", "type": "String", "default": "auto"},
				{"name": "PROP_fontFamily", "variable": "font-family", "type": "String", "default": "宋体"},
				{"name": "PROP_fontColor", "variable": "color", "type": "String", "default": "#000000"},
				{"name": "PROP_fontSize", "variable": "font-size", "type": "String", "default": "14px"}
			]
		},
		{
	 		"className": "c.Button",
	 		"displayName": "CButton",
	 		"version": "1.0",
	 		"source": "src/CButton.js",
	 		"icon": "assets/SP_Button_Sm",
	 		"dimensions": [100, 22],
	 		"dependencies": [
		 		{"src": "../lib/jquery-2.2.4.min.js"},
		 		{"src": "../sdk/anwidget.js"}
	 		],
	 		"properties": [
         		{"name": "PROP_label", "variable": "label", "type": "String", "default": "CButton"},
		 		{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
		 		{"name": "PROP_class", "variable": "class", "type": "String", "default": "ui-button"},
		 		{"name": "PROP_visibility", "variable": "visibility", "type": "List", "default": "visible, hidden, collapse, inherit"},
				{"name": "PROP_z-index", "variable": "z-index", "type": "String", "default": "auto"},
         		{"name": "PROP_disabled", "variable": "disabled", "type": "Boolean", "default": "false"},
         		{"name": "PROP_type", "variable": "type", "type": "List", "default": "button, submit, reset"},
		 		{"name": "PROP_pointer-events", "variable": "pointer-events", "type": "String", "default": "auto"}
	 		]
 		},
		{
			"className": "c.Image",
			"displayName": "CImage",
			"version": "1.0",
			"source": "src/CImage.js",
			"icon": "assets/SP_Image_Sm",
			"dimensions": [100, 100],
			"dependencies": [
            	{"src": "../lib/jquery-2.2.4.min.js"},
            	{"src": "../sdk/anwidget.js"}
        	],
        	"properties": [
            	{"name": "PROP_SOURCE", "variable": "src", "type": "String", "default": ""},
            	{"name": "PROP_ALT", "variable": "alt", "type": "String", "default": "alt"},
				{"name": "title", "variable": "title", "type": "String", "default": "title"},
            	{"name": "PROP_BORDER", "variable": "border", "type": "Integer", "default": "0"},
            	{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-image"},
				{"name": "PROP_display", "variable": "display", "type": "List", "default": "inline, none, block, inherit"},
				{"name": "PROP_visibility", "variable": "visibility", "type": "List", "default": "visible, hidden, collapse, inherit"},
				{"name": "PROP_z-index", "variable": "z-index", "type": "String", "default": "auto"},
                {"name": "PROP_lowsrc", "variable": "lowsrc", "type": "String", "default": ""},
                {"name": "PROP_pointer-events", "variable": "pointer-events", "type": "String", "default": "auto"},
                {"name": "PROP_cursor", "variable": "cursor", "type": "List", "default": "default, auto, crosshair, pointer, move, text, wait, help"}

			]
    	},
		{
			"className": "c.TextInput",
			"displayName": "CTextInput",
			"version": "1.0",
			"source": "src/CTextinput.js",
			"icon": "assets/SP_TextInput_Sm",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_VALUE", "variable": "value", "type": "String", "default": ""},
				{"name": "PROP_DISABLED", "variable": "disabled", "type": "Boolean", "default": "false"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_display", "variable": "display", "type": "List", "default": "inline, none, block, inherit"},
				{"name": "PROP_visibility", "variable": "visibility", "type": "List", "default": "visible, hidden, collapse, inherit"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-textinput"},
				{"name": "PROP_z-index", "variable": "z-index", "type": "String", "default": "auto"},
				{"name": "PROP_pointer-events", "variable": "pointer-events", "type": "String", "default": "auto"},
				{"name": "PROP_readonly", "variable": "readonly", "type": "String", "default": "readonly"},
                {"name": "PROP_border", "variable": "border", "type": "Integer", "default": "0"},
				{"name": "PROP_outline", "variable": "outline", "type": "String", "default": "none"},
                {"name": "PROP_background-color", "variable": "background-color", "type": "String", "default": "transparent"},
                {"name": "PROP_font-family", "variable": "font-family", "type": "String", "default": "宋体"},
                {"name": "PROP_font-color", "variable": "color", "type": "String", "default": "#000000"},
                {"name": "PROP_font-size", "variable": "font-size", "type": "String", "default": "14px"},
				{"name": "PROP_text-align", "variable": "text-align", "type": "String", "default": "left"}
			]
		}
 	]
}

