var select_prefecture = null;

jQuery(document).ready(function(){
  if(jQuery("#prefecture_code").val() != undefined){
    select_prefecture = jQuery("#prefecture_code").val();
  }
  setHome4uCityOptionsSync();
  jQuery("select[name='home4u_town']").val("0");
  jQuery("select[name='home4u_bukken']").val("0");
});

function submitHome4uAreaForm(obj){
    formId = obj.id;
    jQuery("#" + formId + " [name='prefecture_not_selected_error']").hide();
    jQuery("#" + formId + " [name='city_not_selected_error']").hide();

    if(jQuery("#" + formId + " [name='home4u_prefecture']").val() != 0 && jQuery("#" + formId + " [name='home4u_city']").val() != 0){
        var prefecture = jQuery("#" + formId + " [name='home4u_prefecture']").val();
        var city = jQuery("#" + formId + " [name='home4u_city']").val();
        var url = '/sell/input/'+ prefecture + '/' + city;
        var bt = jQuery("#" + formId + " [name='bt']").val();
        if (bt) url += '?bt=' + bt;
        location.href=url;
    }else if(jQuery("#" + formId + " [name='home4u_prefecture']").val() == 0){
        jQuery("#" + formId + " [name='prefecture_not_selected_error']").show();
    }else if(jQuery("#" + formId + " [name='home4u_prefecture']").val() > 0 && jQuery("#" + formId + " [name='home4u_city']").val() == 0){
        if (jQuery("#" + formId + " [name='unsupported_area_error']").css("display") != 'block') {
            jQuery("#" + formId + " [name='city_not_selected_error']").show();
        }
    }
    return false;
}

function submitHome4uAreaFormForStock(obj){
    formId = obj.id;
    jQuery("#" + formId + " [name='prefecture_not_selected_error']").hide();
    jQuery("#" + formId + " [name='city_not_selected_error']").hide();

    if (jQuery("#" + formId + " [name='prefecture_code']").val() != 0 && jQuery("#" + formId +  " [name='city_code']").val() != 0 && jQuery("#" + formId +  " [name='town_code']").val() != 0) {
        var prefecture = jQuery("#" + formId +  " [name='prefecture_code']").val();
        var city = jQuery("#" + formId +  " [name='city_code']").val();
        var town = jQuery("#" + formId +  " [name='town_code']").val();
        town = town.slice(0,3)
        var url = '/sell/input/'+ prefecture + '/' + city + '?town=' + town;
        var bt = jQuery("#" + formId + " [name='bt']").val();
        if (bt) url += '&bt=' + bt;
        location.href=url;
    }

    return false;
}

function submitHome4uPostalCodeForm(obj){
    formId = obj.id;
    jQuery("#" + formId + " [name='postalcode_not_selected_error']").hide();

    if(jQuery("#" + formId + " [name='zip']").val() != 0 ){
        var zip = jQuery("#" + formId + " [name='zip']").val();
        var url = '/sell/selectcity' + '?zip=' + zip;
        location.href=url;
    }else if(jQuery("#" + formId + " [name='zip']").val() == 0){
        jQuery("#" + formId + " [name='postalcode_not_selected_error']").show();
    }
    return false;
}

function submitHome4uAreaFormFooter(obj){
    formId = obj.id;
    jQuery("#" + formId + " [name='prefecture_not_selected_footer_error']").hide();
    jQuery("#" + formId + " [name='city_not_selected_footer_error']").hide();

    if(jQuery("#" + formId + " [name='home4u_prefecture_footer']").val() != 0 && jQuery("#" + formId + " [name='home4u_city_footer']").val() != 0){
        var prefecture = jQuery("#" + formId + " [name='home4u_prefecture_footer']").val();
        var city = jQuery("#" + formId + " [name='home4u_city_footer']").val();
        var url = '/sell/input/'+ prefecture + '/' + city ;
        var bt = jQuery("#" + formId + " [name='bt']").val();
        if (bt) url += '?bt=' + bt;
        location.href=url;
    }else if(jQuery("#" + formId + " [name='home4u_prefecture_footer']").val() == 0){
        jQuery("#" + formId + " [name='prefecture_not_selected_footer_error']").show();
    }else if(jQuery("#" + formId + " [name='home4u_prefecture_footer']").val() > 0 && jQuery("#" + formId + " [name='home4u_city_footer']").val() == 0){
        if (jQuery("#" + formId + " [name='unsupported_area_error']").css("display") != 'block') {
            jQuery("#" + formId + " [name='city_not_selected_footer_error']").show();
        }
    }
    return false;
}



function setHome4uCityOptions(obj){
    formId = obj.form.id;

    jQuery("#" + formId + " [name='prefecture_not_selected_error']").hide();
    jQuery("#" + formId + " [name='city_not_selected_error']").hide();
    jQuery("#" + formId + " [name='unsupported_area_error']").hide();
    jQuery("#" + formId + " [name='home4u_city']").removeAttr("disabled");

    var user=jQuery("#" + formId + " [name='user']").val();
    var area=jQuery("#" + formId + " [name='area']").val();
    var prefecture = jQuery("#" + formId + " [name='home4u_prefecture']").val();
    var version=jQuery("#" + formId + " [name='version']").val();

    jQuery("#" + formId + " [name='home4u_city']").empty();
    $options = new Array();
    $options.push('<option value="0">市区町村を選択</option>');

    var current_url = location.href;

    var api_url;
    api_url =  "https://common.home4u.jp/api/areainfo.php";
    api_url = api_url + "?user=" + user;
    api_url = api_url + "&area=" + area;
    api_url = api_url + "&prefecture=" + prefecture;
    api_url = api_url + "&version=" + version;
    api_url = api_url + "&callback=?";
    console.log(api_url);

    jQuery.getJSON(api_url,function(data){
        for(var key in data){
            if (key=="info") {
                for(var key2 in data[key]){
                    if (key2 == "code" && data[key][key2] == "401") {
                        jQuery("#" + formId + " [name='unsupported_area_error']").show();
                        jQuery("#" + formId + " [name='home4u_city']").attr("disabled","disabled");
                    }
                }
                break;
            }
            $options.push('<option value="' + key + '" >' + data[key] + '</option>');
        }
        jQuery("#" + formId + " [name='home4u_city']").append($options.join(''));
        jQuery("#" + formId + " [name='home4u_city']").focus();
    }).fail(function(jqXHR, textStatus, errorThrown) {
        jQuery("#" + formId + " [name='home4u_city']").append($options.join(''));
        jQuery("#" + formId + " [name='home4u_city']").focus();
    });
}

function setHome4uCityOptions_footer(obj){
    formId = obj.form.id;

    jQuery("#" + formId + " [name='prefecture_not_selected_footer_error']").hide();
    jQuery("#" + formId + " [name='city_not_selected_footer_error']").hide();
    jQuery("#" + formId + " [name='unsupported_area_error']").hide();
    jQuery("#" + formId + " [name='home4u_city_footer']").removeAttr("disabled");

    var user=jQuery("#" + formId + " [name='user']").val();
    var area=jQuery("#" + formId + " [name='area']").val();
    var prefecture = jQuery("#" + formId + " [name='home4u_prefecture_footer']").val();
    var version=jQuery("#" + formId + " [name='version']").val();

    jQuery("#" + formId + " [name='home4u_city_footer']").empty();
    $options = new Array();
    $options.push('<option value="0">市区町村を選択</option>');

    var current_url = location.href;

    var api_url;
    api_url = "https://common.home4u.jp/api/areainfo.php";
    api_url = api_url + "?user=" + user;
    api_url = api_url + "&area=" + area;
    api_url = api_url + "&prefecture=" + prefecture;
    api_url = api_url + "&version=" + version;
    api_url = api_url + "&callback=?";
    console.log(api_url);

    jQuery.getJSON(api_url,function(data){
        for(var key in data){
            if (key=="info") {
                for(var key2 in data[key]){
                    if (key2 == "code" && data[key][key2] == "401") {
                        jQuery("#" + formId + " [name='unsupported_area_error']").show();
                        jQuery("#" + formId + " [name='home4u_city_footer']").attr("disabled","disabled");
                    }
                }
                break;
            }
            $options.push('<option value="' + key + '" >' + data[key] + '</option>');
        }
        jQuery("#" + formId + " [name='home4u_city_footer']").append($options.join(''));
        jQuery("#" + formId + " [name='home4u_city_footer']").focus();
    }).fail(function(jqXHR, textStatus, errorThrown) {
        jQuery("#" + formId + " [name='home4u_city_footer']").append($options.join(''));
        jQuery("#" + formId + " [name='home4u_city_footer']").focus();
    });
}

//項目同期用
function setHome4uCityOptionsSync(obj){
  var objList = jQuery("select[name^=home4u_prefecture]");
  if(objList.length == 0) return;
  if(obj != undefined){
    select_prefecture = obj.value;
    jQuery("#prefecture_code").val(obj.value);
    footerStr = obj.name.match(/footer/i) ? "_footer" : "";
  }
  for(var i=0; i<objList.length; i++){
    setDefaultPrefecture(objList[i]);
  }
  var formIdList    = new Array();
  var footerStrList = new Array();
  for(var i=0; i<objList.length; i++){
    formIdList[i]    = objList[i].form.id;
    objName          = objList[i].name;
    footerStrList[i] = (objName.match(/footer/i)) ? "_footer" : "";
    jQuery("#" + formIdList[i] + " [name='prefecture_not_selected" + footerStrList[i] + "_error']").hide();
    jQuery("#" + formIdList[i] + " [name='city_not_selected" + footerStrList[i] + "_error']").hide();
    jQuery("#" + formIdList[i] + " [name='unsupported_area_error']").hide();
    jQuery("#" + formIdList[i] + " [name='home4u_city" + footerStrList[i] + "']").removeAttr("disabled");
    jQuery("#" + formIdList[i] + " [name='home4u_city" + footerStrList[i] + "']").empty();
  }
  var user        = jQuery("#" + formIdList[0] + " [name='user']").val();
  var area        = jQuery("#" + formIdList[0] + " [name='area']").val();
  var prefecture  = jQuery("#" + formIdList[0] + " [name='home4u_prefecture" + footerStrList[0] + "']").val();
  var version     = jQuery("#" + formIdList[0] + " [name='version']").val();
  var cityCode    = $("#city_code").val();
  var selectStr   = "";
  var tmpOptions  = new Array();
  var current_url = location.href;

  var api_url;
  api_url = "https://common.home4u.jp/api/areainfo.php";
  api_url = api_url + "?user=" + user;
  api_url = api_url + "&area=" + area;
  api_url = api_url + "&prefecture=" + prefecture;
  api_url = api_url + "&version=" + version;
  api_url = api_url + "&callback=?";

  jQuery.getJSON(api_url,function(data){
    for(var key in data){
      if (key=="info") {
        for(var key2 in data[key]){
          if (key2 == "code" && data[key][key2] == "401") {
            for(var i=0; i<objList.length; i++){
              jQuery("#" + formIdList[i] + " [name='unsupported_area_error']").show();
              jQuery("#" + formIdList[i] + " [name='home4u_city" + footerStrList[i] + "']").attr("disabled","disabled");
            }
          }
        }
        break;
      }
      if(key == cityCode){
        tmpOptions.push('<option value="' + key + '" selected >' + data[key] + '</option>');
        selectStr = data[key];
      }else{
        tmpOptions.push('<option value="' + key + '" >' + data[key] + '</option>');
      }
    }
    for(var i=0; i<objList.length; i++){
      var options = tmpOptions.slice();
      var defaultStr = (footerStrList[i] != "") ? "市区町村を選択" : "市区町村を選択";
      var setStr = (selectStr == "") ? defaultStr : selectStr;
      options.unshift('<option value="0">' + defaultStr + '</option>');
      jQuery("#" + formIdList[i] + " [name='home4u_city" + footerStrList[i] + "']").append(options.join(''));
      jQuery("#" + formIdList[i] + " .custom-select-home4u_city" + footerStrList[i] + " .select-value")[0].innerHTML = setStr;
    }
    if(obj != undefined){
      jQuery("#" + obj.form.id + " [name='home4u_city" + footerStr + "']").focus();
    }
  }).fail(function(jqXHR, textStatus, errorThrown) {
    for(var i=0; i<objList.length; i++){
      var options    = tmpOptions.slice();
      var defaultStr = (footerStrList[i] != "") ? "市区町村を選択" : "市区町村を選択";
      options.unshift('<option value="0">' + defaultStr + '</option>');
      jQuery("#" + formIdList[i] + " [name='home4u_city" + footerStrList[i] + "']").append(options.join(''));
      jQuery("#" + formIdList[i] + " .custom-select-home4u_city" + footerStrList[i] + " .select-value")[0].innerHTML = defaultStr;
    }
    if(obj != undefined){
      jQuery("#" + obj.form.id + " [name='home4u_city" + footerStr + "']").focus();
    }
  });
}

//都道府県の選択値を設定する
function setDefaultPrefecture(obj){
  var formId      = obj.form.id;
  var footerStr   = obj.name.match(/footer/i) ? "_footer" : "";
  var selector    = "#" + formId + " select[name='home4u_prefecture" + footerStr + "']";
  var optionsList = $(selector)[0].options;
  for(var i=0; i<optionsList.length; i++){
    if(select_prefecture == null && i == 0){
      jQuery(selector)[0].options[i].selected = true;
      jQuery("#" + obj.form.id + " .custom-select-home4u_prefecture" + footerStr + " .select-value")[0].innerHTML = jQuery(selector)[0].options[i].text;
      break;
    }else if(optionsList[i].value == select_prefecture){
      jQuery(selector)[0].options[i].selected = true;
      jQuery("#" + obj.form.id + " .custom-select-home4u_prefecture" + footerStr + " .select-value")[0].innerHTML = jQuery(selector)[0].options[i].text;
      break;
    }
  }
  if( typeof changeAccentList == "function" ){
    if( obj.getAttribute("custom-accent") != undefined ){
      changeAccentList(obj.getAttribute("custom-accent"));
    }
  }
}

//市区町村のページ内同期
function setHome4uSelectSync(obj,select_name){
  var objList = jQuery("select[name^=" + select_name + "]");
  if(objList.length == 0) return;
  jQuery("#city_code").val(obj.value);
  for(var i=0; i<objList.length; i++){
    setDefaultPulldown(objList[i],select_name,obj.value);
  }
  for(var i=0; i<objList.length; i++){
    var formId    = objList[i].form.id;
    var objName   = objList[i].name;
    var footerStr = (objName.match(/footer/i)) ? "_footer" : "";
    jQuery("#" + formId + " [name='prefecture_not_selected" + footerStr + "_error']").hide();
    jQuery("#" + formId + " [name='city_not_selected" + footerStr + "_error']").hide();
    jQuery("#" + formId + " [name='unsupported_area_error']").hide();
  }
}

//市区町村の選択値を設定する
function setDefaultPulldown(obj,select_name,select_value){
  var formId      = obj.form.id;
  var footerStr   = obj.name.match(/footer/i) ? "_footer" : "";
  var selector    = "#" + formId + " select[name='" + select_name + footerStr + "']";
  var optionsList = $(selector)[0].options;
  for(var i=0; i<optionsList.length; i++){
    if(select_value == null && i == 0){
      jQuery(selector)[0].options[i].selected = true;
      jQuery("#" + obj.form.id + " .custom-select-" + select_name + footerStr + " .select-value")[0].innerHTML = jQuery(selector)[0].options[i].text;
      break;
    }else if(optionsList[i].value == select_value){
      jQuery(selector)[0].options[i].selected = true;
      jQuery("#" + obj.form.id + " .custom-select-" + select_name + footerStr + " .select-value")[0].innerHTML = jQuery(selector)[0].options[i].text;
      break;
    }
  }
  if( typeof changeAccentList == "function" ){
    if( obj.getAttribute("custom-accent") != undefined ){
      changeAccentList(obj.getAttribute("custom-accent"));
    }
  }
}
