{
	"category": "CATEGORY_USER_INTERFACE",
	"components": [{
			"className": "an.Button",
			"displayName": "DISP_NAME_BUTTON",
			"version": "1.0",
			"source": "src/button.js",
			"icon": "assets/SP_Button_Sm",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_LABEL", "variable": "label", "type": "String", "default": "Button"},
				{"name": "PROP_DISABLED", "variable": "disabled", "type": "Boolean", "default": "false"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-button"}
			]
		},
		{
			"className": "an.Checkbox",
			"displayName": "DISP_NAME_CHECKBOX",
			"version": "1.0",
			"source": "src/checkbox.js",
			"icon": "assets/SP_Close_Sm",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_LABEL", "variable": "label", "type": "String", "default": "Checkbox"},
				{"name": "PROP_VALUE", "variable": "value", "type": "String", "default": ""},
				{"name": "PROP_DISABLED", "variable": "disabled", "type": "Boolean", "default": "false"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-checkbox"}			
			]
		},
		{
			"className": "an.ComboBox",
			"displayName": "DISP_NAME_COMBOBOX",
			"version": "1.0",
			"source": "src/combobox.js",
			"icon": "assets/SP_ComboBoxEditable_Sm",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_LABEL", "variable": "label", "type": "String", "default": ""},
				{"name": "PROP_ITEMS", "variable": "items", "type": "Collection", "default": "dummy, dummy, items, 2, label, , , , data, , , "},
				{"name": "PROP_VALUE", "variable": "value", "type": "String", "default": "0"},
				{"name": "PROP_DISABLED", "variable": "disabled", "type": "Boolean", "default": "false"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-combobox"}						
			]
		},
		{
			"className": "an.CSS",
			"displayName": "DISP_NAME_CSS",
			"version": "1.0",
			"source": "src/css.js",
			"icon": "assets/SP_PL_CodeSample",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_SOURCE", "variable": "href", "type": "File Path", "default": ""}
			]
		},
		{
			"className": "an.Image",
			"displayName": "DISP_NAME_IMAGE",
			"version": "1.0",
			"source": "src/image.js",
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
		},
		{
			"className": "an.Label",
			"displayName": "DISP_NAME_LABEL",
			"version": "1.0",
			"source": "src/label.js",
			"icon": "assets/SP_Label_Sm",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_LABEL", "variable": "label", "type": "String", "default": "Label"},
				{"name": "PROP_DISABLED", "variable": "disabled", "type": "Boolean", "default": "false"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-label"}						
			]
		},
		{
			"className": "an.List",
			"displayName": "DISP_NAME_LIST",
			"version": "1.0",
			"source": "src/list.js",
			"icon": "assets/SP_List_Sm",
			"dimensions": [100, 100],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_TYPE", "variable": "type", "type": "List", "default": "Ordered, Unordered"},
				{"name": "PROP_ITEMS", "variable": "items", "type": "Collection", "default": "dummy, dummy, items, 1, "},
				{"name": "PROP_DISABLED", "variable": "disabled", "type": "Boolean", "default": "false"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-list"}						
			]
		},
		{
			"className": "an.NumericStepper",
			"displayName": "DISP_NAME_NUMERICSTEPPER",
			"version": "1.0",
			"source": "src/numericstepper.js",
			"icon": "assets/SP_NumericStepper_Sm",
			"dimensions": [120, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_VALUE", "variable": "value", "type": "Integer", "default": "0"},
				{"name": "PROP_MIN", "variable": "min", "type": "Integer", "default": "0"},
				{"name": "PROP_MAX", "variable": "max", "type": "Integer", "default": "10"},
				{"name": "PROP_DISABLED", "variable": "disabled", "type": "Boolean", "default": "false"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-numericstepper"}
			]
		},
		{
			"className": "an.RadioButton",
			"displayName": "DISP_NAME_RADIOBUTTON",
			"version": "1.0",
			"source": "src/radiobutton.js",
			"icon": "assets/SP_RadioButton_Sm",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_LABEL", "variable": "label", "type": "String", "default": "Radio"},
				{"name": "PROP_VALUE", "variable": "value", "type": "String", "default": ""},
				{"name": "PROP_NAME", "variable": "name", "type": "String", "default": "radio"},
				{"name": "PROP_DISABLED", "variable": "disabled", "type": "Boolean", "default": "false"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-radiobutton"}						
			]
		},
		{
			"className": "an.TextInput",
			"displayName": "DISP_NAME_TEXTINPUT",
			"version": "1.0",
			"source": "src/textinput.js",
			"icon": "assets/SP_TextInput_Sm",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-2.2.4.min.js", "cdn": "https://code.jquery.com/jquery-2.2.4.min.js"},
				{"src": "../sdk/anwidget.js"}
			],
			"properties": [
				{"name": "PROP_VALUE", "variable": "value", "type": "String", "default": ""},
				{"name": "PROP_DISABLED", "variable": "disabled", "type": "Boolean", "default": "false"},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "ui-textinput"}						
			]
		}]
}