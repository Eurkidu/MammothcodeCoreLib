//loading层对象
var loading = null;
//显示loading
function showLoading() {
    loading = new Mc.Pc.Pop.Loading();
}
//隐藏loading
function closeLoading() {
    loading.removeLoading();
}

//#region 微信风格loading
var weLoading = null;
$(function() {
    //微信loading
    weLoading = new Mc.Pop.Loading;
});
//显示loading
function showWeLoading() {
    weLoading.show();
}
//隐藏loading
function closeWeLoading() {
    weLoading.remove();
}
//#endregion

//#region 车辆品牌型号选择
//创建品牌弹出选择
function defaultDataTemplateGroup() {
    /*
    {{each data as item i}}
    <div class="car-item">
        <div class="group-header">{{item.CB_FIRST_CHAR}}</div>
        {{each item.list as cm j}}
        <div class="mc-item group-item fbox" mc-code="{{cm.CB_ID}}">
            <div class="pic-wrap">
                <img src="{{cm.CB_PIC}}"/>
            </div>
            <div class="txt bf1"><span>{{cm.CB_NAME}}</span></div>
        </div>
        {{/each}}
    </div>
    {{/each}}
    */
}
var brandPopSelect = new Mc.PopSelectBox({
    $dataConfig: {
        dataId: "data",
        searchKey: "SearchName"
    },
    $ajaxConfig: {
        url: "/Api/CarBrand/GetCarBrandGroupList"
    },
    externTemplate: true,
    groupMode: true,
    pageMode: false,
    searchMode: true,
    defaultDataTemplateGroup: defaultDataTemplateGroup,
    titileName: "车辆品牌选择",
    beforeSend: showLoading,
    success: closeLoading,
    noMore: closeLoading,
    beforeIni: showLoading,
    iniSuccess: closeLoading,
    beforeSearch: showLoading,
    successSearch: closeLoading,
    noResultSearch: function (response) {
        closeLoading();
        this.addHtml('<div class="noresult-item">暂无搜索结果</div>');
    }
});
//创建型号弹出选择
function defaultDataTemplate() {
    /*
    {{each data as item i}}
        <div class="mc-item default-item" mc-price="{{item.CM_GUIDE_PRICE}}" mc-code="{{item.CM_ID}}">{{item.CM_NAME}}</div>
    {{/each}}
    */
}
var modelPopSelect = new Mc.PopSelectBox({
    $dataConfig: {
        dataId: "data",
        text: "CM_NAME",
        value: "CM_ID",
        searchKey: "SearchName"
    },
    $ajaxConfig: {
        url: "/Api/CarBrand/GetCarModelListByCbid"
    },
    externTemplate: true,
    searchMode: true,
    defaultDataTemplate: defaultDataTemplate,
    titileName: "车辆型号选择",
    beforeSend: showLoading,
    success: closeLoading,
    noMore: closeLoading,
    beforeIni: showLoading,
    iniSuccess: closeLoading,
    beforeSearch: showLoading,
    successSearch: closeLoading,
    noResultSearch: function (response) {
        closeLoading();
        this.addHtml('<div class="noresult-item">暂无搜索结果</div>');
    }
});

//显示品牌型号选择弹出层
function showBrandPop() {
    brandPopSelect.showPop();
}
var def = null;
//车辆品牌弹出选择,选择事件
brandPopSelect.$.on("item_click", function (ev, item) {
    def = $.Deferred();
    var $item = $(item);
    var carBrandCode = $item.attr("mc-code"); //车辆品牌code
    var carBrandTxt = $item.text().trim();
    def.then(function () {
        //carHtml = $item.children(".txt").children().html();
        $("#car_brand_code").val(carBrandCode); //车辆品牌隐藏input赋值code
        if ($("#car_type").length != 0) {
            $("#car_type").val(carBrandTxt);
        } else {
            $("#brandID").html(carBrandTxt);
        }
    });
    this.closePop(); //关闭品牌弹出层
    modelPopSelect.changeAjaxData({
        CB_ID: carBrandCode
    });
    modelPopSelect.showPop(); //显示型号弹出层
});
//车辆型号弹出选择,选择事件
modelPopSelect.$.on("item_click", function (ev, item) {
    var $item = $(item);
    var carHtml = $item.html();
    def.resolve();
    $("#car_model_code").val($item.attr("mc-code")); //车辆型号隐藏input赋值code

    if ($("#car_type").length != 0) {
        $("#car_type").val($("#car_type").val() + carHtml);
    } else {
        $("#brandID").append(carHtml);
    }
    this.closePop();
});
//#endregion

//#region 车辆省份弹出选择
//选择车辆号牌省份
function showCarPro() {
    carProvincePopSelect.showPop();
}

//创建车辆省份弹出选择
var carProvincePopSelect = new Mc.PopSelectBox({
    $dataConfig: {
        text: "txt"
    },
    data: [
        { txt: "京" },
        { txt: "沪" },
        { txt: "浙" },
        { txt: "苏" },
        { txt: "粤" },
        { txt: "鲁" },
        { txt: "晋" },
        { txt: "冀" },
        { txt: "豫" },
        { txt: "川" },
        { txt: "渝" },
        { txt: "辽" },
        { txt: "吉" },
        { txt: "黑" },
        { txt: "晥" },
        { txt: "鄂" },
        { txt: "湘" },
        { txt: "赣" },
        { txt: "闽" },
        { txt: "陕" },
        { txt: "甘" },
        { txt: "宁" },
        { txt: "蒙" },
        { txt: "津" },
        { txt: "贵" },
        { txt: "云" },
        { txt: "桂" },
        { txt: "琼" },
        { txt: "青" },
        { txt: "新" },
        { txt: "藏" }
    ],
    pageMode: false,
    titileName: "车辆省份选择",
    beforeSend: showLoading,
    success: closeLoading,
    noMore: closeLoading,
    beforeIni: showLoading,
    iniSuccess: closeLoading
});
//#endregion

//#region 银行选择
//银行弹出选择
var cardPopSelect = new Mc.PopSelectBox({
    $dataConfig: {
        dataId: "data",
        text: "CC_NAME",
        value: "CC_NUM"
    },
    $ajaxConfig: {
        url: "/Api/Card/GetAllList"
    },
    titileName: "银行选择",
    beforeSend: showLoading,
    success: closeLoading,
    noMore: closeLoading,
    beforeIni: showLoading,
    iniSuccess: closeLoading
});
//显示银行弹出选择
function showCardPop() {
    cardPopSelect.showPop();
}
//#endregion
