
var lang = document.querySelector('html').lang; // 'document.querySelector('CSSセレクタ')'

var opt;

if(lang === 'ja'){ // 日本語ページの場合、変数langには'ja'が入っている為、<option value="index(japanese).html">日本語</option>
	opt = document.querySelector('option[value="index(japanese).html"]');
}
else if(lang === 'en'){ // 英語ページの場合、変数langには'en'が入っている為、<option value="index(english).html">English</option>
	opt = document.querySelector('option[value="index(english).html"]');
}
else if(lang === 'zh'){ // 中文ページの場合、変数langには'zh'が入っている為、<option value="index(chinese).html">中文</option>
	opt = document.querySelector('option[value="index(chinese).html"]');
}

switch(lang){

}

opt.selected = true; // selected属性,check属性はその属性に'true'を代入

document.getElementById('form').select.onchange = function(){ // 'onchange'はフォームに入力された内容が変更された時に発生
	location.href = document.getElementById('form').select.value; // 'location.href'はURLを書き換えそのページに遷移する
}