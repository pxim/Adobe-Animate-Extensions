(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.我的多肉乱雪 = function() {
	this.initialize(img.我的多肉乱雪);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,270);


(lib.我的多肉玉扇 = function() {
	this.initialize(img.我的多肉玉扇);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,270);


(lib.我的多肉碧光环 = function() {
	this.initialize(img.我的多肉碧光环);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,270);


(lib.我的多肉框 = function() {
	this.initialize(img.我的多肉框);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,550);


(lib.关闭按下 = function() {
	this.initialize(img.关闭按下);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.关闭移入 = function() {
	this.initialize(img.关闭移入);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.关闭 = function() {
	this.initialize(img.关闭);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.关闭();
	this.instance.parent = this;

	this.instance_1 = new lib.关闭移入();
	this.instance_1.parent = this;

	this.instance_2 = new lib.关闭按下();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.我的多肉玉扇();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,230,270), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.我的多肉碧光环();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,230,270), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.我的多肉乱雪();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,230,270), null);


// stage content:
(lib.Y08a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		init();
		function init(){
			for(var k=0;k<3;k++){
				_this["plant_" + k.toString()].visible = false;
			}
			
		//	setCookie("ani_plantType","2");
			var plantTypeStr = getCookie("plantType");
			if(plantTypeStr == null || plantTypeStr == "" || plantTypeStr == "null"){return;}
			var plantTypeAry = plantTypeStr.split(",");
			var origX = 40;
			var origY = 165;
			for(var i=0;i<plantTypeAry.length;i++){
				var mc = _this["plant_" + plantTypeAry[i]];
				mc.visible = true;
				mc.x = origX;
				mc.y = origY;
				var bounds = mc.getBounds();
				origX = origX + bounds.width + 19;
			}
			
			_this["btn_close"].addEventListener("click", onClose);
		}
		
		function onClose(event){
			setCookie("myMeaty_close","false");
		}
		
		/**
		* 写cookies;
		* 在默认的情况下，cookie 会在浏览器关闭的时候自动清除，但是我们可以通过expires来设置 cookie 的有效期。语法如下：
		*/
		function setCookie(name, value, expiredays) {
			//var expiredays = 30;
			expiredays = 365;
			var exp = new Date();
			exp.setTime(exp.getTime() + expiredays * 24 * 60 * 60 * 1000);
			document.cookie = name + "=" + value + ";expires=" + exp.toString() +";path=/";
		}
		
		//读cookies
		function getCookie(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return arr[2];
			else
				return null;
		}
		
		//删cookies
		function delCookie(name) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval = this.getCookie(name);
			if (cval != null)
				document.cookie = name + "=" + cval + ";expires=" + exp.toString();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 3
	this.plant_2 = new lib.元件3();
	this.plant_2.parent = this;
	this.plant_2.setTransform(538,165);

	this.plant_1 = new lib.元件2();
	this.plant_1.parent = this;
	this.plant_1.setTransform(289,165);

	this.plant_0 = new lib.元件1();
	this.plant_0.parent = this;
	this.plant_0.setTransform(40,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plant_0},{t:this.plant_1},{t:this.plant_2}]}).wait(1));

	// 图层 2
	this.btn_close = new lib.close();
	this.btn_close.parent = this;
	this.btn_close.setTransform(750,29.1);
	this.btn_close.visible = false;
	new cjs.ButtonHelper(this.btn_close, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_close).wait(1));

	// 图层 1
	this.instance = new lib.我的多肉框();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,275,800,550);
// library properties:
lib.properties = {
	id: '47D6E458DE468B4BBBF7B14C1982DD77',
	width: 800,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.01,
	webfonts: {},
	manifest: [
		{src:"images/我的多肉乱雪_.png", id:"我的多肉乱雪"},
		{src:"images/我的多肉玉扇_.png", id:"我的多肉玉扇"},
		{src:"images/我的多肉碧光环_.png", id:"我的多肉碧光环"},
		{src:"images/我的多肉框_.png", id:"我的多肉框"},
		{src:"images/关闭按下_.png", id:"关闭按下"},
		{src:"images/关闭移入_.png", id:"关闭移入"},
		{src:"images/关闭_.png", id:"关闭"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['47D6E458DE468B4BBBF7B14C1982DD77'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;