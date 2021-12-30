# ガイドライン HTML

担当者：伊藤

[HTML Living Standard](https://momdo.github.io/html/) を使用する。  
モジュールの構造についてはtemplate内のHTMLを参照、案件に応じてアレンジは自由とする。

## head

### meata、favicon、OGP、Twitter

クライアント指定がない場合は確認する。

## body

### bodyにclassを付与しない
バージョン違い（Modifier）を設ける際は、bodyにはclassを付与せず、コンポーネント単位でModifierを付与し管理する。  
`.l-container`にもclassは付与せず、コンポーネント側にバリエーションを作るようにする。  

※ただし、JavaScriptによるclass付与は許容する。

## h1-h6

ｈ1タグ＝ページに1つのみ  
TOPページ＝サイトタイトル or ロゴに指定  
下層ページ＝ページ固有のタイトル

h2〜h4まで使用する。

## a

### 外部リンク

target="_blank"と rel="noopener"を指定する。

```
<a href="" target="_blank" rel="noopener"></a>
```

`rel="noreferrer"`は必要な場合のみ指定する。

### ファイルダウンロード

download属性を指定する。

```
<a href="example.gif" download="ダウンロード時のファイル名"></a>
```

### メールリンク

mailtoを指定する。  
@は実体参照`&#64;`で記述する。

```
<address>
連絡先：<a href="mailto:info&#64;example.com">info&#64;example.com</a>
</address>
```

## button

button要素とa要素を適切に使い分ける。  
type属性は必ず指定する。

```
// ページ内でアクションを実行
<button type="button">送信</button>

// formのGET/POSTアクションを実行
<button type="submit">送信</button>

// ページ遷移
<a href="">リンク</a>
```

## img

CMS側での更新が必要な箇所は、疑似要素や`background-image`で画像を指定しない。

### 命名

共通＝`/img/common/block_element.jpg`  
ダミー（納品公開前に必ず削除）＝`/img/dummy/block_element.jpg`  
ページ＝`/img/pageName/block_element.jpg`  
例）/about/のメインビジュアル背景画像＝`/img/about/mainvisual_background.jpg`  
連番＝`/img/common/block_element01.jpg`

- 命名は基本的にアンダースコアのみ使用し、ハイフンは使わない。
- 画像名はタイトルを見て、どこのどんな状態の画像か想像がつく命名が理想的である。
- 命名に連番を使わない。例外として期間限定サイトとダミー画像は連番で良い。   
  例1）運用しないサイト、本番で使用しない画像、スライダー内の画像は連番で良い。  
  例2）  以下の例はタイトルで色の想像がつく。  
  NG：icon_facebook01.svg、icon_facebook02.svg     
  OK：icon_facebook_white.svg、icon_facebook_blue.svg

### 書き出し

画像に適したフォーマットで書き出しする。

写真画像＝jpg  
色数が256色に収まる画像＝png  
アイコン画像＝svg

### WebP対応

IEやSafariをアップデートしていないユーザー向けにフォールバックを用意する。

### HTML属性

必須：`src` / `alt`（値は空でも可）/ `width` / `height` / `decoding`（値は`async`）  
遅延読み込みすべき画像には`loading: lazy`を指定する。（ファーストビューに含まれる画像などはNG）

### 圧縮

1MB前後の画像は手動で容量圧縮を行う。

## address

個人、団体、組織の連絡先をマークアップ  
住所、URL、メールアドレス、電話番号、ソーシャルメディアのアカウント、地理上の座標など

```
<address>社名</address>
<address>sato@wd-flat.com</address>
```

## time

日付、時刻をマークアップ。datetime属性をセットとする。
```
<time datetime="2018">2018年</time>
<time datetime="2001-05-15T19:00">5月15日</time>
```

## form

### input、textarea、selectにはlabelのfor属性と対応したid属性を指定する
```
<input type="radio" name="sex" id="man" value="男性"><label for="man">男性</label>
<input type="radio" name="sex" id="woman" value="女性"><label for="woman">女性</label>

// labelに該当するデザインがない場合は、title属性を指定する
<select name="prefectures" title="都道府県と選択する">
    <option value="tokyo">東京都</option>
</select>
```

### formの各項目にname属性を指定する
```
<label for="last-name">お名前（姓）</label>
<input type="text" name="last-name" id="last-name" placeholder="入力してください">
```

### 入力必須項目にrequired属性を指定する

```
<label for="last-name">お名前（姓）</label>
<input type="text" name="last-name" id="last-name" placeholder="入力してください" required>
```

### inputmode属性の使用を検討する

https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/inputmode

```
// 郵便番号入力フォーム
<label for="postal-code">郵便番号</label>
<input type="text" name="postal-code" id="postal-code" placeholder="例：0000000" inputmode="numeric">
```

### autocomplete属性の使用を検討する

https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/autocomplete

```
// 郵便番号入力フォーム
<label for="postal-code">郵便番号</label>
<input type="text" name="postal-code" id="postal-code" placeholder="例：0000000" autocomplete="postal-code">
```

### pattern属性を指定するときは合わせてtitle属性も指定する

title属性を使用すると、ツールチップとして表示するテキストを指定することができる。

https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/pattern

```
// 郵便番号入力フォーム
<label for="postal-code">郵便番号</label>
<input type="text" name="postal-code" id="postal-code" placeholder="例：0000000" title="郵便番号を半角数字かつハイフンなしで入力してください" pattern="\d{7}">
```

## 機種依存文字

### 名前付きエンティティを優先する
```
コピーライトの記述
◎ OK
&copy;

× NG
&#169;	
```

HTML上のその他の名前付きエンティティ
https://msdn.microsoft.com/ja-jp/library/cc392316.aspx

## 疑似要素

疑似要素をイベントトリガーとすることはできないので、イベントトリガーとなる要素に擬似要素を使用しない。

##インデント＝コードの改行は適宜行う。

```
◎ OK
<ul class="list">
  <li class="item"><a href="">テキスト</a></li>
  <li class="item"><a href="">テキスト</a></li>
</ul>
× NG 
<ul class="list"><li class="item"><a href="テキスト"></a></li><li class="item"><a href="テキスト"></a></li></ul>
```

## インライン要素に閉じタグを入れない

```
◎ OK
<br>
<img src="/img/common/logo.png">
× NG
<br />
<img src="/img/common/logo.png" />
```

## パス記述はサイト内で統一する
サイトにより違うので事前に確認する。（後から変更は作業コストがかかる。）  
確認なくサイトパス指定にしないよう注意。

サイトパス=ドメイン直下で作成。

```
<img src="/img/common/logo.png">
<a href="/about/">
```

相対パス＝ディレクトリ完結で作成。

```
<img src="../img/common/logo.png">
<a href="../about/">
```

httpsで統一する。  
トレイリングスラッシュも指定する。

```
◎ OK
<a href="https://wd-flat.com/"></a>
× NG
<a href="http://wd-flat.com"></a>
```

## WordPressサイトでの画像の設計

動的箇所の画像設計はマークアップ側で行う。  
WordPressでの画像生成は最大3種類までにし、その中で適切なサイズをデバイスで出し分ける。 （fullサイズが使わない）  
主に一覧ページのサムネイルなど。  

例 PC,TB,SPで同じ画像をサイズ別で出し分ける場合

```
<picture>
  <source srcset="hoge.jpg" media="(max-width: 640px)"><!-- SP用画像サイズsmall -->
  <source srcset="hoge.jpg" media="(min-width: 641px) and (max-width: 767px)"><!-- TB用画像サイズmiddle -->
  <img src="hoge.jpg" :alt="" width="300" height="260" decoding="async" loading="lazy"><!-- PC用画像サイズlarge -->
</picture>

```