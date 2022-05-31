//オブジェクトは可変です。
//6.2 オブジェクトの生成
//6.2.1　オブジェクトリテラル　コード内でオブジェクトを生成するにはオブジェクトリテラルを使うのが最も簡単

let empty = {};  //プロパティを持たないオブジェクトを生成
let point = { x: 2, y: 0}; //数値プロパティを２つ持つオブジェクト
let p2 = { x:point.x,y:point.y+1}  //もっと複雑な値
let book = {
    "main title": "JavaScript", //プロパティ名に空白やハイフンが含まれるので
    "sub-title": "The Definitive Guide",    //文字列リテラルを使う
    for: "all audiences",   //forは予約語だが、引用符は必要ない。
    author: {               //このプロパティの値自体が
        firstname:"David",  //オブジェクト
        surname:"Flanagan"
    }
};

let x = p2;
x.x = 5;

console.log(p2.x);
//可変とはこういうことか！

//6.2.2 newを使ったオブジェクトの生成
//new演算子を使うとオブジェクトを生成し初期化できる。newキーワードの後ろには関数呼び出し式を記述する。こういう関数をコンストラクタと呼ぶ。
//このコンストラタで、新たに生成したオブジェクトを初期化する。
//↓が組み込みコンストラクタ。独自に定義して新たに生成することができるし、それが普通。
let o = new Object();   // 空のオブジェクトを生成する。{}と同じ
let a = new Array();    // 空の配列を生成する。[]と同じ
let d = new Date();     // 現在時刻を表すDateオブジェクトを生成する
let r = new Map();      // キー/値マッピング用にMapオブジェクトを生成する。

//基本的に地の文よりコードを優先して見ていくことにする。飛ばし読み。

//6.2.4 Object.create

let o1 = Object.create({x:1,y:2});  // o1はプロパティxとyを継承する。
console.log(o1.x + o1.y);  // =>3

//nullを渡せば、プロトタイプを持たないオブジェクトを生成できる。しかし何も継承しない。演算子も動かない。

let o2 = Object.create(null); // o2はプロパティやメソッドを継承しない。

//空のオブジェクトを生成したい場合は、Object.prototypeを引数として渡す。

let o3 = Object.create(Object.prototype);   // o3は{}やnew Object()で生成したものと同じ。

let o_1 = {x:"don't change this value"};

console.log(book.author.surname);
console.log(book["main title"]);
console.log(book.for);