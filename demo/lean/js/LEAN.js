window.onload = function () {


    //根据class name获取元素
    function getByClassName(obj, cls) {
        var elements = obj.getElementsByTagName("*");
        var result = [];
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].className == cls) {
                result.push(elements[i]);
            }
        }
        return result;
    }

    //切换页面
    var oHeader = document.getElementById("header");
    var oNavs = oHeader.getElementsByTagName("a");
    var oItems = getByClassName(document.getElementById("content"),"item");
    for (var i=0;i<oNavs.length;i++){
        oNavs[i].index = i;
        oNavs[i].onclick=function() {
            for(var n=0;n<oNavs.length;n++) {
                oNavs[n].className="";
                oItems[n].style.display="none";
            }
            this.className="on";
            oItems[this.index].style.display="block";
        }
    }

    //登录
    var oBtn = document.getElementById("login-btn");
    oBtn.onclick = function () {
        var oLoginframe = document.getElementById("loginframe");
        var oMask = document.getElementById("mask");
        oLoginframe.style.display = oMask.style.display = "block";
        var oClose = document.getElementById("close");
        oClose.onclick = oMask.onclick = function () {
            oLoginframe.style.display = oMask.style.display = "none";
        }
    }

    var oUsername = getByClassName(document.getElementById("user"),"username")[0];
    oUsername.onfocus = function () {
        if (this.value == '邮箱或者手机号') {
            this.value = '';
        }
    }
    oUsername.onblur = function () {
        if (this.value == '') {
            this.value = '邮箱或者手机号';
        }
    }
    var oPassword = getByClassName(document.getElementById("user"),"password")[0];
    oPassword.onfocus = function () {
        if (this.value == '密码') {
            this.value = '';
        }
    }
    oPassword.onblur = function () {
        if (this.value == '') {
            this.value = '密码';
        }
    }


    //显示焦点图
   myFocus.set({
       id:"picBox"
   })


    //回到顶部
    var obacktop = document.getElementById("backtop");
    //获取页面可视区域的高度
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;

    //滚动条滚动时触发
    window.onscroll = function () {
        var oTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (oTop >= clientHeight) {
            obacktop.style.display = "block";
        } else {
            obacktop.style.display = "none";
        }

        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    }

    obacktop.onclick = function () {
        timer = setInterval(function () {
            //获取滚动条距离顶部的高度
            var oTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ospeed = Math.floor(-oTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = oTop + ospeed;

            isTop = true;
            if (oTop === 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}