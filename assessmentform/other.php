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