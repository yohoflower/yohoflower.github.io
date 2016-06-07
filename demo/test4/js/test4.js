/**
 * Created by huahua on 2016/6/5.
 */
$(function () {
  $(".leftnavheader").bind("click", function () {
    if ($("#hidval").val() == 0) {
      $("dl").show("slow",function(){
        $("#hidval").val(1);
      })
    } else {
      $("dl").hide("slow",function(){
        $("#hidval").val(0);
      })
    }
  })
});
