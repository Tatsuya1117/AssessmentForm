<?php
//h()関数(エスケープ処理のユーザー定義関数)を宣言
function h($str) {
	return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
if (isset($_POST['text_input'])) {
	//$_POST['text_input']が既に定義されている(値が送信されている)場合
	$text_input = h($_POST['text_input']);
	} else {
		//値がまだ送信されていない(定義されていない)場合
		$text_input = "";
	}
?>
<!DOCTYPE html>
<html lang="ja" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<meta name="keywords" content="売却査定,一括査定,不動産査定,無料査定,家を売る,不動産売却,不動産売買,土地,マンション,アパート,戸建,ビル">
<meta name="description" content="">
<meta name="robots" content="index,follow" />

<!-- 重複コンテンツに配慮し、正しいページはどれか伝えるための表記 -->
<link rel="canonical" href="https://example/">
<!-- コンテンツを先読みさせるために必要な表記 -->
<link rel="preload" href="/sell/img/sell_kv@sp.png" as="image">

<meta name="author" content="株式会社何ちゃら">
<meta name="copyright" content="株式会社何ちゃら">

<title>【テスト不動産売却査定なら】全国対応無料一括査定サイト - 不動産売却テスト</title>

<script src="/sell/js/jquery.min.js"></script>
<!-- cssの読み込み -->
<link rel="stylesheet" href="/sell/css/style_top_fv.css" />

</head>

<body id="top">
<div id="wrap">

<!-- ▽▽▽▽▽ contents ▽▽▽▽▽ -->
<article id="contents">
<br>
<br>
<br>
<br>
<br>
<br>
<div class="container">

<!-- ▼CTA Large1 -->Ï
<section class="sellKvAssForms">
<dl class="sellKvAssFormBox">
<dt class="sellKvAssTtl"><span class="sellKvAssTtlLbl">カンタン1分入力</span><span class="sellKvAssTtlTxt">物件の住所を選択して査定依頼スタート！</span></dt>
<dd class="sellKvAssFormAddr">
<dl class="sellKvAssForm">
<form id="assessForm" action="next.php" method="post">
<!-- バリデーションしたい場合は以下を有効化　<form id="assessForm" onsubmit="return submitHome4uAreaForm(this)"> -->
<dd class="sellKvAssFormSelect">
<select name="home4u_prefecture" class="kvAssSelect" data-custom-select custom-accent="1" >
<option value="0">地域を選択</option>
<optgroup label="岡山エリア">
	<option value="岡山市">岡山市</option>
	<option value="福渡">福渡</option>
	<option value="日応寺">日応寺</option>
	<option value="瀬戸内市">瀬戸内市</option>
	<option value="玉野市">玉野市</option>
</optgroup>
<optgroup label="倉敷エリア">
	<option value="倉敷市">倉敷市</option>
	<option value="総社市">総社市</option>
	<option value="早島">早島</option>
	<option value="児島">児島</option>
</optgroup>
<optgroup label="井笠エリア">
	<option value="井原市">井原市</option>
	<option value="矢掛市">矢掛市</option>
	<option value="笠岡市">笠岡市</option>
	<option value="浅口市">浅口市</option>
	<option value="里庄市">里庄市</option>
</optgroup>
<optgroup label="高梁エリア">
	<option value="高梁市">高梁市</option>
	<option value="高梁">高梁</option>
	<option value="陣山">陣山</option>
</optgroup>
<optgroup label="新見エリア">
	<option value="新見市">新見市</option>
	<option value="新見">新見</option>
	<option value="千屋">千屋</option>
</optgroup>
<optgroup label="真庭エリア">
	<option value="真庭市">真庭市</option>
	<option value="上長田">上長田</option>
	<option value="新庄村">新庄村</option>
	<option value="久世">久世</option>
	<option value="下呰部">下呰部</option>
</optgroup>
<optgroup label="津山エリア">
	<option value="津山市">津山市</option>
	<option value="美咲町">美咲町</option>
	<option value="久米南町">久米南町</option>
	<option value="鏡野町">鏡野町</option>
</optgroup>
<optgroup label="勝英エリア">
	<option value="奈義町">奈義町</option>
	<option value="西粟倉村">西粟倉村</option>
	<option value="勝央町">勝央町</option>
	<option value="美作市">美作市</option>
</optgroup>
<optgroup label="東備エリア">
	<option value="備前市">備前市</option>
	<option value="和気町">和気町</option>
	<option value="赤磐市">赤磐市</option>
</optgroup>
<optgroup label="他県エリア">
	<option value="鳥取県">鳥取県</option>
	<option value="広島県">広島県</option>
	<option value="島根県">島根県</option>
	<option value="山口県">山口県</option>
</optgroup>
</select>
</dd>

<!-- 市区町村の選択 -->
<dd class="sellKvAssFormSelect">
<select name="home4u_city" class="kvAssSelect" data-custom-select custom-accent="1">
<option value="0" selected="selected">市区町村を選択</option>
<optgroup label="他県エリア">
	<option value="鳥取県">鳥取県</option>
	<option value="広島県">広島県</option>
	<option value="島根県">島根県</option>
	<option value="山口県">山口県</option>
</optgroup>
</select>
</dd>
<input type="hidden" name="version" value="1" />
<input type="hidden" name="area" value="0" />
<input type="hidden" name="user" value="home4u" />
<dd class="sellKvAssFormSubmit">
<div class="clearfix">
<!-- 都道府県と市区町村のバリデーター -->
<p class="sellKvAssFormETxt" name="prefecture_not_selected_error" >都道府県が選択されていません。</p>
<p class="sellKvAssFormETxt" name="city_not_selected_error" >市区町村が選択されていません。</p>
</div>

<div class="custom-accent-round">
<button type="submit" class="sellKvAssFormAddrBtn cta_btn_01_adress" custom-accent="1"><span class="sellKvAssFormSubmitMark">無料</span><span class="sellKvAssFormSubmitTxt">査定スタート</span></button>
</div>
</dd>
</form>
</dl>
</dd>

<dd class="sellKvAssFormZip">
<form id="assessForm2" onsubmit="return submitHome4uPostalCodeForm(this)">
<dl class="sellKvAssForm">
<dt class="sellKvAssFormLbl">郵便番号がわかる方はこちら</dt>
<dd class="sellKvAssFormTxt"><input type="text" name="zip" placeholder="郵便番号を入力してください"></dd>
<dd class="sellKvAssFormSubmit">
<div class="clearfix">
<p class="sellKvAssFormETxt" name="postalcode_not_selected_error">郵便番号が入力されていません。</p>
</div>
<button type="submit" class="sellKvAssFormZipBtn cta_btn_01_postal"><span class="sellKvAssFormSubmitMark">無料</span><span class="sellKvAssFormSubmitTxt">査定スタート</span></button>
</dd>
</dl>
</form>
</dd>
</dl>
</section>
<!-- ▲CTA Large1 -->
</div><!-- //wrap -->


<!-- js後読み -->
<script src="/sell/js/common.js"></script>
	<!-- <script src="/sell/js/select_area_sell.js"></script> -->
<script src="/sell/js/area_control.js"></script>
<script language="JavaScript" src="/sell/js/salesforceMA.js"></script>

</body>
</html>
