{
	"category": "Custom Component",
	"components": [{
			"className": "my.Iframe",
			"displayName": "CIframe",
			"version": "1.0",
			"source": "src/myiframe.js",
			"icon": "assets/SP_Image_Sm",
			"dimensions": [100, 100],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_source", "variable": "src", "type": "String", "default": ""},
				{"name": "PROP_alt", "variable": "alt", "type": "String", "default": "iframe"},
				{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_class", "variable": "class", "type": "String", "default": "ui-iframe"},
                {"name": "PROP_border", "variable": "border", "type": "Integer", "default": "0"},
                {"name": "PROP_frameBorder", "variable": "frameBorder", "type": "String", "default": "no"},
                {"name": "PROP_scrolling", "variable": "scrolling", "type": "String", "default": "no"}

            ]
		},
    	{
        	"className": "my.Textarea",
        	"displayName": "CTextarea",
        	"version": "1.0",
        	"source": "src/mytextarea.js",
        	"icon": "assets/SP_Label_Sm",
        	"dimensions": [100, 22],
        	"dependencies": [
            	{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
            	{"src": "../sdk/anwidget.js"}
        	],
        	"properties": [
            	{"name": "PROP_value", "variable": "value", "type": "String", "default": ""},
            	{"name": "PROP_disabled", "variable": "disabled", "type": "Boolean", "default": "false"},
            	{"name": "PROP_visible", "variable": "visible", "type": "Boolean", "default": "true"},
            	{"name": "PROP_class", "variable": "class", "type": "String", "default": "ui-textarea"},
				{"name": "PROP_readonly", "variable": "readonly", "type": "String", "default": "readonly"},
                {"name": "PROP_contenteditable", "variable": "contenteditable", "type": "Boolean", "default": "false"},
                {"name": "PROP_resize", "variable": "resize", "type": "String", "default": "none"},
                {"name": "PROP_outline", "variable": "outline", "type": "String", "default": "none"},
                {"name": "PROP_box-sizing", "variable": "box-sizing", "type": "String", "default": "border-box"},
                {"name": "PROP_border", "variable": "border", "type": "Integer", "default": "0"},
                {"name": "PROP_font-family", "variable": "font-family", "type": "String", "default": "宋体"},
                {"name": "PROP_font-size", "variable": "font-size", "type": "String", "default": "12px"}
        	]
    	},
    	{
        	"className": "my.Video",
        	"displayName": "CVideo",
        	"version": "1.0",
        	"source": "src/myvideo.js",
        	"icon": "assets/SP_FLVPlayback_Sm",
			"dimensions": [400, 300],
        	"dependencies": [
            	{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
            	{"src": "../sdk/anwidget.js"},
                {"src": "../lib/videojs-6.6.3.css","cdn":"https://unpkg.com/video.js/dist/video-js.css"},
                {"src": "../lib/videojs-6.6.3.js","cdn":"https://unpkg.com/video.js/dist/video.js"},
                {"src": "../lib/custom-videojs.css"}
        	],
        	"properties": [
            	{"name": "PROP_source", "variable": "src", "type": "Video Content Path", "default": ""},
            	{"name": "PROP_autoplay", "variable": "autoplay", "type": "Boolean", "default": "true"},
            	{"name": "PROP_controls", "variable": "controls", "type": "Boolean", "default": "true"},
            	{"name": "PROP_muted", "variable": "muted", "type": "Boolean", "default": "false"},
            	{"name": "PROP_loop", "variable": "loop", "type": "Boolean", "default": "true"},
            	{"name": "PROP_poster", "variable": "poster", "type": "Image Path", "default": ""},
				{"name": "PROP_preload", "variable": "preload", "type": "Boolean", "default": "true"},
                {"name": "PROP_playsinline", "variable": "playsinline", "type": "String", "default": "playsinline"},
                {"name": "PROP_data-setup", "variable": "data-setup", "type": "String", "default": "{}"},
            	{"name": "PROP_class", "variable": "class", "type": "String", "default": "video-js vjs-big-play-centered"}
        	]
   		 }
	]
}

