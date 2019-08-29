$("document").ready(function(){
	$(".theTarget").skippr();
});//Skipprの初期化

// オプションを指定してSkipprの実行
$(".theTarget").skippr({
	transition : 'fade',// スライドショーの変化 ("fade" or "slide")
	speed : 1000,  // 変化に係る時間(ミリ秒)
	easing : 'easeOutQuart', // easingの種類
	nvaType : 'block',// ナビゲーションの形("block" or "bubble")
	childrenElementType : 'div', // 子要素の種類("div" or "img")
	arrows : true,   // ナビゲーション矢印の表示(trueで表示)
	autoPlay : false, // スライドショーの自動再生(falseで自動再生なし)
	autoPlayDuration : 5000,  // 自動再生時のスライド切替間隔(ミリ秒)
	keyboardOnAlways : true,  // キーボードの矢印キーによるスライド送りの設定(trueで有効)
	hidePrevious : false  // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
});