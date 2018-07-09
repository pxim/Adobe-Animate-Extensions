
// 如需设置是否出现滚动条，则调用setScrollBarVisible()方法；
// 参考：
// setScrollBarVisible(true);
// setScrollBarVisible(false);

// 如需根据内容页ScrollPage的高度，实时更新滚动条的长度，需要在每次更新高度的时候，调用setScrollPageHeight()此方法；
// ScrollPage的高度(totalHeight) = 内容区域的高度 + 边框空白区域的高度（可无，建议有）；
// 参考：
// totalHeight = Math.floor(itemNum / 3) * (bounds.height + gapHeight);
// setScrollPageHeight(totalHeight);

var _this; var scrollPage;
function globalInit(self) {
    _this = self;

    var t = window.setInterval(function () {
        if(_this.numChildren > 0){
            window.clearInterval(t);
            scrollPage = _this.scrollPane.page;

            //开启隐藏滚动条和更改滚动条界面的测试
            // initPlantItemPane();
        }
    }, 50);
}



var origX = 0;
var origY = 0;
var gapWidth = 30;
var gapHeight = 17.8;
var plantNum = 0;
var totalHeight = 0;
function initPlantItemPane() {
    var tempList = [
        {ID:1,status:true},
        {ID:2,status:true},
        {ID:3,status:true},
        {ID:4,status:false},
        {ID:5,status:false},
        {ID:6,status:false},
        {ID:7,status:false},
        {ID:8,status:false},
        {ID:9,status:false},
        {ID:10,status:false},
        {ID:11,status:false},
        {ID:12,status:false},
        {ID:13,status:false},
        {ID:14,status:false},
        {ID:15,status:false},
        {ID:16,status:false},
        {ID:17,status:false},
        {ID:18,status:false},
        {ID:19,status:false},
        {ID:20,status:false},
        {ID:21,status:false},
        {ID:22,status:false},
        {ID:23,status:false},
        {ID:24,status:false},
        {ID:25,status:false},
        {ID:26,status:false},
        {ID:27,status:false}
    ];
        for(var i = 0; i<tempList.length; i++){
            var mc = scrollPage["item_" + tempList[i].ID];
            if(tempList[i].status === true) {
                var bounds = mc.getTransformedBounds();
                mc.visible = true;
                var _x = (plantNum % 3) * (bounds.width + gapWidth);
                var _y = Math.floor(plantNum / 3) * (bounds.height + gapHeight);
                mc.setTransform(_x,_y);
                origX = origX + bounds.width + gapWidth;
                // origY =
                plantNum ++;
            }else {
                mc.visible = false;
            }
        }


    if(plantNum > 3){
        setScrollBarVisible(true);
    }else{
        setScrollBarVisible(false);
    }

    //scrollBarPaneInit(_this.scrollPane);
    totalHeight = Math.floor(plantNum / 3) * (bounds.height + gapHeight);
    setScrollPageHeight(totalHeight);
}

