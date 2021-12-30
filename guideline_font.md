# ガイドライン Webフォント

担当者：伊藤

## 方法①：セルフホスティング＋サブセット化＋preload

### 特徴
- ファイルサイズが小さくなるので、FOIT/FOUTが発生しにくい
- フォントのバージョン更新が手動になる
- リソースの合計サイズに気をつける（ https://web.dev/total-byte-weight/ ）

### 手順

#### 1. フォントファイルをサーバーにアップ  
/src/duplicate/font/以下にwoff/woff2ファイルを配置する。

#### 2. フォントファイルを読み込む
@font-faceを使用してフォントファイルを読み込む。  
font-display: swap;を指定する。

```scss
@font-face {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(""), url("../font/NotoSansJP-Regular.woff2") format("woff2"), url("../font/NotoSansJP-Regular.woff") format("woff");
}
```

#### 3. フォントファイルのサブセット化（日本語フォントのみ）
参考サイト： https://qiita.com/flatsato/items/2872aa863c20818982c8

#### 4. 重量級ファイルのpreload

```html
<link rel="preload" href="/font/NotoSansJP-Regular.woff2" as="font" type="font/woff2" crossorigin />
```

#### 5. フォントファイルをキャッシュする
キャッシュTTLは長めに設定するとよい。（1年など）

## 方法②：印刷mediaを用いたハック

### 特徴
- Google Fontsから読み込む場合に検討する。
- Google FontsのCoverageのCSS未使用率が100％になる仕様？
- 上記を除いて、Lighthouseのパフォーマンス向上が見込める。
- ファイルサイズが大きいと、FOIT/FOUTが発生する。

### 手順

#### 1. woffファイルの配信元に事前接続する
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

#### 2. フォントファイルを読み込む

```html
<link rel="preload" as="style" href="$CSS&display=swap" />
<link rel="stylesheet" href="$CSS&display=swap" media="print" onload="this.media='all'" />
```

参考サイト： https://csswizardry.com/2020/05/the-fastest-google-fonts/

#### 3. フォントファイルをキャッシュする
キャッシュTTLは長めに設定するとよい。（1年など）