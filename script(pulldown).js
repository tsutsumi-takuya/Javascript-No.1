
var lang = document.querySelector('html').lang;

var opt;
if(lang === 'ja'){
	opt = document.querySelector('option[value="index(japanese).html"]');
}
else if(lang === 'en'){
	opt = document.querySelector('option[value="index(english).html"]');
}
else if(lang === 'zh'){
	opt = document.querySelector('option[value="index(chinese).html"]');
}

opt.selected = true;

document.getElementById('form').select.onchange = function(){ // 'onchange'はフォームに入力された内容が変更された時に発生
	location.href = document.getElementById('form').select.value; // 'location.href'はURLを書き換えそのページに遷移する
}