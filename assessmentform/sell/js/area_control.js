// バリデートと制御に関わる関数
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