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



(lib.不对哦0 = function() {
	this.initialize(img.不对哦0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,252);


(lib.游戏第一关 = function() {
	this.initialize(img.游戏第一关);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,49);


(lib.恭喜您0 = function() {
	this.initialize(img.恭喜您0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,280);


(lib.归类完成0 = function() {
	this.initialize(img.归类完成0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,68);


(lib.归类完成1 = function() {
	this.initialize(img.归类完成1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,68);


(lib.归类完成2 = function() {
	this.initialize(img.归类完成2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,68);


(lib.y11 = function() {
	this.initialize(img.y11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y1 = function() {
	this.initialize(img.y1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y22 = function() {
	this.initialize(img.y22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y2 = function() {
	this.initialize(img.y2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y33 = function() {
	this.initialize(img.y33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y3 = function() {
	this.initialize(img.y3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y44 = function() {
	this.initialize(img.y44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y4 = function() {
	this.initialize(img.y4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y55 = function() {
	this.initialize(img.y55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y5 = function() {
	this.initialize(img.y5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y66 = function() {
	this.initialize(img.y66);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y6 = function() {
	this.initialize(img.y6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y77 = function() {
	this.initialize(img.y77);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y7 = function() {
	this.initialize(img.y7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y88 = function() {
	this.initialize(img.y88);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y8 = function() {
	this.initialize(img.y8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y99 = function() {
	this.initialize(img.y99);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.y9 = function() {
	this.initialize(img.y9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,95);


(lib.再试一次0 = function() {
	this.initialize(img.再试一次0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,61);


(lib.再试一次1 = function() {
	this.initialize(img.再试一次1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,62);


(lib.再试一次2 = function() {
	this.initialize(img.再试一次2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,61);


(lib.底框 = function() {
	this.initialize(img.底框);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,670);


(lib.进入下一关0 = function() {
	this.initialize(img.进入下一关0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,69);


(lib.进入下一关1 = function() {
	this.initialize(img.进入下一关1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,69);


(lib.进入下一关2 = function() {
	this.initialize(img.进入下一关2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,69);// helper functions:

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


(lib.submitBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.归类完成0();
	this.instance.parent = this;

	this.instance_1 = new lib.归类完成1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.归类完成2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205,68);


(lib.nextBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.进入下一关0();
	this.instance.parent = this;

	this.instance_1 = new lib.进入下一关1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.进入下一关2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,69);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,81,95), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y99();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,81,95), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y88();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,81,95), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,81,95), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y77();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,81,95), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,81,95), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,81,95), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,81,95), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(0,0,81,95), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0,0,81,95), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,81,95), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,81,95), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,81,95), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,81,95), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,81,95), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,81,95), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,81,95), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,81,95), null);


(lib.元件3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhGTA0WMAAAhorMCMnAAAMAAABorg");
	this.shape.setTransform(450,335);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3_1, new cjs.Rectangle(0,0,900,670), null);


(lib.元件2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("EhGTA0WMAAAhorMCMnAAAMAAABorg");
	this.shape.setTransform(450,335);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2_1, new cjs.Rectangle(0,0,900,670), null);


(lib.againBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.再试一次0();
	this.instance.parent = this;

	this.instance_1 = new lib.再试一次1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.再试一次2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204,61);


(lib.errorWin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		var _this = this;
		init();
		function init(){
			_this["btn_again"].addEventListener("mousedown", onAgain);
			onSound();
		}
		
		function onAgain(event){
			_this.visible = false;
			_this.gotoAndStop(0);
			//createjs.Sound.removeAllSounds();
			createjs.Sound.stop();
			setObjEnabled(true);
		}
		
		function onSound(){
		/*	createjs.Sound.removeAllSounds();
			createjs.Sound.on("fileload", handleLoad);
			createjs.Sound.registerSound("sounds/Y04a_e.mp3", "sound_e", 3);
			function handleLoad(event) {
		     createjs.Sound.play("sound_e");
			}*/
			createjs.Sound.stop();
			playSound("Y04a_e");
		}
		
		function setObjEnabled(bool){
			for(var i=0;i<18;i++){
			var mc = _this.parent["hitItem_" + i.toString()];
				mc.mouseEnabled = bool;
			}
			_this.parent["btn_submit"].mouseEnabled = bool;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 2
	this.btn_again = new lib.againBtn();
	this.btn_again.parent = this;
	this.btn_again.setTransform(348,385);
	new cjs.ButtonHelper(this.btn_again, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_again).wait(2));

	// 图层 1
	this.instance = new lib.不对哦0();
	this.instance.parent = this;
	this.instance.setTransform(220,215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层 4
	this.instance_1 = new lib.元件3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(450,335,1,1,0,0,0,450,335);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,900,670);


(lib.correctWin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		var _this = this;
		init();
		function init(){
			_this["btn_next"].addEventListener("mousedown", onNext);
			onSound();
			setCookie("duorou_game_1","true");
			setCookie("totalIntegral","1000");
		}
		
		function onNext(event){
			//_this.visible = false;
			setCookie("duorou_game_to_2","true");
			//createjs.Sound.removeAllSounds();
			createjs.Sound.stop();
		}
		
		function onSound(){
		/*	createjs.Sound.removeAllSounds();
			createjs.Sound.on("fileload", handleLoad);
			createjs.Sound.registerSound("sounds/Y04a_c.mp3", "sound_c", 3);
			function handleLoad(event) {
		     createjs.Sound.play("sound_c");
			}*/
			createjs.Sound.stop();
			playSound("Y04a_c");
		}
		
		function setCookie(name, value, expiredays) {
		        //var expiredays = 30;
			expiredays = 365;
			var exp = new Date();
			exp.setTime(exp.getTime() + expiredays * 24 * 60 * 60 * 1000);
			document.cookie = name + "=" + value + ";expires=" + exp.toString() +";path=/";
		}
		
		function getCookie(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return arr[2];
			else
				return null;
		}
		
		function delCookie(name) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval = getCookie(name);
			if (cval != null)
				document.cookie = name + "=" + cval + ";expires=" + exp.toString() +";path=/";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 2
	this.btn_next = new lib.nextBtn();
	this.btn_next.parent = this;
	this.btn_next.setTransform(350,390);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(2));

	// 图层 1
	this.instance = new lib.恭喜您0();
	this.instance.parent = this;
	this.instance.setTransform(180,195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// bg
	this.instance_1 = new lib.元件2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(450,335,1,1,0,0,0,450,335);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,900,670);


// stage content:
(lib.Y04a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Y04a_c");
		playSound("Y04a_e");
		playSound("Y04a_q");
		this.stop();
		var _this = this;
		var hitItemAry = new Array();
		var hitItemCoordAry = new Array();
		var hitAnsAry = new Array();
		init();
		function init(){
			for(var i=0;i<18;i++){
				var mc = _this["hitItem_" + i.toString()];
				mc.name = "hitItem_" + i.toString();
				mc.gotoAndStop(0);
				mc["isCorrected"] = false;
				mc.addEventListener("mousedown",onHitItemDown);
				mc.addEventListener("pressup",onHitItemOut);
				hitItemAry.push(mc);
				hitItemCoordAry.push({x:mc.x,y:mc.y,isUsed:false});
				hitAnsAry.push({x:mc.x,y:mc.y,isCorrected:false});
			}
			setRandomCoord();
			_this["btn_submit"].addEventListener("click",onSubmit);
			_this["win_error"].visible = false;
			_this["win_correct"].visible = false;
			createjs.Sound.stop();
			onSound();
		}
		
		function onSound(){
		/*	createjs.Sound.on("fileload", handleLoad);
			createjs.Sound.registerSound("sounds/Y04a_q.mp3", "sound_q", 3);
			function handleLoad(event) {
		     createjs.Sound.play("sound_q");
			}*/
			createjs.Sound.stop();
			playSound("Y04a_q");
		}
		
		function onSubmit(event){
			var index = 0;
			for(var i=0;i<hitItemAry.length;i++){
				var mc1 = hitItemAry[i];
				var mc2 = hitAnsAry[i];
				if(i%2 == 0){
					//console.log(i);
					var i2 = i + 1;
					if((mc1.x == hitAnsAry[i].x && mc1.y == hitAnsAry[i].y) || (mc1.x == hitAnsAry[i2].x && mc1.y == hitAnsAry[i2].y)){
					//mc2.isCorrected = true;
						mc1.isCorrected = true;
						index ++;
				    }
				}else{
					var i3 = i - 1;
					var i2 = i + 1;
					if((mc1.x == hitAnsAry[i].x && mc1.y == hitAnsAry[i].y) || (mc1.x == hitAnsAry[i3].x && mc1.y == hitAnsAry[i3].y)){
					//mc2.isCorrected = true;
						mc1.isCorrected = true;
						index ++;
				    }
				}
			}
			
			if(index == 18){
				_this["win_correct"].visible = true;
				_this["win_correct"].gotoAndStop(1);
				_this.setChildIndex(_this["win_correct"],_this.numChildren - 1);
				setObjEnabled(false);
			}else{
				_this["win_error"].visible = true;
				_this["win_error"].gotoAndStop(1);
				_this.setChildIndex(_this["win_error"],_this.numChildren - 1);
				setObjEnabled(false);
			}
		}
		
		function setRandomCoord(){
			for(var i=0;i<hitItemAry.length;i++){
				var obj = hitItemCoordAry[Math.floor(Math.random() * hitItemCoordAry.length)];
				if(obj.isUsed == false){
					hitItemAry[i].x = obj.x;
					hitItemAry[i].y = obj.y;
					obj.isUsed = true;
					hitItemAry[i]["orgX"] = obj.x;
					hitItemAry[i]["orgY"] = obj.y;
				}else{
					i = i -1;
				}
			}
		}
		
		function onHitItemDown(event){
			var target = event.currentTarget;
			_this.setChildIndex(target,_this.numChildren - 1);
			target.addEventListener("pressmove",onHitItemMove);
		}
		
		function onHitItemMove(event){
			var target = event.currentTarget;
			var point = _this.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
			target.x = point.x - 40.5;
			target.y = point.y - 47.5;
		}
		
		function onHitItemOut(event){
			var target = event.currentTarget;
			target.removeEventListener("pressmove",onHitItemMove);
			
			check(target);
		}
		
		function check(target){
			var isHit = false;
			for(var i=0;i<hitItemAry.length;i++){
				var mc = hitItemAry[i];
				if(target != mc){
					if(hitRect(target,mc)){
					var _mcPoint = new createjs.Point(mc["orgX"],mc["orgY"]);
					var _targetPoint = new createjs.Point(target["orgX"],target["orgY"]);
					target.setTransform(_mcPoint.x,_mcPoint.y);
					target["orgX"] = _mcPoint.x;
					target["orgY"] = _mcPoint.y;
					mc.setTransform(_targetPoint.x,_targetPoint.y);
					mc["orgX"] = _targetPoint.x;
					mc["orgY"] = _targetPoint.y;
					isHit = true;
					return;
					}
				}
			}
			
			if(isHit == false){
				target.x = target["orgX"];
				target.y = target["orgY"];
			}
		}
		
		function hitRect(obj1,obj2)
		{
			//var rect = new createjs.Rectangle(0, 0, 100, 100);
			var rect1 = obj1.getBounds();
			var rect2 = obj2.getBounds();
			rect1.x = obj1.x;
			rect1.y = obj1.y;
			rect2.x = obj2.x;
			rect2.y = obj2.y;
			return rect1.intersects(rect2);
		}
		
		function setObjEnabled(bool){
			for(var i=0;i<hitItemAry.length;i++){
				hitItemAry[i].mouseEnabled = bool;
			}
			_this["btn_submit"].mouseEnabled = bool;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// correctWin
	this.win_correct = new lib.correctWin();
	this.win_correct.parent = this;
	this.win_correct.setTransform(270,140,1,1,0,0,0,270,140);

	this.timeline.addTween(cjs.Tween.get(this.win_correct).wait(2));

	// errorWin
	this.win_error = new lib.errorWin();
	this.win_error.parent = this;
	this.win_error.setTransform(230,119.5,1,1,0,0,0,230,119.5);

	this.timeline.addTween(cjs.Tween.get(this.win_error).wait(2));

	// hititem
	this.hitItem_17 = new lib.元件18();
	this.hitItem_17.parent = this;
	this.hitItem_17.setTransform(711,507);

	this.hitItem_16 = new lib.元件17();
	this.hitItem_16.parent = this;
	this.hitItem_16.setTransform(602,487);

	this.hitItem_15 = new lib.元件16();
	this.hitItem_15.parent = this;
	this.hitItem_15.setTransform(464,507);

	this.hitItem_14 = new lib.元件15();
	this.hitItem_14.parent = this;
	this.hitItem_14.setTransform(354,487);

	this.hitItem_13 = new lib.元件14();
	this.hitItem_13.parent = this;
	this.hitItem_13.setTransform(216,507);

	this.hitItem_12 = new lib.元件13();
	this.hitItem_12.parent = this;
	this.hitItem_12.setTransform(107,487);

	this.hitItem_11 = new lib.元件12();
	this.hitItem_11.parent = this;
	this.hitItem_11.setTransform(711,327);

	this.hitItem_10 = new lib.元件11();
	this.hitItem_10.parent = this;
	this.hitItem_10.setTransform(602,307);

	this.hitItem_9 = new lib.元件10();
	this.hitItem_9.parent = this;
	this.hitItem_9.setTransform(464,327);

	this.hitItem_8 = new lib.元件9();
	this.hitItem_8.parent = this;
	this.hitItem_8.setTransform(354,307);

	this.hitItem_7 = new lib.元件8();
	this.hitItem_7.parent = this;
	this.hitItem_7.setTransform(216,327);

	this.hitItem_6 = new lib.元件7();
	this.hitItem_6.parent = this;
	this.hitItem_6.setTransform(107,307);

	this.hitItem_5 = new lib.元件6();
	this.hitItem_5.parent = this;
	this.hitItem_5.setTransform(711,147);

	this.hitItem_4 = new lib.元件5();
	this.hitItem_4.parent = this;
	this.hitItem_4.setTransform(602,128);

	this.hitItem_3 = new lib.元件4();
	this.hitItem_3.parent = this;
	this.hitItem_3.setTransform(464,147);

	this.hitItem_2 = new lib.元件3();
	this.hitItem_2.parent = this;
	this.hitItem_2.setTransform(354,128);

	this.hitItem_1 = new lib.元件2();
	this.hitItem_1.parent = this;
	this.hitItem_1.setTransform(216,147);

	this.hitItem_0 = new lib.元件1();
	this.hitItem_0.parent = this;
	this.hitItem_0.setTransform(106.4,128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hitItem_0},{t:this.hitItem_1},{t:this.hitItem_2},{t:this.hitItem_3},{t:this.hitItem_4},{t:this.hitItem_5},{t:this.hitItem_6},{t:this.hitItem_7},{t:this.hitItem_8},{t:this.hitItem_9},{t:this.hitItem_10},{t:this.hitItem_11},{t:this.hitItem_12},{t:this.hitItem_13},{t:this.hitItem_14},{t:this.hitItem_15},{t:this.hitItem_16},{t:this.hitItem_17}]}).wait(2));

	// submit
	this.btn_submit = new lib.submitBtn();
	this.btn_submit.parent = this;
	this.btn_submit.setTransform(695,7.5);
	new cjs.ButtonHelper(this.btn_submit, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_submit).wait(2));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFA3QgDgDAAgEQAAgEADgCQACgDADAAQAEAAACADQAEACAAAEQAAAEgEADQgCADgEAAQgDAAgCgDgAgFAYIgBhRIANAAIgCBRg");
	this.shape.setTransform(509.5,82.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAABCQgSAAAAgTIAAhwIBNAAIAABIIgLAAIAAgFIg3AAIAAArQAAALAKAAIArAAQAJAAACgKIACgYIAKAEIgCAYQgCAQgQAAgAAZgIIAXAAIAAguIgXAAgAgHgIIAWAAIAAguIgWAAgAhEAsIAAhkIAlAAIAABfIgLAAIAAgKIgQAAIAAAPgAg6ATIAQAAIAAhBIgQAAg");
	this.shape_1.setTransform(494.8,82.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhIA+QAygHAMgcIg6AAIAAgKIA9AAIACgMIAKAAIgCAMIBBAAIAAAKIg7AAQAUAcAsAFIgIAMQgwgJgRggQgNAgg0AKIgHgLgAAFgOIAAAOIgKAAIAAgXQgaAXghALIgHgKQAhgIAXgSIg0AAIAAgKIA+AAIAAglIAKAAIAAAlIA+AAIAAAKIg+AAIAAAJIAEgGQAoAPAVAJIgFAJQgZgLgjgOgAAUguIAagVIAIAIIgbAVgAg2g8IAIgHQAPALAKAJIgIAIQgJgJgQgMg");
	this.shape_2.setTransform(479.6,82.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2A+QAWgVAAgwIAAhAIAMAAIAAA8QAAA8gaAXIgIgKgAA0BCIAAgKIhFAAIAAgLIBFAAIAAgtIg9AAIAAgKIA9AAIAAgnIhAAAIAAgLIBLAAIAAB+gAg+AlIAAheIALAAIAABeg");
	this.shape_3.setTransform(464.5,82.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag2A+QAWgVAAgwIAAhAIAMAAIAAA8QAAA8gaAXIgIgKgAA0BCIAAgKIhFAAIAAgLIBFAAIAAgtIg9AAIAAgKIA9AAIAAgnIhAAAIAAgLIBLAAIAAB+gAg+AlIAAheIALAAIAABeg");
	this.shape_4.setTransform(449.5,82.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgxBHIAAhRIgOAXIgFgNQAWghALglIALAFIgMAfIAABpgAAaBGIgDgMIAXABQAHAAACgEQACgCAAgHIAAhdIgmAAIAAgLIAyAAIAABpQAAANgFAEQgEAGgMAAIgKAAIgMAAgAgQBGIAAhrIAMAAIAABrgAgPhAIAJgHIARAXIgKAHIgQgXg");
	this.shape_5.setTransform(434.1,82.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaBGQgSAAAAgTIAAhIIAMAAIAAAlQAqgNAngVIAHALQgtAWgrANIAAAWQAAAJAJAAIA+AAQALAAABgIIADgXIAMAFIgDAWQgDAPgSAAgAA3gVIAAgQIhtAAIAAAQIgMAAIAAgbIBCAAQgEgIgGgHIAKgGQAGAHAGAKIgIAEIA/AAIAAAbg");
	this.shape_6.setTransform(419.5,82.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtBJIAAg5IgUAYIgIgMQANgLAPgRIAAhGIALAAIAACPgAAOBGIgCgMIAUABQAJAAAAgKIAAgfIhEAAIAAgLIBEAAIAAgRIALAAIAAARIAWAAIAAALIgWAAIAAAiQAAASgRAAIgVAAgAgLAbIAJgGIATAVIgKAIIgSgXgAgagGQAUgEAPgHIgOgLIAHgIIARAPQAUgJAOgOIg1AAIgXASIgHgIQAZgQAPgWIAKAGIgLAMIA6AAIAAAKQgVAfhDAQIgFgJgAhHgrIAJgFIAOAbIgKAFIgNgbg");
	this.shape_7.setTransform(404.4,82.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVBIIAAhJIBRAAIAAA3QAAAQgQAAIgXABIgCgLIAVABQAIgBAAgHIAAgIIg5AAIAAAbgAgJAkIA5AAIAAgKIg5AAgAgJARIA5AAIAAgKIg5AAgAg7A6QAFgFAAgIIAAg2IgRAAIAAgLIAcAAIAABDIARgLIABANIgbATgAghgKIAAgJIAuAAIAAgKIglAAIAAgJIAlAAIAAgKIgqAAIAAgKIAqAAIAAgNIAMAAIAAANIAtAAIAAAKIgtAAIAAAKIAoAAIAAAJIgoAAIAAAKIAwAAIAAAJgAhAg6IAJgIIAVAWIgKAIIgUgWg");
	this.shape_8.setTransform(389.6,82.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLATIAJgmIANAAIgLAmg");
	this.shape_9.setTransform(374.2,88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhIBAQARgUAAgsIAAg1IA8AAIgIgOIAKgFIAKAOIgHAFIA/AAIAAALIh0AAIAAAnQAAAzgUAaIgJgKgAgPBGIgCgNIATACQAJAAAAgJIAAggIgyAAIAAgLIAyAAIgZgRIAHgHIAUANIAbgQIhGAAIAAgLIBbAAIAAALIgmAWIAEACIgEADIAwAAIAAALIgNAaIgKgFIAKgVIgjAAIAAAjQAAARgRAAIgVAAg");
	this.shape_10.setTransform(359.4,82.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKA9QAggNAEgaQACgHAAghIALAAQAAAigCAIIgCAJQAVAOASANIgIAJQgQgNgUgOQgKATgXAKIgHgKgAhJA9QALgVAAguIAAg/IALAAIAAA3QAAA7gNAYIgJgIgAgWBAIAAiGIALAAIAACGgAgqA5IAAh6IAKAAIAAB6gAA3AkIAAg/IgtAAIAAA/IgKAAIAAhJIAWAAIAEgTIgeAAIAAgKIBMAAIAAAKIgjAAIgEATIAhAAIAABJg");
	this.shape_11.setTransform(344.5,82.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBAIgCgOQAOACALAAQANAAAAgOIAAg6QAYgQAWgQIhtAAIAAgMICBAAIAAAPQgaASgbARIAAA1QAAAOgGAGQgGAFgNABIgYgBg");
	this.shape_12.setTransform(329.3,83);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLBGIAAgLIgqAAIAAALIgLAAIAAhBIAaAAIAAgWIgiAAIAAgLIAiAAIAAgXIgdADIgCgLQAjgDAigFIACALIgcADIAAAZIAhAAIAAALIghAAIAAAWIAaAAIAABBgAg1AxIAqAAIAAgiIgqAAgAAiBFQgSAAAAgSIAAh4IAMAAIAAB1QAAAKAKAAIAKAAQAJAAABgJQACgNAAgOIANAFQgCAPgCALQgDAQgSAAg");
	this.shape_13.setTransform(314.6,82.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhCBGIgCgMIAQABQAGAAAAgHIAAglIgWAJIgEgMIAagJIAAghIgYAAIAAgLIAYAAIAAgcIAMAAIAAAcIAWAAIAAALIgWAAIAAAeIAYgIIABAKIgZAJIAAArQAAAQgPAAIgRAAgAAEBGIgDgOIAZABQAKAAgBgKIAAheIgtAAIAAgLIBTAAIAAALIgZAAIAABiQAAATgSAAIgaAAg");
	this.shape_14.setTransform(299.5,82.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag9BHIAAh5IA5AAIABgVIAKAAIgBAVIA4AAIAABnQAAAQgQAAIgYAAIgCgMIAXABQAIAAAAgIIAAhZIgvAAIgCAHQAaAPARALIgIAIQgUgOgSgLQgJAOgZANIgIgJQAggQAEgSIgqAAIAABugAgsAoQAogQAAggIAKAAQAAAJgDAIIApAbIgHAKIglgbQgKATgaALIgIgJg");
	this.shape_15.setTransform(284.5,82.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag9BHIAAh5IA5AAIABgVIAKAAIgBAVIA4AAIAABnQAAAQgQAAIgYAAIgCgMIAXABQAIAAAAgIIAAhZIgvAAIgCAHQAaAPARALIgIAIQgUgOgSgLQgJAOgZANIgIgJQAggQAEgSIgqAAIAABugAgsAoQAogQAAggIAKAAQAAAJgDAIIApAbIgHAKIglgbQgKATgaALIgIgJg");
	this.shape_16.setTransform(269.5,82.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AANBGIgDgNIABAAQAOACANAAQANAAABgOQACgWAAg6IgnAAQgGAOgHALIgJgGQAMgVAKghIAMADIgHAVIAvAAQgCBKgBAUQgBAXgXAAIgbgBgAhCBHIAAh1IAPAAIAJgYIAMAEIgJAUIAdAAIAAB0IgLAAIAAgLIghAAIAAAMgAg2AwIAhAAIAAgmIghAAgAg2AAIAhAAIAAgjIghAAgAAFgGIAJgGQAQASAJAOIgKAIQgLgRgNgRg");
	this.shape_17.setTransform(254.5,82.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag4A9QAfgEAXgJQgRgKgLgOQgPAWgVAPIgGgLQAcgTAPgeIgoAAIAAgJIAsAAIAFgMIAMAAIgEAMIBTAAIAAAJIhYAAIgGAMIBNAAIAAAKQgMAPgTAKQAWAHAcACIgHAMQghgEgYgKQgYAKgjAGIgGgKgAAKArQASgIAKgMIg4AAQAMAMAQAIgAA3gMIAAgMIhsAAIAAAMIgLAAIAAgXIAcAAIgNgPIAIgFIgUAAIgCgKQBFgBA6gEIACALIhCADIALAQIgKAFIgLgRIAIgEIglABIAMAPIgIAFIAkAAIAjAAIgGgEQAHgJAGgKIALAGIgNARIAaAAIAAAXgAABgjgAgjgjIAIgFIgMgPIAlgBIgIAEIALARg");
	this.shape_18.setTransform(239.5,82.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AACBBIgCgNIAZABQALAAAAgMIAAheIhrAAIAAgLICPAAIAAALIgYAAIAABiQAAAUgTAAIgbAAgAg3AkIAAhEIA/AAIAAA6Ig0AAIAAAKgAgsAPIAqAAIAAgkIgqAAg");
	this.shape_19.setTransform(224.5,83.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhDBEIAAgKICIAAIAAAKgAg1AnIAAgKIBoAAIAAAKgAhHAHIAOgCIAAg5IAKAAIAAA3IATgDIAAhCIAKAAIAAAbIAYAAIAAAKIgYAAIAAAdIAZgEIAAAJIhLANgAAhAOQgLAAgFgEQgEgDAAgKIAAhAIALAAIAAAlQASgKARgOIAIAJQgVAPgWAKIAAAQQAAAEABACQACADAHAAIANAAQAKAAACgHIACgTIALAEIgDARQgDAOgRAAg");
	this.shape_20.setTransform(209.5,82.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhIA7IATgSIAAgwIgSAAIAAgKIAdAAIAAA8QAJAPAVAAIAlABIAwgBIgEALIgwAAIgiAAQgZAAgKgRQgGAFgMAPgAggAoQAbgLASgSIghgdIAHgHIAiAcQAOgQAIgVIAMAFQgKAWgPARIAjAeIgJAJIgigeQgUAUgaALIgIgKgAg/g8IAJgHIAVAbIgLAIQgLgSgIgKgAgdglIAAgKIBiAAIAAAKgAAGhCIAKgEIALASIgLAFIgKgTg");
	this.shape_21.setTransform(194.5,82.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtBJIAAg5IgUAYIgIgMQANgLAPgRIAAhGIALAAIAACPgAAOBGIgCgMIAUABQAJAAAAgKIAAgfIhEAAIAAgLIBEAAIAAgRIALAAIAAARIAWAAIAAALIgWAAIAAAiQAAASgRAAIgVAAgAgLAbIAJgGIATAVIgKAIIgSgXgAgagGQAUgEAPgHIgOgLIAHgIIARAPQAUgJAOgOIg1AAIgXASIgHgIQAZgQAPgWIAKAGIgLAMIA6AAIAAAKQgVAfhDAQIgFgJgAhHgrIAJgFIAOAbIgKAFIgNgbg");
	this.shape_22.setTransform(179.4,82.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgvA9QAggIATgNQgTgSgIgcQgPAvgbAZIgHgKQAfggANg+IgnAAIAAgLIAqAAIACgXIANACIgDAVIBUAAIAAALIhWAAIgGAWIBMAAIAAAKQgLAegVARQAVANAdAFIgJANQgegJgVgPQgUAPggAKIgIgMgAANAiQAWgSAHgWIg2AAQAIAYARAQg");
	this.shape_23.setTransform(164.5,82.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCA9QANgVAAgnIAAhFIA5AAIAAB1QAAARgQAAIgRgBIgCgLIARABQAHABAAgIIAAghIgjAAQgDAggNAWIgIgIgAAWAFIAjAAIAAgaIgjAAgAAWgfIAjAAIAAgbIgjAAgAhCA9QANgWgBgkIAAhGIAzAAIAAB1QAAAOgQAAIgQAAIgCgLIAQABQAHAAAAgIIAAgfIgdAAQgBAggNAWIgJgIgAgrAFIAdAAIAAgaIgdAAgAgrgfIAdAAIAAgaIgdAAg");
	this.shape_24.setTransform(149.1,83);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghBGIgDgOIAWABQAKAAAAgJIAAh1IAMAAIAAB4QAAATgUAAIgVAAgAhIAjQARgcAQgsIAMAEQgOAngTAkIgMgHgAAaggIALgFQASAiASAkIgNAHQgSgpgQgfg");
	this.shape_25.setTransform(134.5,82.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgzA9QAbgGAXgMQgWgSgLgbIgKAAQAAAxgUAYIgIgKQARgUgBguIAAgyIA4AAIAAgRIAMAAIAAARIA4AAIgEAiIgMgBIACgWIgqAAIAAAfIAtAAIAAALQgOAbgXASQAWALAfAEIgJAOQgggIgXgOQgXAOgdAJIgIgMgAAJAkQAWgQAMgWIhBAAQALAXAUAPgAgsgNIAsAAIAAgfIgsAAg");
	this.shape_26.setTransform(119.5,82.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgpA+QAVgUgBgjIAAhGIBaAAIAAB0QAAAQgPAAIgXAAIgCgMIAWABQAHAAAAgHIAAhoIhDAAIAAA7QAAArgYAWIgIgJgAABAzIAAgsIAtAAIAAAlIgjAAIAAAHgAALAjIAZAAIAAgTIgZAAgAg5ApQAFgFAAgIIAAgsIgQAAIAAgKIAbAAIAAA4IAQgNIABANIgbAVgAgFgEIAAgJIAYAAIAAgOIgUAAIAAgJIAUAAIAAgOIAKAAIAAAOIAUAAIAAAJIgUAAIAAAOIAZAAIAAAJgAg7g/IAIgHIAWAXIgJAJIgVgZg");
	this.shape_27.setTransform(104.2,82.7);

	this.instance = new lib.游戏第一关();
	this.instance.parent = this;
	this.instance.setTransform(10,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.instance_1 = new lib.底框();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,335,900,670);
// library properties:
lib.properties = {
	id: 'ADB89E6EBE1E6D43B7E997A9018FB159',
	width: 900,
	height: 670,
	fps: 24,
	color: "#444444",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/不对哦0.png", id:"不对哦0"},
		{src:"images/游戏第一关_.png", id:"游戏第一关"},
		{src:"images/恭喜您0.png", id:"恭喜您0"},
		{src:"images/归类完成0.png", id:"归类完成0"},
		{src:"images/归类完成1.png", id:"归类完成1"},
		{src:"images/归类完成2.png", id:"归类完成2"},
		{src:"images/y11.png", id:"y11"},
		{src:"images/y1.png", id:"y1"},
		{src:"images/y22.png", id:"y22"},
		{src:"images/y2.png", id:"y2"},
		{src:"images/y33.png", id:"y33"},
		{src:"images/y3.png", id:"y3"},
		{src:"images/y44.png", id:"y44"},
		{src:"images/y4.png", id:"y4"},
		{src:"images/y55.png", id:"y55"},
		{src:"images/y5.png", id:"y5"},
		{src:"images/y66.png", id:"y66"},
		{src:"images/y6.png", id:"y6"},
		{src:"images/y77.png", id:"y77"},
		{src:"images/y7.png", id:"y7"},
		{src:"images/y88.png", id:"y88"},
		{src:"images/y8.png", id:"y8"},
		{src:"images/y99.png", id:"y99"},
		{src:"images/y9.png", id:"y9"},
		{src:"images/再试一次0.png", id:"再试一次0"},
		{src:"images/再试一次1.png", id:"再试一次1"},
		{src:"images/再试一次2.png", id:"再试一次2"},
		{src:"images/底框_.png", id:"底框"},
		{src:"images/进入下一关0.png", id:"进入下一关0"},
		{src:"images/进入下一关1.png", id:"进入下一关1"},
		{src:"images/进入下一关2.png", id:"进入下一关2"},
		{src:"sounds/Y04a_c.mp3", id:"Y04a_c"},
		{src:"sounds/Y04a_e.mp3", id:"Y04a_e"},
		{src:"sounds/Y04a_q.mp3", id:"Y04a_q"}
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
an.compositions['ADB89E6EBE1E6D43B7E997A9018FB159'] = {
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