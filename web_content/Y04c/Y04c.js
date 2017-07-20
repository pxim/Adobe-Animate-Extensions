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


(lib.我选好了0 = function() {
	this.initialize(img.我选好了0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,68);


(lib.我选好了1 = function() {
	this.initialize(img.我选好了1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,68);


(lib.我选好了2 = function() {
	this.initialize(img.我选好了2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,68);


(lib.到积分兑换逛逛吧0 = function() {
	this.initialize(img.到积分兑换逛逛吧0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,62);


(lib.到积分兑换逛逛吧1 = function() {
	this.initialize(img.到积分兑换逛逛吧1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,62);


(lib.到积分兑换逛逛吧2 = function() {
	this.initialize(img.到积分兑换逛逛吧2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,62);


(lib.游戏第三关 = function() {
	this.initialize(img.游戏第三关);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,49);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.表现太棒0 = function() {
	this.initialize(img.表现太棒0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,280);


(lib.Y04c_修改整体 = function() {
	this.initialize(img.Y04c_修改整体);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,670);


(lib.虹之玉 = function() {
	this.initialize(img.虹之玉);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.长生草 = function() {
	this.initialize(img.长生草);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


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


(lib.姬星美人 = function() {
	this.initialize(img.姬星美人);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.巧克力方砖 = function() {
	this.initialize(img.巧克力方砖);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.碧桃 = function() {
	this.initialize(img.碧桃);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.蓝精灵 = function() {
	this.initialize(img.蓝精灵);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.达摩福娘 = function() {
	this.initialize(img.达摩福娘);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.钱串 = function() {
	this.initialize(img.钱串);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.黄丽 = function() {
	this.initialize(img.黄丽);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);// helper functions:

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


(lib.黄丽描边 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.8,1,1).p("AjCAiQgfgQgsgKQhWgTg7AeIglAlQgiAuAQAvIAzAAQA8AFAsAZIAfAWQAmAZAfASIAbA4QAkBCAvA1IAMAOQAPAQARAJQA2AeAugsQAEgVAGgYQAOgxAQgQIAbAMQAjAMAkAHQByAVBOgvQAGgbgLgjQgVhGhUgmQAegNAegXQA8gtAAgsQAWgaAXghQAvhDADgmQgVgNgfgMQg9gYgvAJQAKgjAFhkQgZgPgmgFQhLgKg+AyQABgXgHgjQgPhGgsg5QgLgBgRAHQgiAOgbAoQgDgMgIgPQgSgegfgNIg0AtQgzA1ADAlQgHgBgKABQgUABgQAHQg2AYgDBOIAQBXQAcBlA4BHg");
	this.shape.setTransform(47.5,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("Ag8HKQgRgJgPgQIgMgOQgvg1gkhCIgbg4QgfgSgmgZIgfgWQgsgZg8gFIgzAAQgQgvAiguIAlglQA7geBWATQAsAKAfAQQg4hHgchlIgQhXQADhOA2gYQAQgHAUgBQAKgBAHABQgDglAzg1IA0gtQAfANASAeQAIAPADAMQAbgoAigOQARgHALABQAsA5APBGQAHAjgBAXQA+gyBLAKQAmAFAZAPQgFBkgKAjQAvgJA9AYQAfAMAVANQgDAmgvBDQgXAhgWAaQAAAsg8AtQgeAXgeANQBUAmAVBGQALAjgGAbQhOAvhygVQgkgHgjgMIgbgMQgQAQgOAxQgGAYgEAVQgcAbgdAAQgVAAgWgNg");
	this.shape_1.setTransform(47.5,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.黄丽描边, new cjs.Rectangle(-1,-1,97,96.1), null);


(lib.钱串描边 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.8,1,1).p("AkqD+QAAgKAGgLQANgVAfgDQgGgSgCgRQgCghAZADQgLgZABgZQACgwA/ADQgPgSgKgRQgSgiAcAAQgLgSgCgRQgCghAyADQgOgXgGgbQgNg1AmgWQAFgNAAgQQAAgggZgTQgGgZgBgjQgBhGAcgyIAWgLQAbgLAagEQBRgLAmBIIAAATQACAZADAfIBWgPQBfgIArAcIARAiQALAngcAWIALAEQALAGAFAJQAQAdg1AvIAdAYQAUAegsAfIgHATQgBAVAcAKIALARQAEAUgjAWIAHARQAFAXgHAZIAJAGQAKAIAEAJQAOAdgvAcIgHAJQgGAPAJAfIAOAHQAPAJAIALQAXAjhBAmIgNAXQgJAdAWAcIAEARQgBAXgcAjQgjgUg8gUQgNgEgRAFQgjAKgZAsQABgXgBgfQgBg+gJgsQgYgUgwgNQhjgZiAAmQgKgKgJgNQgRgaAGgQg");
	this.shape.setTransform(30.1,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AApG9QgBg+gJgsQgYgUgwgNQhjgZiAAmQgKgKgJgNQgRgaAGgQQAAgKAGgLQANgVAfgDQgGgSgCgRQgCghAZADQgLgZABgZQACgwA/ADQgPgSgKgRQgSgiAcAAQgLgSgCgRQgCghAyADQgOgXgGgbQgNg1AmgWQAFgNAAgQQAAgggZgTQgGgZgBgjQgBhGAcgyIAWgLQAbgLAagEQBRgLAmBIIAAATIAFA4IBWgPQBfgIArAcIARAiQALAngcAWIALAEQALAGAFAJQAQAdg1AvIAdAYQAUAegsAfIgHATQgBAVAcAKIALARQAEAUgjAWIAHARQAFAXgHAZIAJAGQAKAIAEAJQAOAdgvAcIgHAJQgGAPAJAfIAOAHQAPAJAIALQAXAjhBAmIgNAXQgJAdAWAcIAEARQgBAXgcAjQgjgUg8gUQgNgEgRAFQgjAKgZAsQABgXgBgfg");
	this.shape_1.setTransform(30.1,49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.钱串描边, new cjs.Rectangle(-1,-1,62.2,101.7), null);


(lib.姬星美人描边 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.8,1,1).p("AtsCTQAAgwAZgnQAyhNB9AxIAQAeQAQApADA7IBpAKQgCgZAGgiQANhFArguQgRgagUgnQgmhPgKhCQAIgHAPgJQAegSAhgIQBqgZBnBXIANAJQAQAMAJAOQAgAtgjAyQhzBfgoARIACA5QAEA+AJAcQAFgeAUgXQAmgwBIAfQAGgJAKgLQAVgXAbgMQBVgnBpBUQAMglAWgiQAthCA4ASIAnAYQArAmASA+QAIgKAOgMQAbgZAggNQBlgqBnBhIBBgeQASg0AlgjQBJhJBhBQIAjA9QAcBHgcA1IhQAZIgPAoQkjAIlfgKQq+gUkshYg");
	this.shape.setTransform(87.7,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(66,66,66,0.098)").s().p("AB+D/Qq+gUkshYQAAgwAZgnQAyhNB9AxIAQAeQAQApADA7IBpAKQgCgZAGgiQANhFArguQgRgagUgnQgmhPgKhCQAIgHAPgJQAegSAhgIQBqgZBnBXIANAJQAQAMAJAOQAgAtgjAyQhzBfgoARIACA5QAEA+AJAcQAFgeAUgXQAmgwBIAfQAGgJAKgLQAVgXAbgMQBVgnBpBUQAMglAWgiQAthCA4ASIAnAYQArAmASA+QAIgKAOgMQAbgZAggNQBlgqBnBhIBBgeQASg0AlgjQBJhJBhBQIAjA9QAcBHgcA1IhQAZIgPAoQh9AEiIAAQi1AAjIgGg");
	this.shape_1.setTransform(87.7,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.姬星美人描边, new cjs.Rectangle(-1,-1,177.4,54.1), null);


(lib.达摩福娘描边 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.8,1,1).p("AGaALIARAKQAQAQgDAiQgIAIgUAKQgoAUg+AMIhKAfQhNAngTAqIgFAhQgPAqgyArQgQAMgYABQgtACgigyQALgHAIgPQAQgcgPgjQgJAAgPADQgeAFgfAMQgPgFgWgMQgsgZgigmQgOgDgTgRQglgigZhCQgZgKgbgSQg2gjgJgpIBkgPQgYgNgYgbQgvg2AAhCIAbgMQAmgKAyAMQgKgNgDgXQgHgtAjgsIATAMQAWAQATATQA8A8AABEQAMgLANgXQAZguAAg8IAPAHQATAIAQANQAyAoAAA+IA7haIAjAjQAjAwAABIIBfhBIgCAwQgEA5gJAyIBpg3IAKBLIAdAYQAgAhATAlg");
	this.shape.setTransform(44,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(7,7,7,0.098)").s().p("AgxE8QALgHAIgPQAQgcgPgjQgJAAgPADQgeAFgfAMQgPgFgWgMQgsgZgigmQgOgDgTgRQglgigZhCQgZgKgbgSQg2gjgJgpIBkgPQgYgNgYgbQgvg2AAhCIAbgMQAmgKAyAMQgKgNgDgXQgHgtAjgsIATAMQAWAQATATQA8A8AABEQAMgLANgXQAZguAAg8IAPAHQATAIAQANQAyAoAAA+IA7haIAjAjQAjAwAABIIBfhBIgCAwQgEA5gJAyIBpg3IAKBLIAdAYQAgAhATAlIAog8IARAKQAQAQgDAiQgIAIgUAKQgoAUg+AMIhKAfQhNAngTAqIgFAhQgPAqgyArQgQAMgYABIgEAAQgqAAghgwg");
	this.shape_1.setTransform(44,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.达摩福娘描边, new cjs.Rectangle(-1,-1,90.1,74.8), null);


(lib.蓝精灵描边 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.8,1,1).p("Al7ArQgbgLgbgXQg2gtADg8IA8gFQgIgKgJgRQgSghAAgjIAjAFQgFgZAFg3IAqgIQAxgIAiAGQAAgIADgQQAHgfAPgjIAdgOQAjgLAfAPQAFgVAKgSQAUgkAZAPIAogtIAeAYQAkAjAhA4IAthGIAYAcQAUAigTAcIAogPIATAOQAZAZAfA4IA8AAIAZBLIAjANQAmAUAWAlIgCAWQgBAdADAiIAngLQArgKASAGIgFBAIg7A7QhCA8gjAGIgPAaQgMAkAMA1IgjBBIAQANQAQAUADAlQgVAcgfAPQg/Aegyg/QgKAHgNAFQgcALgTgDQgWAegjASQhDAlg8g8QgSAZgiAOQhCAchIg5IgthGQgcgCgagLQgzgVAPgpIBGhGQgbgSgagZQgzgyAJggQAEgIANgNQAZgZArgTg");
	this.shape.setTransform(48.5,48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AkwHAIgthGQgcgCgagKQgzgWAPgoIBGhHQgbgSgagZQgzgyAJggQAEgIANgMQAZgaArgTQgbgLgbgXQg2gtADg8IA8gEQgIgLgJgQQgSgiAAgjIAjAGQgFgaAFg3IAqgIQAxgIAiAHQAAgJADgQQAHgfAPgiIAdgPQAjgLAfAQQAFgWAKgSQAUgkAZAPIAogtIAeAZQAkAiAhA5IAthHIAYAcQAUAjgTAbIAogPIATAOQAZAaAfA3IA8AAIAZBLIAjANQAmAUAWAlIgCAWQgBAdADAiIAngLQArgKASAHIgFA/Ig7A8QhCA7gjAGIgPAaQgMAlAMA1IgjBAIAQANQAQAUADAmQgVAbgfAPQg/Aegyg+QgKAGgNAFQgcALgTgDQgWAegjASQhDAlg8g7QgSAZgiANQgWAJgWABQgtAAgxgng");
	this.shape_1.setTransform(48.5,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.蓝精灵描边, new cjs.Rectangle(-1,-1,99,99.3), null);


(lib.碧桃描边 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.8,1,1).p("Am/hrQAAhJAVhPQArieBqgZIATACQAXADAWAJQBDAeATBRIAMgCQAPACANAZIAbgPQAigQAhgHQBsgXA+BRIAlAMQAqAQAdAXQBcBKhRBzIAXATQAWAYAAAgIATACQAXAGASAQQA6AwgNB7IACAUQAAAZgLAZQgkBPiGApQgUAFgmAEQhNAHhagGQgYgEgjgBQhJgDg+ANQAJgPAHgZQAPgygGgyQgTgJgggEQhAgHhBAZQgSgVgNglQgchIAThLQAJgRABgcQAEg4gig7g");
	this.shape.setTransform(44.8,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AiIGTQAPgzgGgxQgTgJgggEQhAgIhBAZQgSgUgNglQgchJAThKQAJgRABgcQAEg4gig6IhQgzQAAhJAVhPQArieBqgZIATACQAXADAWAKQBDAeATBRIAMgDQAPACANAaIAbgQQAigQAhgHQBsgXA+BSIAlALQAqAQAdAXQBcBKhRB0IAXATQAWAYAAAfIATACQAXAHASAPQA6AxgNB6IACAUQAAAZgLAZQgkBPiGApQgUAEgmAFQhNAHhagGQgYgEgjgCQhJgCg+AMQAJgOAHgZg");
	this.shape_1.setTransform(44.8,44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.碧桃描边, new cjs.Rectangle(-1,-1,91.7,90.5), null);


(lib.巧克力方砖描边 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.8,1,1).p("AlKiNQgKgsAIg0QAPhpBXgsIAvgKQA7gFA7AZQAUgQAegQQA5gfAvADIA0AcQA+AYA4gWIAZAbQAcAkAMAvIAZgMQAfgNAigGQBtgUBgA4IANAxQAKA8gNA4Ig8BLIADAdQgDAogjA8IhBBCQhLBEgyAGIgoAFQgRAPgeAOQg8Abg/gGQACgDgPgIQgegQhSgcIgsAZIAJATQAKAaAGAjIACAdQAEAnAIAvQgYgFgegDQg8gFgZANQghgIgngYQhMgxgWhUIgPgZQgNAKgagBQgzgBg8g1QgPgQgSgYQgmgwgTglIhGAPIgFhaQAPgSAYgWQAwgsArgPIAwgNQA3gMAlAKg");
	this.shape.setTransform(63.6,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(66,66,66,0.098)").s().p("AgyGuQg8gFgZANQghgIgngYQhMgxgWhUIgPgZQgNAKgagBQgzgBg8g1QgPgQgSgYQgmgwgTglIhGAPIgFhaQAPgSAYgWQAwgsArgPIAwgNQA3gMAlAKIAjgeQgKgsAIg0QAPhpBXgsIAvgKQA7gFA7AZQAUgQAegQQA5gfAvADIA0AcQA+AYA4gWIAZAbQAcAkAMAvIAZgMQAfgNAigGQBtgUBgA4IANAxQAKA8gNA4Ig8BLIADAdQgDAogjA8IhBBCQhLBEgyAGIgoAFQgRAPgeAOQg8Abg/gGQACgDgPgIQgegQhSgcIgsAZIAJATQAKAaAGAjIACAdQAEAnAIAvQgYgFgegDg");
	this.shape_1.setTransform(63.6,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.巧克力方砖描边, new cjs.Rectangle(-1,-1,129.2,89.6), null);


(lib.长生草描边 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.8,1,1).p("Amoh1QgPggAAgpQABhRBKgpIARgFQAWgGAYgBQBKgBA/A1QAWghAogYQBQgwBXAyIAdAJQAlAPAsAfIAkgIQArgHAmAFQB7AQAZCGQgVAXgdAZQg6A0glAPQgPAXgaAcQgzA3g1ASQgdAegoAfQhQA9g3ADQg4AqhEAiQiIBFg8gjQgOgvANg1QAZhpCDgZIBBhQQgVAKgbgHQg0gPgZhXQgIAFgVgDQgsgIhIgsg");
	this.shape.setTransform(44,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(7,7,7,0.098)").s().p("Al2FWQgOgvANg1QAZhpCDgZIBBhQQgVAKgbgHQg0gPgZhXQgIAFgVgDQgsgIhIgsQgPggAAgpQABhRBKgpIARgFQAWgGAYgBQBKgBA/A1QAWghAogYQBQgwBXAyIAdAJQAlAPAsAfIAkgIQArgHAmAFQB7AQAZCGQgVAXgdAZQg6A0glAPQgPAXgaAcQgzA3g1ASQgdAegoAfQhQA9g3ADQg4AqhEAiQhbAug5AAQgcAAgUgMg");
	this.shape_1.setTransform(44,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.长生草描边, new cjs.Rectangle(-1,-1,90,72.7), null);


(lib.虹之玉描边 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.8,1,1).p("AkbDBQghgSgWgYQgqgwA7geQgBgGAAgJQACgSAJgOQgRgbgCggQgEg/BOgRQgJgIgKgNQgWgagJgcIAbgSQAkgOAvAOQgPgwgbgiIAKgUQAPgVAbABQAAggALgeQAYg+A/AEIAiAbQAkAPAKg5IALgDQAQgCAPADQAxAKAZA5IAXAJQAbALASAPQA5Aug3A4IARAdQAQAigIAeIAhgBQAnACAhAQQgEAhgfAdQg9A8iDgOQgHAHgMAHQgaAPghADQgHA2ABAAQAAABATgBQAcAIAiAqIAGAKQAIALALAGQAhASAqgqIAhgGQAlABAUAjIAaAEQAdAIAQANQAzAphhBRQgVAOgVAaQgqA0ACA9IgcAoQgNAEgSgEQgkgHgUgkQgIgEgBgLQgEgXAegnQgBgNgOgOQgbgag8AAQgIgBgJAFQgSALgEAhQgKASgUALQgqAVg4gjQgRALgVARQgoAigOAeQgUgDgOgNQgdgZAZguQAIgHgCgIQgCgPgsgDQgJgRACgTQAFgnA8gHg");
	this.shape.setTransform(35.6,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(68,68,68,0.098)").s().p("ACYHSQgkgHgUgkQgIgEgBgLQgEgXAegnQgBgNgOgOQgbgag8AAQgIgBgJAFQgSALgEAhQgKASgUALQgqAVg4gjQgRALgVARQgoAigOAeQgUgDgOgNQgdgZAZguQAIgHgCgIQgCgPgsgDQgJgRACgTQAFgnA8gHIgPg1QghgSgWgYQgqgwA7geQgBgGAAgJQACgSAJgOQgRgbgCggQgEg/BOgRQgJgIgKgNQgWgagJgcIAbgSQAkgOAvAOQgPgwgbgiIAKgUQAPgVAbABQAAggALgeQAYg+A/AEIAiAbQAkAPAKg5IALgDQAQgCAPADQAxAKAZA5IAXAJQAbALASAPQA5Aug3A4IARAdQAQAigIAeIAhgBQAnACAhAQQgEAhgfAdQg9A8iDgOQgHAHgMAHQgaAPghADIgGA2IATAAQAcAIAiAqIAGAKQAIALALAGQAhASAqgqIAhgGQAlABAUAjIAaAEQAdAIAQANQAzAphhBRQgVAOgVAaQgqA0ACA9IgcAoQgHACgIAAQgIAAgIgCg");
	this.shape_1.setTransform(35.6,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.虹之玉描边, new cjs.Rectangle(-1,-1,73.3,95.6), null);


(lib.submitBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.我选好了0();
	this.instance.parent = this;

	this.instance_1 = new lib.我选好了1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.我选好了2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205,68);


(lib.nextBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.到积分兑换逛逛吧0();
	this.instance.parent = this;

	this.instance_1 = new lib.到积分兑换逛逛吧1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.到积分兑换逛逛吧2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201,62);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.钱串();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,100,100), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.姬星美人();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,100,100), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.长生草();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,100,100), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.碧桃();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,100,100), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.达摩福娘();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,100,100), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.虹之玉();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,100,100), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.黄丽();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,100,100), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.巧克力方砖();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,100,100), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.蓝精灵();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,100,100), null);


(lib.元件3复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhGTA0WMAAAhorMCMnAAAMAAABorg");
	this.shape.setTransform(450,335);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3复制, new cjs.Rectangle(0,0,900,670), null);


(lib.元件2复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("EhGTA0WMAAAhorMCMnAAAMAAABorg");
	this.shape.setTransform(450,335);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2复制, new cjs.Rectangle(0,0,900,670), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,100,100), null);


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


(lib.元件1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,50,1,1,0,0,0,50,50);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1_1, new cjs.Rectangle(0,0,100,100), null);


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
		//	createjs.Sound.removeAllSounds();
			createjs.Sound.stop();
			setObjEnabled(true);
		}
		
		function onSound(){
		/*	createjs.Sound.removeAllSounds();
			createjs.Sound.on("fileload", handleLoad);
			createjs.Sound.registerSound("sounds/Y04c_e.mp3", "sound_e", 3);
			function handleLoad(event) {
		     createjs.Sound.play("sound_e");
			}*/
			createjs.Sound.stop();
			playSound("Y04c_e");
		}
		
		function setObjEnabled(bool){
			for(var i=0;i<9;i++){
				_this.parent["hot_" + i.toString()].mouseEnabled = bool;
				_this.parent["hitItem_" + i.toString()].mouseEnabled = bool;
				_this.parent["hitBox_" + i.toString()].mouseEnabled = bool;
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
	this.instance_1 = new lib.元件3复制();
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
			setCookie("duorou_game_3","true");
			setCookie("totalIntegral","2000");
		}
		
		function onNext(event){
			//_this.visible = false;
			setCookie("win_integral","true");
			//createjs.Sound.removeAllSounds();
			createjs.Sound.stop();
		}
		
		function onSound(){
		/*	createjs.Sound.removeAllSounds();
			createjs.Sound.on("fileload", handleLoad);
			createjs.Sound.registerSound("sounds/Y04c_c.mp3", "sound_c", 3);
			function handleLoad(event) {
		     createjs.Sound.play("sound_c");
			}*/
			createjs.Sound.stop();
			playSound("Y04c_c");
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

	// 图层 3
	this.btn_next = new lib.nextBtn();
	this.btn_next.parent = this;
	this.btn_next.setTransform(350,390);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(2));

	// 图层 2
	this.instance = new lib.表现太棒0();
	this.instance.parent = this;
	this.instance.setTransform(180,195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// bg
	this.instance_1 = new lib.元件2复制();
	this.instance_1.parent = this;
	this.instance_1.setTransform(450,335,1,1,0,0,0,450,335);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,900,670);


// stage content:
(lib.Y04c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Y04c_c");
		playSound("Y04c_e");
		playSound("Y04c_q");
		this.stop();
		var _this = this;
		var hotAry = new Array();
		var hitItemAry = new Array();
		var hitBoxAry = new Array();
		init();
		function init(){
			for(var i=0;i<9;i++){
				var hot = _this["hot_" + i.toString()];
				hot.name = "hot_" + i.toString();
				hot["isDrag"] = false;
				hot["isHit"] = false; 
				hot.gotoAndStop(0);
				hot.alpha = .1;
				hot.addEventListener("mousedown",onHotDown);
				hot.addEventListener("pressup",onHotUp);
				hot.addEventListener("mouseover",onHotOver);
				hot.addEventListener("mouseout",onHotOut);
				hotAry.push(hot);
			//	hitItemCoordAry.push({x:mc.x,y:mc.y,isUsed:false});
			//	hitAnsAry.push({x:mc.x,y:mc.y,isCorrected:false});
				
				var item = _this["hitItem_" + i.toString()];
				item.name = "hitItem_" + i.toString();
				item.visible = false;
				hitItemAry.push(item);
				
				var box = _this["hitBox_" + i.toString()];
				//box.alpha = .1;
				hitBoxAry.push(box);
			}
			//setRandomCoord();
			_this["btn_submit"].addEventListener("click",onSubmit);
			_this["win_error"].visible = false;
			_this["win_correct"].visible = false;
			createjs.Sound.stop();
			onSound();
		}
		
		function onSound(){
		/*	createjs.Sound.on("fileload", handleLoad);
			createjs.Sound.registerSound("sounds/Y04c_q.mp3", "sound_q", 3);
			function handleLoad(event) {
			createjs.Sound.play("sound_q");
			}*/
			playSound("Y04c_q");
		}
		
		function onHotOver(event){
			var target = event.currentTarget;
			target.alpha = 1;
		}
		
		function onHotOut(event){
			var target = event.currentTarget;
			if(target["isDrag"] == false){
				target.alpha = 0.1;
			}
		}
		
		function onHotDown(event){
			var target = event.currentTarget;
			_this.setChildIndex(target,_this.numChildren - 1);
			target["isDrag"] = true;
			target.addEventListener("pressmove",onHotMove);
		}
		
		function onHotMove(event){
			var target = event.currentTarget;
			
			var index = target.name.substr(4);
			var item =_this["hitItem_" + index.toString()];
			item.visible = true;
			var point = _this.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
			item.x = point.x ;
			item.y = point.y ;
		}
		
		function onHotUp(event){
			var target = event.currentTarget;
			target.removeEventListener("pressmove",onHotMove);
			target.alpha = .1;
			
			var index = target.name.substr(4);
			var item = _this["hitItem_" + index.toString()];
			
			check(item);
		}
		
		function check(item){
			var isHit = false;
			for(var i=0;i<hitBoxAry.length;i++){
				var box = hitBoxAry[i];
					if(hitRect(item,box)){
					item.setTransform(box.x,box.y,1,1,0,0,0,50,50);
					item["orgX"] = item.x;
					item["orgY"] = item.y;
					//item["orgY"] = item.y;
					item.addEventListener("mousedown",onHitItemDown);
					item.addEventListener("pressup",onHitItemUp);
					isHit = true;
						
					//处理
					var hot = _this["hot_" + item.name.substr(8)];
					hot.removeEventListener("mousedown",onHotDown);
					hot.removeEventListener("pressup",onHotUp);
					hot.removeEventListener("mouseover",onHotOver);
					hot.removeEventListener("mouseout",onHotOut);
					return;
					}
			}
			
			if(isHit == false){
				//target.x = target["orgX"];
				//target.y = target["orgY"];
				item.visible = false;
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
			target.x = point.x ;
			target.y = point.y ;
		}
		
		function onHitItemUp(event){
			var target = event.currentTarget;
			target.removeEventListener("pressmove",onHitItemMove);
			
			check2(target);
		}
		
		function check2(target){
			var isHit = false;
			for(var i=0;i<hitItemAry.length;i++){
				var mc = hitItemAry[i];
				if(target != mc && mc.visible == true){
					if(hitRect(target,mc)){
					var _mcPoint = new createjs.Point(mc["orgX"],mc["orgY"]);
					var _targetPoint = new createjs.Point(target["orgX"],target["orgY"]);
					target.setTransform(_mcPoint.x,_mcPoint.y,1,1,0,0,0,50,50);
					target["orgX"] = _mcPoint.x;
					target["orgY"] = _mcPoint.y;
					mc.setTransform(_targetPoint.x,_targetPoint.y,1,1,0,0,0,50,50);
					mc["orgX"] = _targetPoint.x;
					mc["orgY"] = _targetPoint.y;
					isHit = true;
					return;
					}
				}
			}
			
			for(var i=0;i<hitBoxAry.length;i++){
				var box = hitBoxAry[i];
					if(hitRect(target,box)){
					target.setTransform(box.x,box.y,1,1,0,0,0,50,50);
					target["orgX"] = target.x;
					target["orgY"] = target.y;
					isHit = true;
					return;
					}
			}
			
			
			if(isHit == false){
				//target.x = target["orgX"];
				//target.y = target["orgY"];
				target.setTransform(target["orgX"],target["orgY"],1,1,0,0,0,50,50);
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
		
		function onSubmit(event){
			var index = 0;
			for(var i=0;i<hitBoxAry.length;i++){
				var box = hitBoxAry[i];
				var item = hitItemAry[i];
				if(item.x == box.x && item.y == box.y && item.visible == true){
					index ++;
				}
			}
			
			if(index == 9){
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
		
		function setObjEnabled(bool){
			for(var i=0;i<hitItemAry.length;i++){
				hitItemAry[i].mouseEnabled = bool;
				hotAry[i].mouseEnabled = bool;
				hitBoxAry[i].mouseEnabled = bool;
			}
			_this["btn_submit"].mouseEnabled = bool;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// correctWin
	this.win_correct = new lib.correctWin();
	this.win_correct.parent = this;
	this.win_correct.setTransform(450,335,1,1,0,0,0,450,335);

	this.timeline.addTween(cjs.Tween.get(this.win_correct).wait(3));

	// errorWin
	this.win_error = new lib.errorWin();
	this.win_error.parent = this;
	this.win_error.setTransform(450,335,1,1,0,0,0,450,335);

	this.timeline.addTween(cjs.Tween.get(this.win_error).wait(3));

	// hitItem
	this.hitItem_8 = new lib.元件19();
	this.hitItem_8.parent = this;
	this.hitItem_8.setTransform(823,492,1,1,0,0,0,50,50);

	this.hitItem_7 = new lib.元件18();
	this.hitItem_7.parent = this;
	this.hitItem_7.setTransform(690,492,1,1,0,0,0,50,50);

	this.hitItem_6 = new lib.元件17();
	this.hitItem_6.parent = this;
	this.hitItem_6.setTransform(567,500,1,1,0,0,0,50,50);

	this.hitItem_5 = new lib.元件16();
	this.hitItem_5.parent = this;
	this.hitItem_5.setTransform(819,341,1,1,0,0,0,50,50);

	this.hitItem_4 = new lib.元件15();
	this.hitItem_4.parent = this;
	this.hitItem_4.setTransform(691,338,1,1,0,0,0,50,50);

	this.hitItem_3 = new lib.元件14();
	this.hitItem_3.parent = this;
	this.hitItem_3.setTransform(561,341,1,1,0,0,0,50,50);

	this.hitItem_2 = new lib.元件13();
	this.hitItem_2.parent = this;
	this.hitItem_2.setTransform(823,197,1,1,0,0,0,50,50);

	this.hitItem_1 = new lib.元件12();
	this.hitItem_1.parent = this;
	this.hitItem_1.setTransform(697,196,1,1,0,0,0,50,50);

	this.hitItem_0 = new lib.元件11();
	this.hitItem_0.parent = this;
	this.hitItem_0.setTransform(558,193,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hitItem_0},{t:this.hitItem_1},{t:this.hitItem_2},{t:this.hitItem_3},{t:this.hitItem_4},{t:this.hitItem_5},{t:this.hitItem_6},{t:this.hitItem_7},{t:this.hitItem_8}]}).wait(3));

	// hot2
	this.hot_7 = new lib.姬星美人描边();
	this.hot_7.parent = this;
	this.hot_7.setTransform(218.3,462.8,1,1,0,0,0,87.7,26.1);

	this.hot_6 = new lib.长生草描边();
	this.hot_6.parent = this;
	this.hot_6.setTransform(390.1,435.8,1,1,0,0,0,44,35.4);

	this.hot_0 = new lib.蓝精灵描边();
	this.hot_0.parent = this;
	this.hot_0.setTransform(131.1,419.1,1,1,0,0,0,48.5,48.6);

	this.hot_4 = new lib.达摩福娘描边();
	this.hot_4.parent = this;
	this.hot_4.setTransform(87.6,310.4,1,1,0,0,0,44,36.4);

	this.hot_3 = new lib.虹之玉描边();
	this.hot_3.parent = this;
	this.hot_3.setTransform(366.1,288.4,1,1,0,0,0,35.6,46.8);

	this.hot_2 = new lib.黄丽描边();
	this.hot_2.parent = this;
	this.hot_2.setTransform(217.6,420.6,1,1,0,0,0,47.5,47.1);

	this.hot_5 = new lib.碧桃描边();
	this.hot_5.parent = this;
	this.hot_5.setTransform(263.9,360.3,1,1,0,0,0,44.8,44.3);

	this.hot_1 = new lib.巧克力方砖描边();
	this.hot_1.parent = this;
	this.hot_1.setTransform(165.2,333.7,1,1,0,0,0,63.6,43.8);

	this.hot_8 = new lib.钱串描边();
	this.hot_8.parent = this;
	this.hot_8.setTransform(225,271.2,1,1,0,0,0,30.1,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hot_8},{t:this.hot_1},{t:this.hot_5},{t:this.hot_2},{t:this.hot_3},{t:this.hot_4},{t:this.hot_0},{t:this.hot_6},{t:this.hot_7}]}).wait(3));

	// hitBox
	this.hitBox_7 = new lib.元件1_1();
	this.hitBox_7.parent = this;
	this.hitBox_7.setTransform(690,493.5,1,1,0,0,0,48,48);

	this.hitBox_6 = new lib.元件1_1();
	this.hitBox_6.parent = this;
	this.hitBox_6.setTransform(561,493.5,1,1,0,0,0,48,48);

	this.hitBox_5 = new lib.元件1_1();
	this.hitBox_5.parent = this;
	this.hitBox_5.setTransform(821,346.5,1,1,0,0,0,48,48);

	this.hitBox_4 = new lib.元件1_1();
	this.hitBox_4.parent = this;
	this.hitBox_4.setTransform(690,347,1,1,0,0,0,48,48);

	this.hitBox_3 = new lib.元件1_1();
	this.hitBox_3.parent = this;
	this.hitBox_3.setTransform(561,346.5,1,1,0,0,0,48,48);

	this.hitBox_2 = new lib.元件1_1();
	this.hitBox_2.parent = this;
	this.hitBox_2.setTransform(823,202.5,1,1,0,0,0,48,48);

	this.hitBox_1 = new lib.元件1_1();
	this.hitBox_1.parent = this;
	this.hitBox_1.setTransform(689,198.5,1,1,0,0,0,48,48);

	this.hitBox_0 = new lib.元件1_1();
	this.hitBox_0.parent = this;
	this.hitBox_0.setTransform(560,198.5,1,1,0,0,0,48,48);

	this.hitBox_8 = new lib.元件1_1();
	this.hitBox_8.parent = this;
	this.hitBox_8.setTransform(819,493.5,1,1,0,0,0,48,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hitBox_8},{t:this.hitBox_0},{t:this.hitBox_1},{t:this.hitBox_2},{t:this.hitBox_3},{t:this.hitBox_4},{t:this.hitBox_5},{t:this.hitBox_6},{t:this.hitBox_7}]}).wait(3));

	// submit
	this.btn_submit = new lib.submitBtn();
	this.btn_submit.parent = this;
	this.btn_submit.setTransform(695,7.5);
	new cjs.ButtonHelper(this.btn_submit, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_submit).wait(3));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFA3QgDgDAAgEQAAgEADgCQACgDADAAQAEAAACADQAEACAAAEQAAAEgEADQgCADgEAAQgDAAgCgDgAgFAYIgBhRIANAAIgCBRg");
	this.shape.setTransform(509.5,82.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAABCQgSAAAAgTIAAhwIBNAAIAABIIgLAAIAAgFIg3AAIAAArQAAALAKAAIArAAQAJAAACgKIACgYIAKAEIgCAYQgCAQgQAAgAAZgIIAXAAIAAguIgXAAgAgHgIIAWAAIAAguIgWAAgAhEAsIAAhkIAlAAIAABfIgLAAIAAgKIgQAAIAAAPgAg6ATIAQAAIAAhBIgQAAg");
	this.shape_1.setTransform(494.8,82.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhGBCIAAgLIA5AAIAAh4IANAAIAAAsIA8AAIAAALIg8AAIAABBIBHAAIAAALg");
	this.shape_2.setTransform(479.5,82.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIBDIAAgJIAWAAIAAhDIAtAAIAAgJIg/AAIAAgJIA/AAIAAgHIAKAAIAAAHIBAAAIAAAJIhAAAIAAAJIAwAAIAABDIAUAAIAAAJgAgnA6IBRAAIAAgJIhRAAgAgnApIBRAAIAAgJIhRAAgAgnAYIBRAAIAAgJIhRAAgAgnAHIBRAAIAAgIIhRAAgAAyghIAAgDIhjAAIAAADIgKAAIAAghIB3AAIAAAhgAAXgsIAbAAIAAgNIgbAAgAgMgsIAaAAIAAgNIgaAAgAgxgsIAbAAIAAgNIgbAAg");
	this.shape_3.setTransform(464.5,82.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag0BJIAAhTIgPAXIgFgNQAVggAKgnIANADQgGATgHAQIAABqgAggBBIAAgLIA4AAQAKgcAOgzIAOAEIgaBLIAlAAIAAALgAgUgUIALgEQAJAaALAlIgLAEQgKgkgKgbgAgdgiIAAgKIAyAAQgGgLgIgKIAKgHIAQAUIgLAIIAxAAIAAAKg");
	this.shape_4.setTransform(449.5,82.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AANBGIgDgNIABAAQAOACANAAQANAAABgOQACgWAAg6IgnAAQgGAOgHALIgJgGQAMgVAKghIAMADIgHAVIAvAAQgCBKgBAUQgBAXgXAAIgbgBgAhCBHIAAh1IAPAAIAJgYIAMAEIgJAUIAdAAIAAB0IgLAAIAAgLIghAAIAAAMgAg2AwIAhAAIAAgmIghAAgAg2AAIAhAAIAAgjIghAAgAAFgGIAJgGQAQASAJAOIgKAIQgLgRgNgRg");
	this.shape_5.setTransform(434.5,82.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVBAQAPgSAAglIAAglIgHAIIgJgIQAVgUALgYIALACIgHANIAqAAIAAAJIgMAQIAbAAIAABVQAAAQgOAAIgNAAIgCgKIAMABQAGgBAAgHIAAgRIgYAAIAAAhIgKAAIAAghIgYAAQgDAYgMAOIgIgJgAAkAaIAYAAIAAgUIgYAAgAADAaIAXAAIAAgUIgWAAIgBAUgAAkgCIAYAAIAAgUIgYAAgAAEgCIAWAAIAAgUIgWAAgAgDggIAjAAIALgQIgjAAIgLAQgAg1A9IAAg5IgJARIgIgIQARgaAIgiIgUAAIAAgKIA1AAIAAAKIgXAAQgDAQgGAOIAZAAIAABDIgYAAIAAALgAgrAoIAPAAIAAgvIgPAAg");
	this.shape_6.setTransform(419.1,82.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhIA9IAAgLIAYAAIAAhOIANAAIAABOIAjAAIAAhjIhBAAIAAgLICEAAIAAALIg2AAIAAAnIAxAAIAAAKIgxAAIAAAyIA8AAIAAALg");
	this.shape_7.setTransform(404.5,82.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfBHIgDgNIAUABQAKAAAAgJIAAh4IAMAAIAAB7QAAASgSAAIgVAAgAhFA3IAngEIAAgbIgiAAIAAgLIAiAAIAAgRIAMAAIAAARIAhAAIAAALIghAAIAAAaIAjgFIAAALIhSAMgAAaAmIAAhdIAMAAIAABdgAABgLIg7AGIgGgMQAJgFAGgJIALgUIgbAAIAAgLIBTAAIAAALIgqAAQgLATgLAPIAqgDIgKgRIAKgFQALARAKATIgLAGIgFgLg");
	this.shape_8.setTransform(389.2,82.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNA/QAHgHAGgIQARgaABgoIAAgMIgVAAIAAgMIAVAAIAAgdIANAAIAAAdIAnAAQgBA3gCAiQgCAUgRABIgUgBIgDgMIATABQALAAABgMQABgkABgmIgcAAIAAANQgBA4ghAiIgJgKgAgNAvIgzAGIgFgNQAGgDAEgJQAHgOAIgVIgYAAIAAgLIBFAAIAAALIggAAQgNAegJARIAkgDIgLgYIALgEIARAnIgLAFIgCgGgAg/gwIAAgLIA8AAIAAALg");
	this.shape_9.setTransform(374.3,82.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhHBIIgBgMIANABQAFAAAAgGIAAgqIgRAHIgBgNIASgGIAAggIgRAAIAAgKIARAAIAAgcIALAAIAAAcIARAAIAAAKIgRAAIAAAdIAPgFIAAALIgPAFIAAAvQAAAQgNAAIgPAAgAAABFQgPAAAAgQIAAgqIgKACIgBgKIALgDIAAgRIALAAIAAAPIAUgFIAAgaIAKAAIAAAXIAjgIIgBAjQgBAQgPgBIgLAAIgDgLIANABQAHAAAAgGIABgVIgZAFIAAAyIgKAAIAAgvIgUAFIAAArQAAAHAHAAIArAAQAMAAABgIIADgUIALAEIgDATQgDAQgUAAgAgbgXQAQgXAHgZIAKACIgGASIBDAAIAAAKIhHAAQgGANgHALIgKgGg");
	this.shape_10.setTransform(359.6,82.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag9BHIAAh5IA5AAIABgVIAKAAIgBAVIA4AAIAABnQAAAQgQAAIgYAAIgCgMIAXABQAIAAAAgIIAAhZIgvAAIgCAHQAaAPARALIgIAIQgUgOgSgLQgJAOgZANIgIgJQAggQAEgSIgqAAIAABugAgsAoQAogQAAggIAKAAQAAAJgDAIIApAbIgHAKIglgbQgKATgaALIgIgJg");
	this.shape_11.setTransform(344.5,82.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag9BHIAAh5IA5AAIABgVIAKAAIgBAVIA4AAIAABnQAAAQgQAAIgYAAIgCgMIAXABQAIAAAAgIIAAhZIgvAAIgCAHQAaAPARALIgIAIQgUgOgSgLQgJAOgZANIgIgJQAggQAEgSIgqAAIAABugAgsAoQAogQAAggIAKAAQAAAJgDAIIApAbIgHAKIglgbQgKATgaALIgIgJg");
	this.shape_12.setTransform(329.5,82.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AANBGIgDgNIABAAQAOACANAAQANAAABgOQACgWAAg6IgnAAQgGAOgHALIgJgGQAMgVAKghIAMADIgHAVIAvAAQgCBKgBAUQgBAXgXAAIgbgBgAhCBHIAAh1IAPAAIAJgYIAMAEIgJAUIAdAAIAAB0IgLAAIAAgLIghAAIAAAMgAg2AwIAhAAIAAgmIghAAgAg2AAIAhAAIAAgjIghAAgAAFgGIAJgGQAQASAJAOIgKAIQgLgRgNgRg");
	this.shape_13.setTransform(314.5,82.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfBHIgDgNIAUABQAKAAAAgJIAAh4IAMAAIAAB7QAAASgSAAIgVAAgAhFA3IAngEIAAgbIgiAAIAAgLIAiAAIAAgRIAMAAIAAARIAhAAIAAALIghAAIAAAaIAjgFIAAALIhSAMgAAaAmIAAhdIAMAAIAABdgAABgLIg7AGIgGgMQAJgFAGgJIALgUIgbAAIAAgLIBTAAIAAALIgqAAQgLATgLAPIAqgDIgKgRIAKgFQALARAKATIgLAGIgFgLg");
	this.shape_14.setTransform(299.2,82.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhDA6QAKgNADgRQADgPAAgcIAAg1IB3AAIAAB0QAAARgRAAIgXAAIgCgMIAVABQAJAAAAgJIAAgbIgrAAIAAAuIgMAAIAAguIgqAAQgCAfgPATIgJgKgAANAIIArAAIAAgbIgrAAgAgoAIIApAAIAAgbIgoAAQAAAPgBAMgAANgeIArAAIAAgbIgrAAgAgngeIAoAAIAAgbIgoAAg");
	this.shape_15.setTransform(284.1,83.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgtBJIAAg5IgUAYIgIgMQANgLAPgRIAAhGIALAAIAACPgAAOBGIgCgMIAUABQAJAAAAgKIAAgfIhEAAIAAgLIBEAAIAAgRIALAAIAAARIAWAAIAAALIgWAAIAAAiQAAASgRAAIgVAAgAgLAbIAJgGIATAVIgKAIIgSgXgAgagGQAUgEAPgHIgOgLIAHgIIARAPQAUgJAOgOIg1AAIgXASIgHgIQAZgQAPgWIAKAGIgLAMIA6AAIAAAKQgVAfhDAQIgFgJgAhHgrIAJgFIAOAbIgKAFIgNgbg");
	this.shape_16.setTransform(269.4,82.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNA4QgDgDAAgEQAAgEADgCQADgEAEAAQAEAAACAEQACACAAAEQAAAEgCADQgCACgEAAQgEAAgDgCgAgNAZIAAgHQAAgHADgGQAEgFAGgGQAIgGAEgFQADgGAAgGQAAgIgFgEQgFgFgIABQgOAAgLAKIAAgPQAMgIAPAAQANAAAIAIQAJAHAAAMQAAAJgEAHQgEAHgJAIIgKAJQgCADAAAHIAAAGg");
	this.shape_17.setTransform(254.9,82.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAPBEIgCgNIAZABQANAAABgNIACgnIhBAAIAFgzIALAAIgEApIAkAAIAFgyIg6AAIAAgLIBGAAIgFA9IARAAIgCAzQgCAXgXAAIgYAAgAhBAtIAAhmIAoAAIAABlIgLAAIAAgKIgTAAIAAALgAg3AYIATAAIAAhGIgTAAgAgUAiIAAgLIBDAAIAAALg");
	this.shape_18.setTransform(239.6,82.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZBEIgCgLIAQABQAHAAAAgIIAAgSIgkAAIAAAFIgLAAIAAghIBnAAIAAAhIgLAAIAAgFIgjAAIAAAVQAAAPgPAAIgQAAgAgoAYIBRAAIAAgLIhRAAgAhDA7QAZgLASgJIAGAJIgrAUIgGgJgAASAwIAFgJIAtASIgGAKQgUgKgYgJgAhDgEIAAgJIA9AAIgDgHIAJgDIgrAAIAAAEIgLAAIAAgwIBrAAIAAAwIgKAAIAAgEIgrAAIAFAKIA+AAIAAAJgAgrggIBWAAIAAgJIhWAAgAgrgyIBWAAIAAgJIhWAAg");
	this.shape_19.setTransform(224.6,82.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhHBGIAAgLIARAAIAAgpIBtAAIAAApIARAAIAAALgAAWA7IAWAAIAAgfIgWAAgAgKA7IAVAAIAAgfIgVAAgAgqA7IAVAAIAAgfIgVAAgAhFAFQApgFAHgYIgWAAIAAgJQgKAGgMAFIgHgKQAlgMASgYIAJAGQgMAPgUANIBRAAQgVgMgMgSIAJgFQAUAbAkAJQgEAFgDAFQgKgDgJgFIgCAYQgBAQgUAAIgYAAIgDgLIAaABQAKAAABgHIABgQIgtAAQgHAegtAJIgHgKg");
	this.shape_20.setTransform(209.5,82.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAhA/QgUgXgDhIIhSAAIAAgKIBRAAIgBgdIAMAAIABAdIAyAAIAAAKIgyAAQADBJAWAQQAIAGADgJIAEgXIAMAEIgGAcQgEAJgJABQgLgBgKgJgAhHAxIAigEIAAgpIgdAAIAAgKIBEAAIAAAKIgbAAIAAAoIAigGIAAAMIhNAMgAAfg+IAIgIIAVARIgJAJIgUgSg");
	this.shape_21.setTransform(194.5,82.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBJIAAg3IgsAAIAAAIIgMAAIAAhCIA4AAIAAggIAMAAIAAAgIA5AAIAABCIgMAAIAAgIIgtAAIAAA3gAAGAHIAtAAIAAgkIgtAAgAgyAHIAsAAIAAgkIgsAAg");
	this.shape_22.setTransform(179.6,82.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhHBGIAAgLIARAAIAAgpIBtAAIAAApIARAAIAAALgAAWA7IAWAAIAAgfIgWAAgAgKA7IAVAAIAAgfIgVAAgAgqA7IAVAAIAAgfIgVAAgAhFAFQApgFAHgYIgWAAIAAgJQgKAGgMAFIgHgKQAlgMASgYIAJAGQgMAPgUANIBRAAQgVgMgMgSIAJgFQAUAbAkAJQgEAFgDAFQgKgDgJgFIgCAYQgBAQgUAAIgYAAIgDgLIAaABQAKAAABgHIABgQIgtAAQgHAegtAJIgHgKg");
	this.shape_23.setTransform(164.5,82.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhIA7IATgSIAAgwIgSAAIAAgKIAdAAIAAA8QAJAPAVAAIAlABIAwgBIgEALIgwAAIgiAAQgZAAgKgRQgGAFgMAPgAggAoQAbgLASgSIghgdIAHgHIAiAcQAOgQAIgVIAMAFQgKAWgPARIAjAeIgJAJIgigeQgUAUgaALIgIgKgAg/g8IAJgHIAVAbIgLAIQgLgSgIgKgAgdglIAAgKIBiAAIAAAKgAAGhCIAKgEIALASIgLAFIgKgTg");
	this.shape_24.setTransform(149.5,82.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgzBIIAAhAIgQASIgFgMQATgQARgfIAKAGIgOAUIAABPgAAMBGIgCgMIAVABQAJAAAAgJIAAgTIhFAAIAAgJIBFAAIAAgMIg/AAIAAgKIBdAAIAAAKIgSAAIAAAMIAVAAIAAAJIgVAAIAAAWQAAARgSAAIgWAAgAgPAmIAIgGIAQASIgJAGIgPgSgAAwgGIAAgFIg0AAIAAAFIgLAAIAAg6IBKAAIAAA6gAgEgUIA0AAIAAgNIg0AAgAgEgqIA0AAIAAgNIg0AAgAhHgeQAUgRAPgYIAKAGQgTAbgUASIgGgKg");
	this.shape_25.setTransform(134.5,82.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag6A8QAFgEAAgJIAAg5IgTAAIAAgKIAfAAIAABFIASgNIABANQgTAMgKAJgAABBDQgRAAAAgTIAAg/IBDAAIAAgmIhJAAIAAgKIBUAAIAABBIgLAAIAAgGIg4AAIAAAxQAAALAKAAIAlAAQAOAAABgKQACgIACgPIAMAEIgEAYQgEAQgUAAgAhAg9IAJgIIAXAZIgKAIQgKgMgMgNg");
	this.shape_26.setTransform(119.5,82.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhIA6IATgSIAAgxIgSAAIAAgKIAdAAIAAA9QAJAOAWABQApABArgCIgEAMQgsAAgngBQgYAAgKgRQgHAGgLAOgAALAxIAAg+QgPAXgaASIgIgJQAogbAPgpIgtAAIAAgLIBiAAIAAALIgoAAIgHARIAAAQIAFgHIAsAiIgJAKQgUgSgUgPIAAA9gAg/g+IAJgHQALANAKAPIgLAHIgTgcg");
	this.shape_27.setTransform(104.5,82.7);

	this.instance = new lib.游戏第三关();
	this.instance.parent = this;
	this.instance.setTransform(10,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	// bg
	this.instance_1 = new lib.Y04c_修改整体();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,335,900,670);
// library properties:
lib.properties = {
	id: 'BD0922931EE73F4D9291189707C8E4FA',
	width: 900,
	height: 670,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/不对哦0.png", id:"不对哦0"},
		{src:"images/我选好了0.png", id:"我选好了0"},
		{src:"images/我选好了1.png", id:"我选好了1"},
		{src:"images/我选好了2.png", id:"我选好了2"},
		{src:"images/到积分兑换逛逛吧0.png", id:"到积分兑换逛逛吧0"},
		{src:"images/到积分兑换逛逛吧1.png", id:"到积分兑换逛逛吧1"},
		{src:"images/到积分兑换逛逛吧2.png", id:"到积分兑换逛逛吧2"},
		{src:"images/游戏第三关_.png", id:"游戏第三关"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/表现太棒0.png", id:"表现太棒0"},
		{src:"images/Y04c_修改整体.png", id:"Y04c_修改整体"},
		{src:"images/虹之玉_.png", id:"虹之玉"},
		{src:"images/长生草_.png", id:"长生草"},
		{src:"images/再试一次0.png", id:"再试一次0"},
		{src:"images/再试一次1.png", id:"再试一次1"},
		{src:"images/再试一次2.png", id:"再试一次2"},
		{src:"images/姬星美人_.png", id:"姬星美人"},
		{src:"images/巧克力方砖_.png", id:"巧克力方砖"},
		{src:"images/碧桃_.png", id:"碧桃"},
		{src:"images/蓝精灵_.png", id:"蓝精灵"},
		{src:"images/达摩福娘_.png", id:"达摩福娘"},
		{src:"images/钱串_.png", id:"钱串"},
		{src:"images/黄丽_.png", id:"黄丽"},
		{src:"sounds/Y04c_c.mp3", id:"Y04c_c"},
		{src:"sounds/Y04c_e.mp3", id:"Y04c_e"},
		{src:"sounds/Y04c_q.mp3", id:"Y04c_q"}
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