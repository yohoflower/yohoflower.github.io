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
    var oItems = getByClassName(document.getElementById("contain"), "item");
    for (var i = 0; i < oNavs.length; i++) {
        oNavs[i].index = i;
        oNavs[i].onclick = function () {
            for (var n = 0; n < oNavs.length; n++) {
                oNavs[n].className = "";
                oItems[n].style.display = "none";
            }
            this.className = "on";
            oItems[this.index].style.display = "block";
        }
    }


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


    //图片Lazy Load
    $(function () {

        $("#qvtu img").lazyload({
            effect: "fadeIn"
        });
    });


    //视频播放列表
    var videoList = [
        {
            title: "papi酱的明星系列视频—《明撕ing面对面》",
            src: "http://player.youku.com/player.php/sid/XMTU1NDU5ODY5Ng==/v.swf"
        },
        {
            title: "papi酱的吐槽系列—生活中那些令人一言难尽的事 ",
            src: "http://player.youku.com/player.php/sid/XMTU0NzA3OTU1Mg==/v.swf"
        },
        {
            title: "papi酱—一个人的减肥全过程 ",
            src: "http://player.youku.com/player.php/sid/XMTUzOTQxOTg2MA==/v.swf"
        },
        {
            title: "papi酱纪念莎士比亚400周年特别视频",
            src: "http://player.youku.com/player.php/sid/XMTU0NTc0NTM3Ng==/v.swf"
        },
        {
            title: "SHE《你曾是少年》",
            src: "http://player.youku.com/player.php/sid/XOTU5ODIwNzcy/v.swf"
        },
        {
            title: "SHE《安静了》",
            src: "http://player.youku.com/player.php/sid/XNzA0ODY5NzQ4/v.swf"
        },
        {
            title: "李荣浩《李白》",
            src: "http://player.youku.com/player.php/sid/XODYxMjAxMDA0/v.swf"
        }
    ];

    var oVideo = document.getElementById("video");
    playVideo();

    function playVideo() {
        var html = '', v;
        for (var i = 0; i < videoList.length; i++) {
            v = videoList[i];
            html += '<div class="content"><h2>' + v.title + '</h2>' +
                '<div class="video"><embed type="application/x-shockwave-flash" allowscriptaccess="always" allowFullScreen="true"' +
                'align="middle" quality="high" height="400" width="480" src="' + v.src + '" /></div>' +
                '<hr>' +
                '<div class="bottom"><a href="javascript:;" title="分享到QQ空间"><img src="image/qq.png"></a>' +
                '<a href="javascript:;" title="分享到新浪微博"><img src="image/weibo.png"></a>' +
                '<a href="javascript:;" title="分享到微信朋友圈"><img src="image/weixin.jpg"></a>' +
                '<a href="javascript:;" title="分享到人人网"><img src="image/renren.jpg"></a>' +
                '<a href="javascript:;" title="赞"><img class="zan" src="image/zan.jpg"></a></div>' +
                '</div>'

            oVideo.innerHTML = html;
        }
    }


    //音乐播放列表
    // the playlist is just a JSON-style object.
    var playList = [
        {
            src: "music/Right Here Waiting.mp3",
            title: "Right Here Waiting—Richard Marx"
        },
        {
            src: "music/都一样.mp3",
            title: "都一样—李荣浩"
        },
        {
            src: "music/太坦白.mp3",
            title: "太坦白—李荣浩"
        },
        {
            src: "music/I Can’t Make You Love Me.mp3",
            title: "I Can’t Make You Love Me—Lex Land"
        },
        {
            src: "music/爱情.mp3",
            title: "爱情—莫文蔚"
        },
        {
            src: "music/爱着爱着就永远.mp3",
            title: "爱着爱着就永远—田馥甄"
        },
        {
            src: "music/缘尽世间.mp3",
            title: "缘尽世间—SNH48"
        },
        {
            src: "music/正义之手.mp3",
            title: "正义之手—SNH48"
        },
        {
            src: "music/错过.mp3",
            title: "错过—梁咏琪"
        },
        {
            src: "music/匆匆那年.mp3",
            title: "匆匆那年—王菲"
        },
        {
            src: "music/看淡.mp3",
            title: "看淡—田馥甄"
        },
        {
            src: "music/奇妙能力歌.mp3",
            title: "奇妙能力歌—陈粒"
        },
        {
            src: "music/小幸运.mp3",
            title: "小幸运—田馥甄"
        }
    ];

    var musiclist = document.getElementById("music-list");
    initList();

    //初始化歌曲列表
    function initList() {
        var html = '', s;
        for (var i = 0; i < playList.length; i++) {
            s = playList[i];
            html += '<li><span>' + s.title + '</span>' +
                '<a href="javascript:;" title="下载"><img src="image/download.png" ></a>' +
                '<a href="javascript:;" title="收藏"><img src="image/xihun.png" ></a>' +
                '<a href="javascript:;" title="播放"><audio controls class="player_audio"  onplay="myFunction(this)" music-src="' + s.src + '"  ></audio></a>' +
                '</li>';
        }
        musiclist.innerHTML = html;
    }


}

function myFunction(ob) {
    var audio = ob;
    if ("" == audio.src) {
        audio.src = audio.getAttribute("music-src");
    }
    audio.play();
}


//$(document).ready(function(){
//
//});

