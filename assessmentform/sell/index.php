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
	<option value="14">神奈川県</option>
	<option value="11">埼玉県</option>
	<option value="12">千葉県</option>
	<option value="10">群馬県</option>
	<option value="9">栃木県</option>
	<option value="8">茨城県</option>
</optgroup>

<optgroup label="北海道エリア">
	<option value="1">北海道</option>
</optgroup>

<optgroup label="東北エリア">
	<option value="2">青森県</option>
	<option value="3">岩手県</option>
	<option value="4">宮城県</option>
	<option value="5">秋田県</option>
	<option value="6">山形県</option>
	<option value="7">福島県</option>
</optgroup>

<optgroup label="甲信越エリア">
	<option value="15">新潟県</option>
	<option value="19">山梨県</option>
	<option value="20">長野県</option>
</optgroup>

<optgroup label="北陸エリア">
	<option value="16">富山県</option>
	<option value="17">石川県</option>
	<option value="18">福井県</option>
</optgroup>

<optgroup label="東海エリア">
	<option value="23">愛知県</option>
	<option value="22">静岡県</option>
	<option value="21">岐阜県</option>
	<option value="24">三重県</option>
</optgroup>

<optgroup label="関西エリア">
	<option value="27">大阪府</option>
	<option value="28">兵庫県</option>
	<option value="25">滋賀県</option>
	<option value="26">京都府</option>
	<option value="29">奈良県</option>
	<option value="30">和歌山県</option>
</optgroup>

<optgroup label="中国エリア">
	<option value="33">岡山県</option>
	<option value="34">広島県</option>
	<option value="31">鳥取県</option>
	<option value="32">島根県</option>
	<option value="35">山口県</option>
</optgroup>

<optgroup label="四国エリア">
	<option value="37">香川県</option>
	<option value="38">愛媛県</option>
	<option value="39">高知県</option>
	<option value="36">徳島県</option>
</optgroup>

<optgroup label="九州・沖縄エリア">
	<option value="40">福岡県</option>
	<option value="41">佐賀県</option>
	<option value="42">長崎県</option>
	<option value="43">熊本県</option>
	<option value="44">大分県</option>
	<option value="45">宮崎県</option>
	<option value="46">鹿児島県</option>
	<option value="47">沖縄県</option>
</optgroup>
</select>
</dd>

<dd class="sellKvAssFormSelect">
<select name="home4u_city" class="kvAssSelect" data-custom-select custom-accent="1">
<option value="0" selected="selected">市区町村を選択</option>
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
