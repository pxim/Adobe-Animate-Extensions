{
	"category": "CATEGORY_MY_COMPONENTS",
	"components": [{
			"className": "my.Image",
			"displayName": "DISP_NAME_IMAGE",
			"version": "1.0",
			"source": "src/myimage.js",
			"icon": "assets/SP_Image_Sm",
			"dimensions": [100, 100],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_SOURCE", "variable": "src", "type": "Image Path", "default": ""},
				{"name": "PROP_ALT", "variable": "alt", "type": "String", "default": "image"},
				{"name": "PROP_BORDER", "variable": "border", "type": "Integer", "default": "0"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-image"}						
			]
		}]
}

