/**
 * Created by huahua on 2016/6/5.
 */
$(function () {
  $(".leftnavheader").mouseover(function () {
    $(".leftnavlist").show()
    $(".leftnavheader span").removeClass().addClass("glyphicon glyphicon-menu-up")
  });
  $(".leftnavheader").mouseout(function () {
    $(".leftnavlist").hide()
    $(".leftnavheader span").removeClass().addClass("glyphicon glyphicon-menu-down")
  });
  $(".leftnavlist").mouseover(function () {
    $(".leftnavlist").show()
    $(".leftnavheader span").removeClass().addClass("glyphicon glyphicon-menu-up")
  });
  $(".leftnavlist").mouseout(function () {
    $(".leftnavlist").hide()
    $(".leftnavheader span").removeClass().addClass("glyphicon glyphicon-menu-down")
  });
});
