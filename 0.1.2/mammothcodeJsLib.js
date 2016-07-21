//mammothcodeCoreJsLib
//version 0.1.2

var Mc = {};
//公共的JsLib
Mc.Util = {};
//手机端JsLib
Mc.App = {};
//PC端JsLib
Mc.Pc = {};
//弹出层
//Version 1.4.0
//Auther Zero
//Update 2015.8.4
Mc.App.Pop = {
    //tip - 提示框:弹出一个操作提示,在tip_live时间(单位毫秒)内存在,然后消失,无回调函数
    Tip: function (options) {
        //style: 1, 默认样式1
        //width: '80%', 默认宽度
        //maxHeight: '80%', 默认最大高度
        //fadeSpeed: 200, 默认淡入淡出时间200毫秒
        //tipLive: 2000, 操作提示层生存时间(单位毫秒)
        //txtContent: "" 文本内容
        var settings = $.extend({
            style: 1, //默认样式1
            width: '80%', //默认宽度
            maxHeight: '80%', //默认最大高度
            fadeSpeed: 200, //默认淡入淡出时间200毫秒
            tipLive: 2000, //操作提示层生存时间(单位毫秒)
            txtContent: "" //文本内容
        }, options);
        //把当前时间(从1970.1.1开始的毫秒数)给弹出层作为ID标识
        var popId = new Date().getTime();
        var popHtml = function typeTipHtmlCreate() {
            var html = "";
            html += "<div id='tip" + popId + "' class='dialog-position-wrap' style='display:none;'>";
            html += "<div class='tip-wrap'>";
            html += "<div class='tip-content'>";
            html += settings.txtContent;
            html += "</div>";
            return html;
        };
        $("body").append(popHtml);
        var $popObj = $("#tip" + popId);
        //操作提示显示
        $popObj.fadeIn(settings.fadeSpeed, function () {
            //操作提示延时自动消失
            setTimeout(function () {
                $popObj.fadeOut(settings.fadeSpeed, function () {
                    $popObj.remove();
                });
            }, settings.tipLive);
        });
    }
}
//阻止滚动条冒泡
//id 滚动层id
Mc.Util.preventScroll = function (id) {
    var _this = document.getElementById(id);
    if (_this != null) {
        if (navigator.userAgent.indexOf("Firefox") > 0) {
            _this.addEventListener('DOMMouseScroll', function (e) {
                _this.scrollTop += e.detail > 0 ? 60 : -60;
                e.preventDefault();
            }, false);
        } else {
            _this.onmousewheel = function (e) {
                e = e || window.event;
                _this.scrollTop += e.wheelDelta > 0 ? -60 : 60;
                return false;
            };
        }
    }
    return this;
}


//***********//
//**baby.js**//
//**Version**//
//**  1.05 **//
//**15-7-15**//
//**Author **// ** Baby  **//
//***********//

//======= namespacep START=======//

/**
 * [Check second namespace]
 * @type {Object}
 */
Mc.Util.Check = {};

/**
 * [get second namespace]
 * @type {Object}
 */
Mc.Util.get = {};

/**
 * [change second namespace]
 * @type {Object}
 */
Mc.Util.change = {};

/**
 * [Checkstr third namespace]
 * @type {Object}
 */
Mc.Util.Check.Checkstr = {};

/**
 * [Checkcode third namespace]
 * @type {Object}
 */
Mc.Util.Check.Checkcode = {};

/**
 * [getstr third namespace]
 * @type {Object}
 */
Mc.Util.get.getstr = {};

/**
 * [getlength third namespace]
 * @type {Object}
 */
Mc.Util.get.getlength = {};

/**
 * [datetime third namespace]
 * @type {Object}
 */
Mc.Util.change.datetime = {};

/**
 * 字符串类
 */
Mc.Util.String = {};
/**
 * 日期时间类
 */
Mc.Util.Date = {};
/**
 * uri类
 */
Mc.Util.Uri = {};
//======= namespace END =======//

/**验证函数 **/

/**
 * [isNullorEmpty 判断字符串数组是否为空]
 * @param  {string[]} str
 * @return {Boolean}
 */
Mc.Util.String.isNullOrEmpty = function (str) {
    // body...
    var result = false;
    if(str.length !== 0){
        for(var i = 0;i<str.length;i++){
            if(str[i] !== ""){
                result = true;
            }			else{
                result = false;
            }
        }
    }
    return result;
};

/**
 * [Checkphonecode 正则表达式验证手机号是否正确]
 * @param  {varchar} phonenum
 * @return {Boolean}
 */
Mc.Util.Check.checkPhoneCode = function (phonenum){
    //待检测表达式是否正确
    var right = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|14[57]\d{8}|15\d{9}|18\d{9}|17\d{9}$/;
    if (phonenum.length !== 11 || !phonenum.match(right)) {
        return false;
    } 
    return true;
};

/**
 * [Checkmailcode 正则表达式验证邮箱是否正确]
 * @param  {varchar}email
 * @return {Boolean}
 */
Mc.Util.Check.checkMailCode = function (email){
    var right = /^[0-9A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    if (email.match(right)) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * [Checkidcard 正则表达式验证身份证是否正确]
 * @param  {varchar} idcard
 * @return {Boolean}
 */
Mc.Util.Check.checkIdcardCode = function (idcard){
    var right = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (idcard.match(right)) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * [Checktelcode 正则表达式验证固定电话是否正确]
 * @param  {varchar} telephone
 * @return {Boolean}
 */
Mc.Util.Check.checkTelCode = function  (telephone) {
    var right = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (telephone.match(right)) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * [Checktelcode 验证两个字符串是否相等]
 * @param  {varchar} str1 str2
 * @return {Boolean}
 */
Mc.Util.String.cmp = function (str1, str2) {
    var checkstr = [str1, str2];
    if (!Mc.Util.String.isNullOrEmpty(checkstr)) {
        return false;
    }
    if (str1 === str2) {
        return true;
    }
    else {
        return false;
    }
};

/**验证url**/

/**
 * [GetRequest get url param after ?]
 */
Mc.Util.Uri.getUrlParam = function () {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

/**
 * [dateFormatter Description]
 * @param  {datetime} date [description]
 * @param  {int} type [1 "yyyy-MM-dd" 2 "MM-dd"]
 * @return {string}
 */
Mc.Util.Date.dateFormatter = function (date,type) {
    var year = date.replace(/yyyy/,this.getFullYear());
    var month = date.replace(/MM/,this.getMonth()>9?this.getMonth().toString():'0' + this.getMonth());
    var day = date.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());
    if (type === 1) {
        return year + "-" + month + "-" + day;
    }else if (type === 2) {
        return month + "-'" + day;
    }
    return false;
};

Mc.Util.String.getStrLength = function(str){
    return str.length;  
};

Mc.Util.String.getStrTrueLength = function (str) {
    return str.replace(/[^x00-xff]/g, "xx").length;
};

/**
 * 下拉选择菜单
 */
Mc.Util.selectMenu = function (selector, callback) {
    var $selector = $(selector);
    $selector.on("click", function (ev) {
        var $this = $(this);
        if ($this.hasClass("open")) {
            $this.removeClass("open").find('ul').hide();
        } else {
            $this.addClass("open").find('ul').show();
        }
        ev.stopPropagation();
    });
    $selector.on("click", 'li', function (ev) {
        var val = $(this).text();
        $(this).parents(selector).find('div').html(val);
        if (callback != null) callback(this, val);
        $(selector + ' ul').hide();
        $selector.removeClass("open");
        ev.stopPropagation();
    });
    $(document).click(function () {
        $(selector + ' ul').hide();
        $selector.removeClass("open");
    });
}


//弹出层(废弃)
//Version 1.3.2
//Auther Zero
//Update 2015.6.23
//可选类型：
//1.null - 默认的带有head-body-bottom
//2.void - 空白弹出层:无默认按钮以及标题,可选择传入一个用来关闭弹出层的按钮的JQuery选择器
//3.tip - 提示框:弹出一个操作提示,在tip_live时间(单位毫秒)内存在,然后消失,无回调函数
//4.loading - 载入框:弹出一个载入中的弹出层.需要代码手动remove.
//5.confirm - 确认框 (开发中)
//type: null, 弹出层类型,默认null(即可自定义添加HTML,css控制样式)
//style: 1, 默认样式1
//width: '80%', 默认宽度
//max_height: '80%', 默认最大高度
//fadeSpeed: 200, 默认淡入淡出时间200毫秒
//tip_live: 2000, 操作提示层生存时间(单位毫秒),只有在type为tip时生效
//tip_content: "", 操作提示层内容,只有在type为tip时生效
//loading_content: "载入中...", 载入层提示文字
//hasHead: true, 默认有标题
//head_txt: "是否确认当前操作", 默认弹出层标题
//headHTML: "", 可传入String自定义head,type为void时会自动启用
//html: "", 默认弹出框的内容
//bottomHTML: "", 可传入String自定义bottom,type为void时会自动启用
//confirm_id: "#dialog_L_", 默认左侧按钮绑定的id前缀(开发中)
//confirm_btn: true, 默认显示确认按钮
//confirm_txt: "确认", 默认确认按钮显示文字确认
//callback_L: null, 左侧按钮点击回调函数(confirm_btn)
//cancel_id: "#dialog_R_", 默认右侧按钮绑定的id前缀(开发中)
//cancel_btn: true, 默认显示取消按钮
//cancle_txt: "取消", 默认取消按钮显示文字取消
//callback_R: null, 右侧按钮点击回调函数(cancel_btn)
//hasBg: true, 默认有黑色背景
//bgClose: false, 默认无法点击bg取消弹出框
//callback_bc: null, bg等关闭按钮点击回调函数,只有在bg_close为true的情况下才会生效
//otherClose: null, 传入一个用来关闭弹出层的按钮的JQuery选择器,若要唯一绑定,传入的JQuery必须唯一
//callback_oc: null, otherClose的回调函数
//callback_ini: null, 弹出层初始化回调函数
//callback_close: null, 弹出层消失回调函数
//scroll: true, 默认弹出层有滚动条
//scroll_mouseWheelPixels: 100 默认弹出层body滚动条滚动速度100px
function Dialog(options) {
    var settings = $.extend({
        //可选类型：
        //1.null - 默认的带有head-body-bottom
        //2.void - 空白弹出层:无默认按钮以及标题,可选择传入一个用来关闭弹出层的按钮的JQuery选择器
        //3.tip - 提示框:弹出一个操作提示,在tip_live时间(单位毫秒)内存在,然后消失,无回调函数
        //4.loading - 载入框:弹出一个载入中的弹出层.需要代码手动remove.
        //5.confirm - 确认框 (开发中)
        type: null, //弹出层类型,默认null(即可自定义添加HTML,css控制样式)
        style: 1, //默认样式1

        width: '80%', //默认宽度
        max_height: '80%', //默认最大高度
        fadeSpeed: 200, //默认淡入淡出时间200毫秒

        tip_live: 2000, //操作提示层生存时间(单位毫秒),只有在type为tip时生效
        tip_content: "", //操作提示层内容,只有在type为tip时生效

        loading_content: "载入中...", //载入层提示文字

        hasHead: true, //默认有标题
        head_txt: "是否确认当前操作", //默认弹出层标题
        headHTML: "", //可传入String自定义head,type为void时会自动启用

        html: "", //默认弹出框的内容
        bottomHTML: "", //可传入String自定义bottom,type为void时会自动启用

        confirm_id: "#dialog_L_", //默认左侧按钮绑定的id前缀(开发中)
        confirm_btn: true, //默认显示确认按钮
        confirm_txt: "确认", //默认确认按钮显示文字确认
        callback_L: null, //左侧按钮点击回调函数(confirm_btn)
        cancel_id: "#dialog_R_", //默认右侧按钮绑定的id前缀(开发中)
        cancel_btn: true, //默认显示取消按钮
        cancle_txt: "取消", //默认取消按钮显示文字取消
        callback_R: null, //右侧按钮点击回调函数(cancel_btn)

        hasBg: true, //默认有黑色背景
        bgClose: false, //默认无法点击bg取消弹出框
        callback_bc: null, //bg等关闭按钮点击回调函数,只有在bg_close为true的情况下才会生效

        otherClose: null, //传入一个用来关闭弹出层的按钮的JQuery选择器,若要唯一绑定,传入的JQuery必须唯一
        callback_oc: null, //otherClose的回调函数

        callback_ini: null, //弹出层初始化回调函数
        callback_close: null, //弹出层消失回调函数

        scroll: true, //默认弹出层有滚动条
        scroll_mouseWheelPixels: 100 //默认弹出层body滚动条滚动速度100px
    }, options);

    //======= 变量 START =======//
    var _this = this;
    var dialogBodyMaxHeight = null;

    //把当前时间(从1970.1.1开始的毫秒数)给弹出层作为ID标识
    var dialogId = new Date().getTime();

    var dialogHtml = "";
    //======= 变量 END =======//

    //======= 接口函数 START =======//
    //弹出层dialog-body滚动条更新(CANCEL)
    //_this.updateDialogScroll = function () {
    //    if (settings.scroll) {
    //        $(".dialog-body").mCustomScrollbar("update");
    //    }
    //}
    //获得弹出层dialog-body的max-height
    _this.getDialogBodyMaxHeight = function () {
        return dialogBodyMaxHeight;
    }
    //移除弹出层
    _this.remove = function () {
        delDialog(dialogId);
    }
    //移除载入弹出层
    _this.removeLoading = function () {
        delDialog("loading" + dialogId);
    }
    //======= 接口函数 END =======//


    //======= 弹出层HTML构造 START =======//
    //构造弹出层
    if (settings.type == null) {
        //默认弹出层
        dialogHtml = typeDefaultHtmlCreate();
    } else if (settings.type == "void") {
        //空的弹出层
        dialogHtml = typeVoidHtmlCreate();
    } else if (settings.type == "tip") {
        //提示弹出层
        dialogHtml = typeTipHtmlCreate();
    } else if (settings.type == "loading") {
        //载入中弹出层
        dialogHtml = typeLoadingHtmlCreate();
    } else if (settings.type == "confirm") {
        //确认框弹出层
        dialogHtml = typeConfirmHtmlCreate();
    }

    //1.默认的弹出层构造函数
    function typeDefaultHtmlCreate() {
        var HTML = "";
        HTML += "<div id='" + dialogId + "' class='dialog-position-wrap' style='display:none;'>";
        HTML += "<div class='dialog-wrap ds" + settings.style + "' style='width:" + settings.width + ";max-height:" + settings.max_height + ";'>";

        //dialog-top构造
        HTML += "<div class='dialog-top'>";
        //判断标题是否显示(hasHead优先级最高)
        if (settings.hasHead) {
            //若headHTML有内容(不为空),则覆盖默认的head
            if (isEmptyString(settings.headHTML)) {
                HTML += settings.headHTML;
            } else {
                HTML += "<div class='dialog-head ds" + settings.style + "'>" + settings.head_txt + "</div>";
            }
        }
        HTML += "</div>";

        //dialog-body构造
        HTML += "<div class='dialog-body'>";
        HTML += settings.html;
        HTML += "</div>";

        //dialog-bottom构造
        HTML += "<div class='dialog-bottom'>";
        //若bottomHTML有内容(不为空),则覆盖默认的bottom
        if (isEmptyString(settings.bottomHTML)) {
            HTML += settings.bottomHTML;
        } else {
            //判断按钮显示
            if (settings.confirm_btn || settings.cancel_btn) {
                HTML += "<div class='dialog-btn-wrap ds" + settings.style + "'>";
                if (settings.confirm_btn)
                    HTML += "<div id='dialog_L_" + dialogId + "' class='dialog-btn ds" + settings.style + "'>" + settings.confirm_txt + "</div>";
                if (settings.cancel_btn)
                    HTML += "<div id='dialog_R_" + dialogId + "' class='dialog-btn ds" + settings.style + "'>" + settings.cancle_txt + "</div>";
                HTML += "</div>";
            }
        }
        HTML += "</div>";

        //dialog-bg构造
        if (settings.hasBg) HTML += "<div id='bg_" + dialogId + "' class='dialog-bg ds" + settings.style + "'></div>";

        HTML += "</div></div>";
        return HTML;
    }

    //2.type: void 弹出层HTML构造
    function typeVoidHtmlCreate() {
        var html = "";
        html += "<div id='" + dialogId + "' class='dialog-position-wrap' style='display:none;'>";
        html += "<div class='dialog-wrap ds" + settings.style + "' style='width:" + settings.width + ";max-height:" + settings.max_height + ";'>";

        //dialog-top构造
        html += "<div class='dialog-top'>";
        //判断标题是否显示(hasHead优先级最高)
        if (settings.hasHead) {
            html += settings.headHTML;
        }
        html += "</div>";

        //dialog-body构造
        html += "<div class='dialog-body'>";
        html += settings.html;
        html += "</div>";

        //dialog-bottom构造
        html += "<div class='dialog-bottom'>";
        html += settings.bottomHTML;
        html += "</div>";

        //dialog-bg构造
        if (settings.hasBg) html += "<div id='bg_" + dialogId + "' class='dialog-bg ds" + settings.style + "'></div>";

        html += "</div></div>";
        return html;
    }

    //3.type: tip 弹出层HTML构造
    function typeTipHtmlCreate() {
        var html = "";
        html += "<div id='tip" + dialogId + "' class='dialog-position-wrap' style='display:none;'>";
        html += "<div class='tip-wrap'>";
        html += "<div class='tip-content'>";
        html += settings.tip_content;
        html += "</div></div>";
        return html;
    }

    //4.type: loading 弹出层HTML构造(TO DO)
    function typeLoadingHtmlCreate() {
        var html = "";
        html += "<div id='loading" + dialogId + "' class='dialog-position-wrap' style='display:none;'>";
        html += "<div class='dialog-wrap'>";
        html += "<div class='loading-content'>";
        html += settings.loading_content;
        //dialog-bg构造
        if (settings.hasBg) html += "<div id='bg_" + dialogId + "' class='dialog-bg ds" + settings.style + "'></div>";
        html += "</div></div>";
        return html;
    }

    //5.type: confirm 弹出层HTML构造(TO DO)
    function typeConfirmHtmlCreate() {
        var html = "";

        return html;
    }
    //======= 弹出层HTML构造 END =======//

    //======= 弹出层显示 START =======//
    //把弹出层HTML添加到页面中
    if (settings.type == "tip") {
        $("body").before(dialogHtml);
        //操作提示显示
        $("#tip" + dialogId).fadeIn(settings.fadeSpeed, function () {
            //操作提示延时自动消失
            setTimeout(function () {
                delDialog("tip" + dialogId);
            }, settings.tip_live);
        });
    } else if (settings.type == "loading") {
        $("body").before(dialogHtml);
        //载入中弹出层显示
        $("#loading" + dialogId).fadeIn(settings.fadeSpeed);
    } else {
        $("body").before(dialogHtml);
        //弹出层显示
        $("#" + dialogId).fadeIn(settings.fadeSpeed, function () {
            //设置dialog最大高度
            setDialogMaxHeight();
            //弹出层初始化回调函数
            if (settings.callback_ini != null) settings.callback_ini();
            //滚动条更新(CANCEL)
            //if (settings.scroll) {
            //    $(".dialog-body").mCustomScrollbar("update");
            //}
        });
    }
    //======= 弹出层显示 END =======//


    //======= 弹出层事件添加 START =======//
    if (settings.type == "tip") {
        //提示框被点击的时候直接消失
        $("#tip" + dialogId).bind('click', function () {
            //隐藏并删除确认框
            delDialog("tip" + dialogId);
        });
    } else {
        //其他关闭按钮
        if (settings.otherClose) {
            $(settings.otherClose).live('click', function () {
                //左侧按钮操作
                if (settings.callback_oc != null) settings.callback_oc();
                //隐藏并删除弹出层
                delDialog(dialogId);
            });
        }
        //底部按钮
        if ((settings.confirm_btn || settings.cancel_btn) && settings.type != "void") {
            if (settings.confirm_btn) {
                $(settings.confirm_id + dialogId).bind('click', function () {
                    //左侧按钮操作
                    if (settings.callback_L != null) settings.callback_L();
                    //隐藏并删除弹出层
                    delDialog(dialogId);
                });
            }
            if (settings.cancel_btn) {
                $(settings.cancel_id + dialogId).bind('click', function () {
                    //右侧按钮操作
                    if (settings.callback_R != null) settings.callback_R();
                    //隐藏并删除弹出层
                    delDialog(dialogId);
                });
            }
        }
        //背景关闭按钮
        if (settings.bgClose) {
            $("#bg_" + dialogId).bind('click', function () {
                //关闭弹出框后操作
                if (settings.callback_bc != null) settings.callback_bc();
                //隐藏并删除弹出层
                delDialog(dialogId);
            });
        }
    }
    //======= 弹出层事件添加 END =======//


    //======= 内部工具函数 START =======//
    //隐藏并删除弹出层
    function delDialog(dialogNum) {
        $("#" + dialogNum).fadeOut(settings.fadeSpeed, function () {
            //弹出层消失回调函数
            if (settings.callback_close != null) settings.callback_close();
            $("#" + dialogNum).remove();
        });
    }

    //设置dialog最大高度
    function setDialogMaxHeight() {
        var dialogWrapH = $(".dialog-wrap").outerHeight();
        var dialogHeadH = $(".dialog-top").outerHeight();
        var dialogBtnH = $(".dialog-bottom").outerHeight();
        //dialog_max_H此值为弹出层有实际内容的最大高度
        var dialogMaxH = dialogWrapH - dialogHeadH - dialogBtnH;
        //dialog_body_max_height此值为弹出层满高的最大高度
        dialogBodyMaxHeight = $(window).height() * (parseInt(settings.max_height) / 100) - dialogHeadH - dialogBtnH;
        $(".dialog-body").css("max-height", dialogMaxH);
    }

    //判断字符串是否为空
    function isEmptyString(str) {
        if (str == "") {
            return false;
        } else {
            return true;
        }
    }
    //======= 内部工具函数 END =======//

    //弹出层dialog-body滚动条(CANCEL)
    //if (settings.scroll) {
    //    //弹出层添加滚动条
    //    $(".dialog-body").mCustomScrollbar({
    //        //mouseWheelPixels: settings.scroll_mouseWheelPixels
    //        mouseWheelPixels: "auto"
    //    });
    //}
}