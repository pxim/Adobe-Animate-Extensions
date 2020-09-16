{
	"category": "CATEGORY_VIDEO",
	"components": [{
			"className": "an.Video",
			"displayName": "DISP_NAME_VIDEO",
			"version": "1.0",
			"source": "src/video.js",
			"icon": "assets/SP_FLVPlayback_Sm",
			"dimensions": [400, 300],
			"dependencies": [
				{"src": "../lib/jquery-3.4.1.min.js", "cdn": "https://code.jquery.com/jquery-3.4.1.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_SOURCE", "variable": "src", "type": "Video Content Path", "default": ""},
				{"name": "PROP_AUTOPLAY", "variable": "autoplay", "type": "Boolean", "default": "true"},
				{"name": "PROP_CONTROLS", "variable": "controls", "type": "Boolean", "default": "true"},
				{"name": "PROP_MUTED", "variable": "muted", "type": "Boolean", "default": "false"},
				{"name": "PROP_LOOP", "variable": "loop", "type": "Boolean", "default": "true"},
				{"name": "PROP_POSTER", "variable": "poster", "type": "Image Path", "default": ""},
				{"name": "PROP_PRElOAD", "variable": "preload", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "video"}
			]
		}]
}