// Hello worldの表示
console.log("Hello World");
// 数値での計算を行う為、クォーテーションは付けない
console.log(5+2);
// 文字列の表示を行う為、クォーテーションは付ける
console.log("5+2")
// 掛け算
console.log(3*7);
// 割り算
console.log(6/3);
// 余りの表示
console.log(7%2);
// 文字同士の連結
console.log("A"+"B"+"C");
// 変数の表示
let name = "john";
console.log(name);
// 文字列での表示
console.log("name");
// 変数と文字列の連結
let name = "鈴木";
console.log(name+"さん");
// 変数と文字の連結
let number = 11;
console.log(number+5);
// 変数のメリット
let text = "Goodmorning";
console.log("Mr.suzuki"+text);
console.log("Mr.sato"+text);
console.log("Mr.tanaka"+text);
// 変数の更新
let number = 7;
number = 9;
number = 10;
// 変数の更新と足し算
let number = 2;
number = number+3;
// 省略形の書き方
x = x+10;
x += 10;
// 定数の定義(constは定数,letは変数)
const name = "john";
console.log(name);
name = "kate"; // 定数の為、変更をする事が出来ない
// テンプレートリテラル
const name = "にんじゃわんこ";
const age = 14;
console.log(`${name}は${age}歳です`);
// if文の定義
const number = 12;
if(number>10){
	console.log("numberは10より大きいです");
}
// 真偽値の定義
const number = 12;
console.log(number < 30); // true
console.log(number <= 12); // true
console.log(number > 12); // false
// 比較演算子
const number = 12;
console.log(number === 12); // true
const name = "john";
console.log(name !== "john"); // false
// 条件分岐
const number = 7;
if(number>10){
	console.log("numberは10より大きいですより大きいです");
}
else{
	console.log("numberは10以下です");
}
// 条件分岐
const number = 7;
if(number<10){
	console.log("numberは10より大きいです");
}
else if(number>5){
	console.log("numberは5より大きいです");
}
else{
	console.log("numberは5以下です");
}
// 且つ
const number = 31;
if(number>=10 && number<100){
	console.log("numberは2桁です");
}
// switch文
const color = "赤";
switch(color){
	case "赤": // (注意)セミコロン
	console.log("ストップ");
	break; // 終了の命令

	case "黄色":
	console.log("要注意");
	break;
}