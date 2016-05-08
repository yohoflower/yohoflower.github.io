[1mdiff --git a/demo/relax/js/relax.js b/demo/relax/js/relax.js[m
[1mindex e8aaa31..dd7adaf 100644[m
[1m--- a/demo/relax/js/relax.js[m
[1m+++ b/demo/relax/js/relax.js[m
[36m@@ -125,35 +125,27 @@[m [mwindow.onload = function () {[m
         }[m
     ];[m
 [m
[31m-    var musiclist = document.getElementById("music-list");[m
[31m-    //var musicli = document.createElement("li");[m
[31m-    //[m
[31m-    //musiclist.appendChild(musicli);[m
[31m-[m
[32m+[m[32m    var musiclist = $("music-list");[m
     initList();[m
 [m
     //生成listhtml[m
 [m
     function initList() {[m
[31m-        var html = '', s;[m
[32m+[m[32m        var html="";[m
         for (var i = 0; i < playList.length; i++) {[m
[31m-            s = playList[i];[m
[31m-            html += '<li><span>' + s.title + '</span>' +[m
[31m-                '<a href="javascript:;" title="下载"><img src="image/download.png" ></a>' +[m
[31m-                '<a href="javascript:;" title="收藏"><img src="image/xihun.png" ></a>' +[m
[31m-                '<a href="javascript:;" title="播放"><audio controls class="player_audio"  onplay="myFunction(this)" data-src="' + s.src + '"  ></audio></a>' +[m
[31m-                '</li>';[m
[32m+[m[32m            var s = playList[i];[m
[32m+[m[32m            html+= "<li><span>" + s.title + "</span>" +[m
[32m+[m[32m                "<a href='javascript:;' title='下载'><img src='image/download.png'></a>" +[m
[32m+[m[32m                "<a href='javascript:;' title='收藏'><img src='image/xihun.png' ></a>" +[m
[32m+[m[32m                "<a href='javascript:;' title='播放'><audio controls class='player_audio'  onplay='myFunction(this)' data-src=' + s.src + ' ></audio></a></li>";[m
         }[m
[31m-        //songListHeight = len * 40;[m
         musiclist.innerHTML = html;[m
     }[m
[31m-}[m
[31m-[m
[31m-function myFunction(ob) {[m
[31m-    var audio = ob;[m
[31m-    if ("" == audio.src) {[m
[31m-        audio.src = $(audio).attr("data-src");[m
[32m+[m[32m    function myFunction(ob) {[m
[32m+[m[32m        var audio = ob;[m
[32m+[m[32m        if ("" == audio.src) {[m
[32m+[m[32m            audio.src = $(audio).attr("data-src");[m
[32m+[m[32m        }[m
     }[m
[31m-    audio.play();[m
[32m+[m[32m}[m
 [m
[31m-}[m
\ No newline at end of file[m
