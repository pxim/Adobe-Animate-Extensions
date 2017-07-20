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



(lib.按钮按下 = function() {
	this.initialize(img.按钮按下);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,55);


(lib.按钮移入 = function() {
	this.initialize(img.按钮移入);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,55);


(lib.按钮 = function() {
	this.initialize(img.按钮);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,55);


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


(lib.我的多肉 = function() {
	this.initialize(img.我的多肉);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,24);


(lib.我的多肉框 = function() {
	this.initialize(img.我的多肉框);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,550);


(lib.习性强健 = function() {
	this.initialize(img.习性强健);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,360);


(lib.乱雪 = function() {
	this.initialize(img.乱雪);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,330);


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
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.原生地 = function() {
	this.initialize(img.原生地);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,360);


(lib.底背景 = function() {
	this.initialize(img.底背景);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1124,768);


(lib.玉扇 = function() {
	this.initialize(img.玉扇);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,330);


(lib.碧光环 = function() {
	this.initialize(img.碧光环);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,330);


(lib.积分兑换 = function() {
	this.initialize(img.积分兑换);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,24);


(lib.积分兑换1 = function() {
	this.initialize(img.积分兑换1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,550);


(lib.龙舌兰 = function() {
	this.initialize(img.龙舌兰);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,360);// helper functions:

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


(lib.lijiduihuan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.按钮();
	this.instance.parent = this;

	this.instance_1 = new lib.按钮移入();
	this.instance_1.parent = this;

	this.instance_2 = new lib.按钮按下();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,55);


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


(lib.panel_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var _this = this;
		init();
		function init(){
			for(var k=0;k<3;k++){
				_this["plant_" + k.toString()].visible = false;
			}
			_this["btn_close"].addEventListener("click", onClose);
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
		}
		
		function onClose(event){
			//setCookie("myMeaty_close","false");
			_this.visible = false;
			_this.parent.btn_1.mouseEnabled = true;
			_this.parent.btn_2.mouseEnabled = true;
		/*	window.document.getElementById("page_detail").style.display = "none";
			window.document.getElementById("page_detail").src = "";*/
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plant_0},{t:this.plant_1},{t:this.plant_2}]}).wait(2));

	// 图层 2
	this.btn_close = new lib.close();
	this.btn_close.parent = this;
	this.btn_close.setTransform(750,29);
	new cjs.ButtonHelper(this.btn_close, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_close).wait(2));

	// 图层 1
	this.instance = new lib.我的多肉框();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.498)").s().p("EhYCA8AMAAAh3/MCwFAAAMAAAB3/g");
	this.shape.setTransform(402.6,250.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.9,-133.9,1127,768);


(lib.mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.btn_exchange = new lib.lijiduihuan();
	this.btn_exchange.parent = this;
	this.btn_exchange.setTransform(11.1,251);
	new cjs.ButtonHelper(this.btn_exchange, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_exchange).to({_off:true},1).wait(1));

	// 图层 1
	this.instance = new lib.碧光环();
	this.instance.parent = this;

	this.instance_1 = new lib.原生地();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,330);


(lib.mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.btn_exchange = new lib.lijiduihuan();
	this.btn_exchange.parent = this;
	this.btn_exchange.setTransform(10,253);
	new cjs.ButtonHelper(this.btn_exchange, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_exchange).to({_off:true},1).wait(1));

	// 图层 1
	this.instance = new lib.玉扇();
	this.instance.parent = this;

	this.instance_1 = new lib.习性强健();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,330);


(lib.mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.btn_exchange = new lib.lijiduihuan();
	this.btn_exchange.parent = this;
	this.btn_exchange.setTransform(13,257);
	new cjs.ButtonHelper(this.btn_exchange, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_exchange).to({_off:true},1).wait(1));

	// 图层 1
	this.instance = new lib.乱雪();
	this.instance.parent = this;

	this.instance_1 = new lib.龙舌兰();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,330);


(lib.panel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		//this.gotoAndStop(0);
		var _this = this;
		var integralValueAry = [500,800,1200];
		init();
		function init(){
			for(var i=0;i<3;i++){
				var mc = _this["plant_" + i.toString()];
				mc.name = "plant_" + i.toString();
				mc.gotoAndStop(0);
				mc["btn_exchange"].addEventListener("click", onPlantExchange);
				mc["integralValue"] = integralValueAry[i];
				
			}
			_this["btn_close"].addEventListener("click", onClose);
			
			//setCookie("ani_totalIntegral","1000");
			var totalIntegralStr = getCookie("totalIntegral");
			if(totalIntegralStr != null && totalIntegralStr != ""){setTotalIntegral(totalIntegralStr);}
			
			//setCookie("ani_plantType","1");
			var plantTypeStr = getCookie("plantType");
			if(plantTypeStr == null || plantTypeStr == "" || plantTypeStr == "null"){return;}
			var plantTypeAry = plantTypeStr.split(",");
			for(var i=0;i<plantTypeAry.length;i++){
				var mc = _this["plant_" + plantTypeAry[i]];
				mc.gotoAndStop(1);
			}	
		}
		
		var plantTypeAry = new Array();
		function onPlantExchange(event){
			var _parent = event.currentTarget.parent;
			var _parentIntegralValue = parseInt(_parent["integralValue"]);
			var totalIntegralInt = parseInt(getTotalIntegral());
			if(totalIntegralInt >= _parentIntegralValue){
				totalIntegralInt = totalIntegralInt - _parentIntegralValue;
				setTotalIntegral(totalIntegralInt.toString());
				setCookie("totalIntegral",totalIntegralInt.toString());
				
				_parent.gotoAndStop(1);
				var index = _parent.name.substr(6);
				
				var plantTypeStr = getCookie("plantType");
				if(plantTypeStr != null && plantTypeStr != "" && plantTypeStr != "null"){
					plantTypeAry = plantTypeStr.split(",");
				}
				
				plantTypeAry.push(index);
				var plantTypeStr2 = plantTypeAry.toString();
				setCookie("plantType",plantTypeStr2);
				// = getCookie("ani_plantType");
				
				/*var player = GetPlayer();
				if(player){
					player.SetVar("totalIntegral", totalIntegralInt.toString());
					player.SetVar("plantType", plantTypeStr);
				}*/
			}
		}
		
		function onClose(event){
			//setCookie("integra_close","false");
			_this.visible = false;
			_this.parent.btn_1.mouseEnabled = true;
			_this.parent.btn_2.mouseEnabled = true;
		}
		
		function setTotalIntegral(value){
			_this["txt_totalIntegral"].text = value;
		}
		
		function getTotalIntegral(){
			var str = _this["txt_totalIntegral"].text;
			return str;
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 图层 4
	this.btn_close = new lib.close();
	this.btn_close.parent = this;
	this.btn_close.setTransform(750,29);
	new cjs.ButtonHelper(this.btn_close, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_close).wait(2));

	// 图层 3
	this.txt_totalIntegral = new cjs.Text("0", "20px 'Microsoft YaHei'", "#006666");
	this.txt_totalIntegral.name = "txt_totalIntegral";
	this.txt_totalIntegral.textAlign = "center";
	this.txt_totalIntegral.lineHeight = 28;
	this.txt_totalIntegral.lineWidth = 45;
	this.txt_totalIntegral.parent = this;
	this.txt_totalIntegral.setTransform(117.5,96.3);

	this.timeline.addTween(cjs.Tween.get(this.txt_totalIntegral).wait(2));

	// 图层 2
	this.plant_1 = new lib.mc3();
	this.plant_1.parent = this;
	this.plant_1.setTransform(405,320,1,1,0,0,0,115,165);

	this.plant_2 = new lib.mc2();
	this.plant_2.parent = this;
	this.plant_2.setTransform(655,320,1,1,0,0,0,115,165);

	this.plant_0 = new lib.mc1();
	this.plant_0.parent = this;
	this.plant_0.setTransform(155,320,1,1,0,0,0,115,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plant_0},{t:this.plant_2},{t:this.plant_1}]}).wait(2));

	// 图层 1
	this.instance = new lib.积分兑换1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.498)").s().p("EhYCA8AMAAAh3/MCwFAAAMAAAB3/g");
	this.shape.setTransform(402.6,250.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.9,-133.9,1127,768);


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
			
			_this["panel_1"].visible = false;
			_this["panel_2"].visible = false;
		}
		
		function fl_ClickToGoToWebPage(event) {
			var target = event.currentTarget;
			switch(target){
				case _this["btn_1"]:
					_this["panel_1"].visible = true;
					_this.btn_1.mouseEnabled = false;
					_this.btn_2.mouseEnabled = false;
					break;
				case _this["btn_2"]:
					_this["panel_2"].visible = true;
					_this.btn_1.mouseEnabled = false;
					_this.btn_2.mouseEnabled = false;
					break;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// panel_2
	this.panel_2 = new lib.panel_2();
	this.panel_2.parent = this;
	this.panel_2.setTransform(560,410,1,1,0,0,0,400,275);

	this.timeline.addTween(cjs.Tween.get(this.panel_2).wait(1));

	// panel_1
	this.panel_1 = new lib.panel_1();
	this.panel_1.parent = this;
	this.panel_1.setTransform(560,410,1,1,0,0,0,400,275);

	this.timeline.addTween(cjs.Tween.get(this.panel_1).wait(1));

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
p.nominalBounds = new cjs.Rectangle(561.1,384,1127,769.1);
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
		{src:"images/按钮按下_.png", id:"按钮按下"},
		{src:"images/按钮移入_.png", id:"按钮移入"},
		{src:"images/按钮_.png", id:"按钮"},
		{src:"images/我的多肉乱雪_.png", id:"我的多肉乱雪"},
		{src:"images/我的多肉玉扇_.png", id:"我的多肉玉扇"},
		{src:"images/我的多肉碧光环_.png", id:"我的多肉碧光环"},
		{src:"images/我的多肉_.png", id:"我的多肉"},
		{src:"images/我的多肉框_.png", id:"我的多肉框"},
		{src:"images/习性强健_.png", id:"习性强健"},
		{src:"images/乱雪_.png", id:"乱雪"},
		{src:"images/关闭按下_.png", id:"关闭按下"},
		{src:"images/关闭移入_.png", id:"关闭移入"},
		{src:"images/关闭_.png", id:"关闭"},
		{src:"images/原生地_.png", id:"原生地"},
		{src:"images/底背景_.jpg", id:"底背景"},
		{src:"images/玉扇_.png", id:"玉扇"},
		{src:"images/碧光环_.png", id:"碧光环"},
		{src:"images/积分兑换_.png", id:"积分兑换"},
		{src:"images/积分兑换1.png", id:"积分兑换1"},
		{src:"images/龙舌兰_.png", id:"龙舌兰"}
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;