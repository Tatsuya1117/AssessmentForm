function getScript(source, callback) {
	var script = document.createElement('script');
	var prior = document.getElementsByTagName('script')[0];
	script.async = 1;

	script.onload = script.onreadystatechange = function( _, isAbort ) {
		if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
			script.onload = script.onreadystatechange = null;
			script = undefined;

			if(!isAbort) { if(callback) callback(); }
		}
	};

	script.src = source;
	prior.parentNode.insertBefore(script, prior);
}

/**
 * URL解析して、クエリ文字列を返す
 * @returns {Array} クエリ文字列
 */
function getUrlVars() {
    var vars = [], max = 0, hash = "", array = "";
    var url = window.location.search;

    //?を取り除くため、1から始める。複数のクエリ文字列に対応するため、&で区切る
    hash  = url.slice(1).split('&');
    max = hash.length;
    for (var i = 0; i < max; i++) {
        array = hash[i].split('=');    //keyと値に分割。
        vars.push(array[0]);    //末尾にクエリ文字列のkeyを挿入。
        vars[array[0]] = array[1];    //先ほど確保したkeyに、値を代入。
    }

    return vars;
}

(function (){
	var val = getUrlVars();

	//var js_url = "https://shub-dev-h4u.ndss-websol.com/smhb/Smart/js/";
	var js_url = "https://smhb.home4u.jp/smhb/Smart/js/";
	if(val.lastIndexOf('sbscr_key') >= 0){
		js_url = js_url + val['sbscr_key'];
	}

	getScript(js_url);
})();
