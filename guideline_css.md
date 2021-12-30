# ガイドライン CSS

担当者：伊藤

## class命名規則
[FLOCSS](https://github.com/hiloki/flocss) をベースにBEMとSMACSSをアレンジして取り入れる。

（SMACSS参考サイト）SMACSSによるCSSの設計 | CodeGrid  
https://app.codegrid.net/entry/smacss-1  
https://app.codegrid.net/entry/smacss-2

### BEM

親要素であるBlockに対して、子要素であるElementやパージョン違いを表すModifierを付与する。  
BlockとElement間は `__`（アンスコ2つ）で連結するシングルクラスとするが、Modifierは`._hoge`といったマルチクラスとする。

```
.block // 親要素
.block__element // 子要素
.block._modifier // 親要素のバージョン違い
.block__element._modifier // 子要素のバージョン違い
```

### FLOCSS

Component＝サイト内で複数回使用するモジュール  
Project＝Component以外のサイト固有のパーツ

###接頭詞

概念はPRECSSを参考にお願いします。一部アレンジしています。  
https://precss.io/ja/

| 内容  | 接頭詞 |説明|
| ------------- | ------------- |------------- |
| コンポーネント  | .c_xxx | ブロックモジュールにあたる |
| プロジェクト| .p_xxx | ユニークにあたる |
| レイアウト| .l_xxx | サイト内で共通するものにあたる |
| ユーティリティ|.u_xxx| ユーティリティクラスにあたる |
| モディファイア|._xxx| モディファイアにあたる |
| JavaScript用|#js_xxx .js_xxx| プログラムにあたる |
| WordPress block|.block_xxx| オリジナルブロックにあたる |

### 単語は省略しない

`btn`など

### class名に連番を使用しない

連番を使用するデメリット  
＝class名を見るだけでは、その機能や使用箇所を特定・想像できない。

```
// .card01と.card02それぞれの機能や使用箇所が特定・想像できない
.card01 {}
.card02 {}
```

class名には、汎用的なネーミングを用いる。（使用状況は限られるが、固有名詞もアリ）  
（参考サイト）https://qiita.com/flatsato/items/f7efce78271980dde6c2

```
.card__title {} // 汎用的
.history__title {} // 歴史という項目で使用するパーツであることが明確である。
※固有名詞をclass名に使用する際は、他の項目では使用できないので注意。
.hisrory__titleは、歴史という項目以外では使用できない。
```

## id属性

- アンカーリンク
- JavaScriptのフック（`#js_hoge`）

などに使用する。

### idにレイアウト用のスタイルを指定しない

理由：詳細度の上書きが困難になるため

## BEMのBlockに要素の外側に関するスタイル（marginなど）を指定しない

理由：コンポーネントが汎用的ではなくなるため

## SCSSの&について

BEMの`&__Element`といった記述は使用しない。

`&__Element`を使用するデメリット

- 検索性低下
- ネストが深くなりやすい（可読性低下）
- 一括リネーム不可

```
◎OK
.card {
  & > .card__heading {} // 直下セレクタ
  .card__text {
    & + .card__text {} // 隣接セレクタ
  }
  .card__link {
    &:hover {} // 擬似クラス
  }
  &::before {} // 疑似要素
  &[data-category=""] {} // 属性セレクタ 
  &._xxx {} // マルチクラス
}

×NG
.card {
  &__heading {}
}
```

## ショートハンド

### 不要な値は指定しない

```
◎OK
margin-right: auto;
margin-left: auto;
  
×NG
margin: 0 auto;

◎OK
background-color: #fff;
  
×NG
background: #fff;
```

（参考サイト）[CSS ショートハンド・プロパティの問題点 · terkel.jp](http://terkel.jp/archives/2012/06/problem-with-css-shorthand-propaties/)

## ベンダープレフィックス
ベンダープレフィックスは手動で指定せずautoprefixerで指定する。  

## リセット

[ress.css](https://github.com/filipelinhares/ress) を使用する  
Normalize.cssをベースにしたリセットCSS

（参考サイト）[CSSリセットはこれで決まり！モダンブラウザによる相違を吸収するようカスタマイズされたスタイルシート -ress | コリス](http://coliss.com/articles/build-websites/operation/css/modern-css-reset-ress.html)

## その他

- CMS使用の場合、ネーミングは設計・URLに合わせる。
- class名は数字から始めない。
- 英単語の大文字はCSSで指定する。（.u-uppercase）
- block単位でSassファイルを分割する。（既存のディレクトリ構成を参考に）
- mixinなどベースのソースコードを変更する場合は、制作者全体に共有する。
- インラインstyleを指定しない。JavaScriptなど一部例外は除く。