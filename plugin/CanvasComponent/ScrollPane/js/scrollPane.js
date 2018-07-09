
/*!
 * ScrollPane v0.0.1
 * 滚动条组件（竖向滚动条完成；横向未完成，可参考竖向滚动条的写法；）
 * https://github.com/seanin/Adobe-Animate-Extensions
 * Copyright 2018, 2028 Peng Xiang
 * QQ:245803627
 * Released under the MIT license
 */
var that;
function scrollPaneInit(self) {
    that = self;

    var t = window.setInterval(function () {
        if(that.numChildren > 0){
            window.clearInterval(t);

            pageBound = that.page.getTransformedBounds();
            scrollBarBound = that.scrollBar.getTransformedBounds();
            addScrollBarEventListeners();


            // that.page.setTransform(pageBound.x,-230);
            that.page.setTransform(0,0);
            initThumbPosition();
        }
    }, 50);
}


function addScrollBarEventListeners() {
    var self = that.scrollBar;
    self.arrowUp.addEventListener('mousedown', onArrowUpMouseDown);
    self.arrowUp.addEventListener('pressup', onArrowUpPressUp);

    self.arrowDown.addEventListener('mousedown', onArrowDownMouseDown);
    self.arrowDown.addEventListener('pressup', onArrowDownPressUp);

    self.thumb.addEventListener('mousedown', onThumbMouseDown);
}

var pageBound;
var scrollBarBound;
var nowPageY = 0;
var timer;
function onArrowUpMouseDown(event) {
    var _height = scrollBarBound.height - pageBound.height;
    timer = window.setInterval(function () {
        if(nowPageY < 0){
            nowPageY = nowPageY + 5;
            that.page.setTransform(pageBound.x,nowPageY);
            updateThumbPosition();

            // var bound = that.page.getTransformedBounds();
            // console.log(bound.y);
        }
    }, 50);
}
function onArrowUpPressUp(event) {
    if(timer != null){
        window.clearInterval(timer);
    }
}

function onArrowDownMouseDown(event) {
    var _height = scrollBarBound.height - pageBound.height;
    timer = window.setInterval(function () {
        if(nowPageY > _height){
            nowPageY = nowPageY - 5;
            that.page.setTransform(pageBound.x,nowPageY);
            updateThumbPosition();

            // var bound = that.page.getTransformedBounds();
            // console.log(bound.y);
        }
    }, 50);
}
function onArrowDownPressUp(event) {
    if(timer != null){
        window.clearInterval(timer);
    }
}

function initThumbPosition() {
    //滚动条
    var self = that.scrollBar;
    var arrowUpBound = self.arrowUp.getTransformedBounds();
    self.thumb.setTransform(0,arrowUpBound.height);

    var thumbBound = self.thumb.getTransformedBounds();
    var iconBound = self.thumbIcon.getTransformedBounds();
    var _x = 4;
    var _y = thumbBound.y + (thumbBound.height - iconBound.height)/2;
    self.thumbIcon.setTransform(_x,_y);
}
//更新拖动条坐标（纵坐标y）
function updateThumbPosition() {
    //thumb坐标
    var self = that.scrollBar;
    var arrowUpBound = self.arrowUp.getTransformedBounds();

    var _height = scrollBarBound.height - pageBound.height;
    var per = Math.abs(nowPageY) / Math.abs(_height);
    var thumbY = arrowUpBound.height + (self.getTransformedBounds().height - self.thumb.getTransformedBounds().height - arrowUpBound.height*2) * per;

    self.thumb.setTransform(0, thumbY);

    //thumbIcon坐标
    var thumbBound = self.thumb.getTransformedBounds();
    var iconBound = self.thumbIcon.getTransformedBounds();
    var _x = 4;
    var _y = thumbBound.y + (thumbBound.height - iconBound.height)/2;
    self.thumbIcon.setTransform(_x,_y);
}

var thumbScrollOffset;
function onThumbMouseDown(event) {
    var target = event.currentTarget;
    thumbScrollOffset = that.stage.mouseX - target.y;

    that.scrollBar.thumb.addEventListener('pressmove', onThumbPressMove);
    that.scrollBar.thumb.addEventListener('pressup', onThumbPressUp);
}

function onThumbPressMove(event) {
    var target = event.currentTarget;
    var point = that.globalToLocal(that.stage.mouseX, that.stage.mouseY);
    // target.x = point.x - 8;

    var tempY = point.y - 26;
    var self = that.scrollBar;
    var limitMinY = self.arrowUp.getTransformedBounds().height;
    var limitMaxY = self.track.getTransformedBounds().height - self.arrowUp.getTransformedBounds().height - self.thumb.getTransformedBounds().height;

    if(Math.floor(tempY) >= limitMinY && Math.floor(tempY) <= limitMaxY) {
        // console.log(tempY,Math.floor(tempY));
        target.y = Math.floor(tempY);
        self.thumbIcon.y = target.y + (self.thumb.getTransformedBounds().height - self.thumbIcon.getTransformedBounds().height)/2;
        updatePagePosition();
    }

}

function onThumbPressUp(event) {
    that.scrollBar.thumb.removeEventListener('pressmove', onThumbPressMove);
    that.scrollBar.thumb.removeEventListener('pressup', onThumbPressUp);
}

function updatePagePosition() {
    var _height = scrollBarBound.height - pageBound.height;

    var self = that.scrollBar;
    var limitMaxY = self.track.getTransformedBounds().height - self.arrowUp.getTransformedBounds().height * 2 - self.thumb.getTransformedBounds().height;
    var per = (self.thumb.y - self.arrowUp.getTransformedBounds().height) / limitMaxY;
    nowPageY = _height * per ;
    that.page.y = nowPageY;
}

//设置 滚动条是否显示 false隐藏；true显示；
function setScrollBarVisible(bool) {
    that.scrollBar.visible = bool;
}

function setScrollPageHeight(val) {
    var bound2 = that.page.getTransformedBounds();
    var bound = that.page.bound.getTransformedBounds();
    var _scaleY = (val / bound.height) ;
    that.page.bound.setTransform(bound.x,bound.y,1,_scaleY);
    // that.page.bound.scaleY = _scaleY;
    var bound3 = that.page.getTransformedBounds();
    // that.page.bg.setTransform(bound.x,bound.y,bound.width,val);
}