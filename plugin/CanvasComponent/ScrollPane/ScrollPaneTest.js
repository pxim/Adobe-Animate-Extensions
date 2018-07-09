(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,260);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,2520);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,52);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,7);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,400);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,148);


(lib.StageBG = function() {
	this.initialize(img.StageBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,550);// helper functions:

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


(lib.ScrollTrack_skin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585F63").s().p("AgELkIAA3HIAJAAIAAXHg");
	this.shape.setTransform(0.5,74);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#94999B","#E7E7E7"],[0,1],-6.5,7,7.5,6.8).s().p("AhALkIAA3HICBAAIAAXHg");
	this.shape_1.setTransform(7.5,74);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#585F63").s().p("AgELkIAA3HIAJAAIAAXHg");
	this.shape_2.setTransform(14.5,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollTrack_skin, new cjs.Rectangle(0,0,15,148), null);


(lib.ScrollThumb_upSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-6).s().p("Ag2D6IAAnzIBRAAQAcABAAAdIAAG3QAAAegcAAg");
	this.shape.setTransform(6.5,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#585F63","#B7BABC"],[0,1],-5,2.9,-5,-19.1).s().p("Ag7AcIAAgKIBRAAQAcAAAAgdIAAgQIAKAAIAAAQQAAAngoAAg");
	this.shape_1.setTransform(7,49.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#585F63","#B7BABC"],[0,1],-5,29.1,-5,7.1).s().p("AAyDoIAAmnQAAgdgcgBIhRAAIAAgKIBPAAQAoAAAAAoIAAGng");
	this.shape_2.setTransform(7,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0)").s().p("AgOEEIAAoHIAdAAIAAIHg");
	this.shape_3.setTransform(14.5,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollThumb_upSkin, new cjs.Rectangle(0,0,16,52), null);


(lib.ScrollPageBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollPageBG, new cjs.Rectangle(0,0,720,2520), null);


(lib.ScrollBar_thumbIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A6165").s().p("AgYAjIAAgKIAxAAIAAAKgAgYAPIAAgKIAxAAIAAAKgAgYgEIAAgKIAxAAIAAAKgAgYgYIAAgKIAxAAIAAAKg");
	this.shape.setTransform(2.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollBar_thumbIcon, new cjs.Rectangle(0,0,5,7), null);


(lib.mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图文
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AApA9QgPgWgChGIg1AAIAAgLIA1AAIgBgdIAMAAIAAAdIAkAAIAAALIgkAAQACA9ALAWQAFAIADAAQACAAACgGIACgXIALAEIgDAZQgDAMgKAAQgIAAgIgLgAg8A3QAFgGAAgIIAAg1IgRAAIAAgLIAcAAIAAA+IASgSIABAPIgUATIgHAJgAggAzIAXgDIAAguIgUAAIAAgJIAxAAIAAAJIgTAAIAAAsIAYgEIAAALIg2AKgAhCg8IAJgHIAWAYIgJAIQgJgMgNgNgAApg9IAGgHIASAPIgIAIIgQgQg");
	this.shape.setTransform(117.5,232.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsA/QAVgMAIgQQAIgNAAgaIAAgkIAJAAIAAAkQAAAVgDAOIAgAaIgIAJIgcgZQgJASgXANIgHgJgAhABBQAIgZAGgdIAMAFIgOA2gAAlBFIgCgMIAQABQAIAAAAgIIAAh5IALAAIAAB8QAAAQgQAAIgRAAgAAlAlIAAhgIAKAAIAABggAANAdIAAhSIghAAIAABSIgKAAIAAhcIA2AAIAABcgAhFgXIAHgIIAXAUIgIAJIgWgVgAg/g9IAIgHIAWAUIgJAJIgVgWg");
	this.shape_1.setTransform(102.1,232.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AvxPoIAA/PIfjAAIAAfPg");
	this.shape_2.setTransform(110,109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 底
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AxLUUMAAAgonMAiXAAAMAAAAong");
	this.shape_3.setTransform(110,130);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// BG
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc1, new cjs.Rectangle(0,0,220,260), null);


(lib.arrowIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAUIAAgKIgKAAIAAgKIgKAAIAAgJIgKAAIAAgKIBFAAIAAAKIgKAAIAAAJIgKAAIAAAKIgKAAIAAAKg");
	this.shape.setTransform(3.5,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Item
	this.item_26 = new lib.mc1();
	this.item_26.name = "item_26";
	this.item_26.parent = this;
	this.item_26.setTransform(365,2387.4,1,1,0,0,0,115,165);

	this.item_27 = new lib.mc1();
	this.item_27.name = "item_27";
	this.item_27.parent = this;
	this.item_27.setTransform(615,2387.4,1,1,0,0,0,115,165);

	this.item_25 = new lib.mc1();
	this.item_25.name = "item_25";
	this.item_25.parent = this;
	this.item_25.setTransform(116,2387.4,1,1,0,0,0,115,165);

	this.item_23 = new lib.mc1();
	this.item_23.name = "item_23";
	this.item_23.parent = this;
	this.item_23.setTransform(365,2109.6,1,1,0,0,0,115,165);

	this.item_24 = new lib.mc1();
	this.item_24.name = "item_24";
	this.item_24.parent = this;
	this.item_24.setTransform(615,2109.6,1,1,0,0,0,115,165);

	this.item_22 = new lib.mc1();
	this.item_22.name = "item_22";
	this.item_22.parent = this;
	this.item_22.setTransform(116,2109.6,1,1,0,0,0,115,165);

	this.item_20 = new lib.mc1();
	this.item_20.name = "item_20";
	this.item_20.parent = this;
	this.item_20.setTransform(365,1831.8,1,1,0,0,0,115,165);

	this.item_21 = new lib.mc1();
	this.item_21.name = "item_21";
	this.item_21.parent = this;
	this.item_21.setTransform(615,1831.8,1,1,0,0,0,115,165);

	this.item_19 = new lib.mc1();
	this.item_19.name = "item_19";
	this.item_19.parent = this;
	this.item_19.setTransform(115,1831.8,1,1,0,0,0,115,165);

	this.item_17 = new lib.mc1();
	this.item_17.name = "item_17";
	this.item_17.parent = this;
	this.item_17.setTransform(365,1554,1,1,0,0,0,115,165);

	this.item_18 = new lib.mc1();
	this.item_18.name = "item_18";
	this.item_18.parent = this;
	this.item_18.setTransform(615,1554,1,1,0,0,0,115,165);

	this.item_16 = new lib.mc1();
	this.item_16.name = "item_16";
	this.item_16.parent = this;
	this.item_16.setTransform(115,1554,1,1,0,0,0,115,165);

	this.item_14 = new lib.mc1();
	this.item_14.name = "item_14";
	this.item_14.parent = this;
	this.item_14.setTransform(365,1276.2,1,1,0,0,0,115,165);

	this.item_15 = new lib.mc1();
	this.item_15.name = "item_15";
	this.item_15.parent = this;
	this.item_15.setTransform(615,1276.2,1,1,0,0,0,115,165);

	this.item_13 = new lib.mc1();
	this.item_13.name = "item_13";
	this.item_13.parent = this;
	this.item_13.setTransform(115,1276.2,1,1,0,0,0,115,165);

	this.item_11 = new lib.mc1();
	this.item_11.name = "item_11";
	this.item_11.parent = this;
	this.item_11.setTransform(365,998.4,1,1,0,0,0,115,165);

	this.item_12 = new lib.mc1();
	this.item_12.name = "item_12";
	this.item_12.parent = this;
	this.item_12.setTransform(615,998.4,1,1,0,0,0,115,165);

	this.item_10 = new lib.mc1();
	this.item_10.name = "item_10";
	this.item_10.parent = this;
	this.item_10.setTransform(115,998.4,1,1,0,0,0,115,165);

	this.item_8 = new lib.mc1();
	this.item_8.name = "item_8";
	this.item_8.parent = this;
	this.item_8.setTransform(365,720.6,1,1,0,0,0,115,165);

	this.item_9 = new lib.mc1();
	this.item_9.name = "item_9";
	this.item_9.parent = this;
	this.item_9.setTransform(615,720.6,1,1,0,0,0,115,165);

	this.item_7 = new lib.mc1();
	this.item_7.name = "item_7";
	this.item_7.parent = this;
	this.item_7.setTransform(115,720.6,1,1,0,0,0,115,165);

	this.item_5 = new lib.mc1();
	this.item_5.name = "item_5";
	this.item_5.parent = this;
	this.item_5.setTransform(365,442.8,1,1,0,0,0,115,165);

	this.item_6 = new lib.mc1();
	this.item_6.name = "item_6";
	this.item_6.parent = this;
	this.item_6.setTransform(615,442.8,1,1,0,0,0,115,165);

	this.item_4 = new lib.mc1();
	this.item_4.name = "item_4";
	this.item_4.parent = this;
	this.item_4.setTransform(115,442.8,1,1,0,0,0,115,165);

	this.item_2 = new lib.mc1();
	this.item_2.name = "item_2";
	this.item_2.parent = this;
	this.item_2.setTransform(365,165,1,1,0,0,0,115,165);

	this.item_3 = new lib.mc1();
	this.item_3.name = "item_3";
	this.item_3.parent = this;
	this.item_3.setTransform(615,165,1,1,0,0,0,115,165);

	this.item_1 = new lib.mc1();
	this.item_1.name = "item_1";
	this.item_1.parent = this;
	this.item_1.setTransform(115,165,1,1,0,0,0,115,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item_1},{t:this.item_3},{t:this.item_2},{t:this.item_4},{t:this.item_6},{t:this.item_5},{t:this.item_7},{t:this.item_9},{t:this.item_8},{t:this.item_10},{t:this.item_12},{t:this.item_11},{t:this.item_13},{t:this.item_15},{t:this.item_14},{t:this.item_16},{t:this.item_18},{t:this.item_17},{t:this.item_19},{t:this.item_21},{t:this.item_20},{t:this.item_22},{t:this.item_24},{t:this.item_23},{t:this.item_25},{t:this.item_27},{t:this.item_26}]}).wait(1));

	// BG
	this.bound = new lib.ScrollPageBG();
	this.bound.name = "bound";
	this.bound.parent = this;
	this.bound.setTransform(360,1260,1,1,0,0,0,360,1260);

	this.timeline.addTween(cjs.Tween.get(this.bound).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollPage, new cjs.Rectangle(0,0,720,2520), null);


(lib.ScrollArrowUp_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.arrowIcon();
	this.instance.parent = this;
	this.instance.setTransform(3.5,2,1,1,180,0,0,3.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowDown_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.arrowIcon("single",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowUp_upSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.ScrollArrowUp_icon("single",0);
	this.instance.parent = this;
	this.instance.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.2).s().p("AhAAgIAAhAICBAAIAABAg");
	this.shape.setTransform(7.5,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-7).s().p("AhKBGIAAiLICVAAIAACLgAhAA8ICBAAIAAh3IiBAAg");
	this.shape_1.setTransform(7.5,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.5,7,-1.5,-6.6).s().p("AhAA8IAAh3ICBAAIAAB3g");
	this.shape_2.setTransform(7.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollArrowUp_upSkin, new cjs.Rectangle(0,0,15,14), null);


(lib.ScrollArrowDown_upSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.ScrollArrowDown_icon("single",0);
	this.instance.parent = this;
	this.instance.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.2).s().p("AhAAgIAAhAICBAAIAABAg");
	this.shape.setTransform(7.5,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-7).s().p("AhKBGIAAiLICVAAIAACLgAhAA8ICBAAIAAh3IiBAAg");
	this.shape_1.setTransform(7.5,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.5,7,-1.5,-6.6).s().p("AhAA8IAAh3ICBAAIAAB3g");
	this.shape_2.setTransform(7.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollArrowDown_upSkin, new cjs.Rectangle(0,0,15,14), null);


(lib.ScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ThumbIcon
	this.thumbIcon = new lib.ScrollBar_thumbIcon();
	this.thumbIcon.name = "thumbIcon";
	this.thumbIcon.parent = this;
	this.thumbIcon.setTransform(6.5,68.6,1,1,0,0,0,2.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.thumbIcon).wait(1));

	// Thumb
	this.thumb = new lib.ScrollThumb_upSkin();
	this.thumb.name = "thumb";
	this.thumb.parent = this;
	this.thumb.setTransform(6,68.5,1,1,0,0,0,6,26);

	this.timeline.addTween(cjs.Tween.get(this.thumb).wait(1));

	// ArrowUp
	this.arrowUp = new lib.ScrollArrowUp_upSkin();
	this.arrowUp.name = "arrowUp";
	this.arrowUp.parent = this;
	this.arrowUp.setTransform(7.5,7.1,1,1,0,0,0,7.5,7);

	this.timeline.addTween(cjs.Tween.get(this.arrowUp).wait(1));

	// ArrowDown
	this.arrowDown = new lib.ScrollArrowDown_upSkin();
	this.arrowDown.name = "arrowDown";
	this.arrowDown.parent = this;
	this.arrowDown.setTransform(7.5,392.8,1,1,0,0,0,7.5,7);

	this.timeline.addTween(cjs.Tween.get(this.arrowDown).wait(1));

	// Track
	this.track = new lib.ScrollTrack_skin();
	this.track.name = "track";
	this.track.parent = this;
	this.track.setTransform(7.5,200,1,2.703,0,0,0,7.5,74);

	this.timeline.addTween(cjs.Tween.get(this.track).wait(1));

	// BG
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScrollBar, new cjs.Rectangle(0,0,16,400), null);


(lib.ScrollPane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		scrollPaneInit(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// ScrollBar
	this.scrollBar = new lib.ScrollBar();
	this.scrollBar.name = "scrollBar";
	this.scrollBar.parent = this;
	this.scrollBar.setTransform(727,0);

	this.timeline.addTween(cjs.Tween.get(this.scrollBar).wait(2));

	// Page
	this.page = new lib.ScrollPage();
	this.page.name = "page";
	this.page.parent = this;
	this.page.setTransform(360,1778.8,1,1,0,0,0,360,1778.8);

	this.timeline.addTween(cjs.Tween.get(this.page).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,743,2520);


// stage content:
(lib.ScrollPaneTest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		globalInit(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg8YAfQMAAAg+fMB4xAAAMAAAA+fg");
	mask.setTransform(400.5,290);

	// ScrollPane
	this.scrollPane = new lib.ScrollPane();
	this.scrollPane.name = "scrollPane";
	this.scrollPane.parent = this;
	this.scrollPane.setTransform(400,1869,1,1,0,0,0,360,1779);

	var maskedShapeInstanceList = [this.scrollPane];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.scrollPane).wait(1));

	// BG
	this.instance = new lib.StageBG();
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
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/StageBG.png", id:"StageBG"}
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