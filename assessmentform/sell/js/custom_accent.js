var selector = "[custom-accent]";
var ca = "custom-accent";

window.onload = function(){
  $(selector).each(function(){
    changeAccentList($(this).attr(ca));
  });
};

function changeAccentList(value){
  var sel_flag = false;
  var img_flag = false;
  $("[custom-accent='" + value + "']").each(function(){
    if ( (img_flag || !sel_flag) && ($(this).attr("type") == "image" || $(this)[0].tagName == "IMG")) {
      sel_flag = true;
      img_flag = true;
      $(this).addClass("blinking-img");
    } else if (!sel_flag && $(this).prop("tagName") == "BUTTON") {
      sel_flag = true;
      $(this).addClass("blinking-button");
      $(this).parent().addClass("blinking-button");
    } else if (!sel_flag && ($(this)[0].value == "0" || $(this)[0].value == "")) {
      sel_flag = true;
      $(this).parent().addClass("blinking");
    } else {
      $(this).removeClass("blinking-button blinking-img");
      $(this).parent().removeClass("blinking blinking-button");
    }
  });
}

$(document).on('change',selector,function(){
  var name = $(this).attr("name");
  if(name.match(/home4u_prefecture/i)){
    $("select[name^='home4u_city']").val("0");
    $("select[name^='home4u_town']").val("0");
    setHome4uCityOptionsSync($(this)[0]);
  }else if(name.match(/home4u_city/i)){
    $("select[name^='home4u_town']").val("0");
    if(typeof setHome4uTownOptionsSync == "function" && $("select[name='home4u_town']").length != 0){
      setHome4uTownOptionsSync($(this)[0]);
    }else{
      setHome4uSelectSync($(this)[0],"home4u_city");
    }
  }else if(name.match(/home4u_town/i)){
    setHome4uSelectSync($(this)[0],"home4u_town");
  }else if(name.match(/home4u_bukken/i)){
    setHome4uSelectSync($(this)[0],"home4u_bukken");
  }else{
    changeAccentList($(this).attr(ca));
  }
});

$(function(){
  $(".over-img").mouseover(function(){
    var src = $(this).attr("over-src");
    $(this).attr("src",src);
    $(this).siblings().each(function(){
      src = $(this).attr("over-src");
      $(this).attr("src",src);
    });
  }).mouseout(function(){
    var src = $(this).attr("out-src");
    $(this).attr("src",src);
    $(this).siblings().each(function(){
      src = $(this).attr("out-src");
      $(this).attr("src",src);
    });
  });
});
