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



(lib.a1089978 = function() {
	this.initialize(img.a1089978);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.链接按钮1a = function() {
	this.initialize(img.链接按钮1a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮1b = function() {
	this.initialize(img.链接按钮1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮2a = function() {
	this.initialize(img.链接按钮2a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮2b = function() {
	this.initialize(img.链接按钮2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮3a = function() {
	this.initialize(img.链接按钮3a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮3b = function() {
	this.initialize(img.链接按钮3b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮4a = function() {
	this.initialize(img.链接按钮4a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮4b = function() {
	this.initialize(img.链接按钮4b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮5a = function() {
	this.initialize(img.链接按钮5a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮5b = function() {
	this.initialize(img.链接按钮5b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮6a = function() {
	this.initialize(img.链接按钮6a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮6b = function() {
	this.initialize(img.链接按钮6b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮7a = function() {
	this.initialize(img.链接按钮7a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.链接按钮7b = function() {
	this.initialize(img.链接按钮7b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.连接7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.链接按钮7a();
	this.instance.parent = this;

	this.instance_1 = new lib.链接按钮7b();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.连接6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.链接按钮6a();
	this.instance.parent = this;

	this.instance_1 = new lib.链接按钮6b();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.连接5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.链接按钮5a();
	this.instance.parent = this;

	this.instance_1 = new lib.链接按钮5b();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.连接4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.链接按钮4a();
	this.instance.parent = this;

	this.instance_1 = new lib.链接按钮4b();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.连接3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.链接按钮3a();
	this.instance.parent = this;

	this.instance_1 = new lib.链接按钮3b();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.连接2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.链接按钮2a();
	this.instance.parent = this;

	this.instance_1 = new lib.链接按钮2b();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


(lib.连接1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.链接按钮1a();
	this.instance.parent = this;

	this.instance_1 = new lib.链接按钮1b();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,33);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("web_content/Y04a/Y04a.html", "_blank");
		}
		
		
		this.btn_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://arvin0.github.io/CreateJS-example/web_content/Y04c/Y04c.html", "_blank");
		}
		
		
		
		this.btn_3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://arvin0.github.io/CreateJS-example/web_content/Y07-8a/Y07-8a.html", "_blank");
		}
		
		
		this.btn_4.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("", "_blank");
		}
		
		
		this.btn_5.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("", "_blank");
		}
		
		this.btn_6.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("", "_blank");
		}
		
		this.btn_7.addEventListener("click", fl_ClickToGoToWebPage_7);
		
		function fl_ClickToGoToWebPage_7() {
			window.open("", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 3
	this.btn_7 = new lib.连接7();
	this.btn_7.parent = this;
	this.btn_7.setTransform(744.5,553.5,1,1,0,0,0,51,16.5);
	this.btn_7.shadow = new cjs.Shadow("rgba(153,153,153,1)",3,3,4);
	new cjs.ButtonHelper(this.btn_7, 0, 1, 1);

	this.btn_6 = new lib.连接6();
	this.btn_6.parent = this;
	this.btn_6.setTransform(520.5,553.5,1,1,0,0,0,51,16.5);
	this.btn_6.shadow = new cjs.Shadow("rgba(153,153,153,1)",3,3,4);
	new cjs.ButtonHelper(this.btn_6, 0, 1, 1);

	this.btn_5 = new lib.连接5();
	this.btn_5.parent = this;
	this.btn_5.setTransform(295.5,553.5,1,1,0,0,0,51,16.5);
	this.btn_5.shadow = new cjs.Shadow("rgba(153,153,153,1)",3,3,4);
	new cjs.ButtonHelper(this.btn_5, 0, 1, 1);

	this.btn_4 = new lib.连接4();
	this.btn_4.parent = this;
	this.btn_4.setTransform(833,448.5,1,1,0,0,0,51,16.5);
	this.btn_4.shadow = new cjs.Shadow("rgba(153,153,153,1)",3,3,4);
	new cjs.ButtonHelper(this.btn_4, 0, 1, 1);

	this.btn_3 = new lib.连接3();
	this.btn_3.parent = this;
	this.btn_3.setTransform(624,448.5,1,1,0,0,0,51,16.5);
	this.btn_3.shadow = new cjs.Shadow("rgba(153,153,153,1)",3,3,4);
	new cjs.ButtonHelper(this.btn_3, 0, 1, 1);

	this.btn_2 = new lib.连接2();
	this.btn_2.parent = this;
	this.btn_2.setTransform(416,448.5,1,1,0,0,0,51,16.5);
	this.btn_2.shadow = new cjs.Shadow("rgba(153,153,153,1)",3,3,4);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 1);

	this.btn_1 = new lib.连接1();
	this.btn_1.parent = this;
	this.btn_1.setTransform(207,448.5,1,1,0,0,0,51,16.5);
	this.btn_1.shadow = new cjs.Shadow("rgba(153,153,153,1)",3,3,4);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4},{t:this.btn_5},{t:this.btn_6},{t:this.btn_7}]}).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0.318,1],0.7,232.9,-0.7,-232.8).s().p("EhRPAkfMAAAhI9MCifAAAMAAABI9g");
	this.shape.setTransform(520,468.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 1
	this.instance = new lib.a1089978();
	this.instance.parent = this;
	this.instance.setTransform(1,0,0.542,0.542);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#49CFEF").s().p("EhRPA22MAAAhtrMCifAAAMAAABtrg");
	this.shape_1.setTransform(520,351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(520,351,1041,702);
// library properties:
lib.properties = {
	id: '1FB51099DC676448ABBDF7AE0978CC72',
	width: 1040,
	height: 702,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/a1089978.jpg", id:"a1089978"},
		{src:"images/链接按钮1a.png", id:"链接按钮1a"},
		{src:"images/链接按钮1b.png", id:"链接按钮1b"},
		{src:"images/链接按钮2a.png", id:"链接按钮2a"},
		{src:"images/链接按钮2b.png", id:"链接按钮2b"},
		{src:"images/链接按钮3a.png", id:"链接按钮3a"},
		{src:"images/链接按钮3b.png", id:"链接按钮3b"},
		{src:"images/链接按钮4a.png", id:"链接按钮4a"},
		{src:"images/链接按钮4b.png", id:"链接按钮4b"},
		{src:"images/链接按钮5a.png", id:"链接按钮5a"},
		{src:"images/链接按钮5b.png", id:"链接按钮5b"},
		{src:"images/链接按钮6a.png", id:"链接按钮6a"},
		{src:"images/链接按钮6b.png", id:"链接按钮6b"},
		{src:"images/链接按钮7a.png", id:"链接按钮7a"},
		{src:"images/链接按钮7b.png", id:"链接按钮7b"}
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
an.compositions['1FB51099DC676448ABBDF7AE0978CC72'] = {
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