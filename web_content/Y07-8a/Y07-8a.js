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



(lib.我的多肉 = function() {
	this.initialize(img.我的多肉);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,24);


(lib.底背景 = function() {
	this.initialize(img.底背景);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1124,768);


(lib.积分兑换 = function() {
	this.initialize(img.积分兑换);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,24);


(lib.an_Label = function(options) {
	this._element = new $.an.Label(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.jifenBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.积分兑换();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApXCWIAAkrISvAAIAAErg");
	this.shape.setTransform(60,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,30);


(lib.duorouBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.我的多肉();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApXCWIAAkrISvAAIAAErg");
	this.shape.setTransform(60,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,30);


// stage content:
(lib.Y078a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		init();
		function init(){
			_this.btn_1.addEventListener("click", fl_ClickToGoToWebPage);
			_this.btn_2.addEventListener("click", fl_ClickToGoToWebPage);
			
			createDetailPageIframe();
		    window.addEventListener( 'resize', resizeUI, false );
		}
		
		var isVisible1 = false;
		var isVisible2 = false;
		function fl_ClickToGoToWebPage(event) {
			var target = event.currentTarget;
			if(isVisible1 == false){
				switch(target){
					case _this["btn_1"]:
						updateResPageUrl("Y07a/Y07a.html");
						break;
					case _this["btn_2"]:
						updateResPageUrl("Y08a/Y08a.html");
						break;
				}
				isVisible1 = true;
			}else{
				window.document.getElementById("page_detail").style.display = "none";
				window.document.getElementById("page_detail").src = "";
				isVisible1 = false;
			}
		}
		
		
		function createDetailPageIframe() {
			$(document.body).append("<div id='iframeBox' style='background-color: #ffffff'></div>");
			var w1 = $("body").width();
			$("#iframeBox").append("<iframe id='page_detail' name='page_detail' frameBorder='no' scrolling='no' border='0' marginwidth='0' marginheight='0' style=' position:absolute; margin:auto; display:none; top: 0px; left: 0px; z-index: 2;'></iframe>");
			
			var w2 = w1*(800/1124) + "px";
			$("#page_detail").css("width",w1);
			$("#page_detail").css("height","100%");
		}
		
		function resizeUI() {
			var w1 = $("body").width();
			var w2 = w1*(800/1124) + "px";
			
			$("#page_detail").css("top","0px");
			$("#page_detail").css("left","0px");
			$("#page_detail").css("width",w1);
			$("#page_detail").css("height","100%");
		}
		
		function updateResPageUrl(_url) {
			$("#page_detail").attr("src", _url);
			$("#page_detail").css("display","block");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 4
	this.movieClip_1 = new lib.an_Label({'id': 'movieClip_1', 'label':'Label', 'disabled':false, 'visible':false, 'class':'ui-label'});

	this.movieClip_1.setTransform(306.5,701,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// 图层 2
	this.btn_2 = new lib.duorouBtn();
	this.btn_2.parent = this;
	this.btn_2.setTransform(1039,31,1,1,0,0,0,55,12);
	this.btn_2.alpha = 0.102;
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.duorouBtn(), 3);

	this.btn_1 = new lib.jifenBtn();
	this.btn_1.parent = this;
	this.btn_1.setTransform(886,31,1,1,0,0,0,55,12);
	this.btn_1.alpha = 0.102;
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.jifenBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_1},{t:this.btn_2}]}).wait(1));

	// 图层 1
	this.instance = new lib.底背景();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(562,384,1124,768);
// library properties:
lib.properties = {
	id: 'BD0922931EE73F4D9291189707C8E4FA',
	width: 1124,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/我的多肉_.png", id:"我的多肉"},
		{src:"images/底背景_.jpg", id:"底背景"},
		{src:"images/积分兑换_.png", id:"积分兑换"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/label.js", id:"an.Label"}
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
an.compositions['BD0922931EE73F4D9291189707C8E4FA'] = {
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;