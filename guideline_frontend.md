# フロントエンド実装ルール

担当者：サトウ／伊藤

## HTML、CSS

### リンク指定

マークアップ時点で、静的なリンクは指定する。

### HTML Validator 対応

W3C Markup Validation Serviceを使用する。  
https://validator.w3.org/

### Stylelint / Prettier 対応

マージする前にリント＆コード整形を行う。  
警告やエラーがある状態でマージしない。

## JavaScript

### ESLint / Prettier 対応

マージする前にリント＆コード整形を行う。  
警告やエラーがある状態でマージしない。

## editor config 対応

/.editorconfigに設定、Gitで制作者全員に共有する。

（参考サイト）[どんなエディタでもEditorConfigを使ってコードの統一性を高める - Qiita](https://qiita.com/naru0504/items/82f09881abaf3f4dc171)

## アクセシビリティ対応

アクセシビリティの確保をお願いします。

###JIS等級A

[実装チェックリスト JIS X 8341-3:2010 等級A](http://jis8341.net/shiken.html)  
[20分でできる簡易チェックシート 等級A（excel版 127KB）](http://jis8341.net/understand-valid.html)  
[Webアクセシビリティ 逆引きガイドライン｜実践ノウハウ｜エー イレブン ワイ［WebA11y.jp］](http://weba11y.jp/know-how/guidelines/guidelines_index/)

### マシンリーダビリティ＞Google Developers

[モバイル フレンドリー テスト - Google Search Console](https://search.google.com/test/mobile-friendly?hl=JA)  
[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=JA)

###ユーザビリティ＞Human Interface Guidelines

[デザイン - Apple Developer](https://developer.apple.com/jp/design/)  
[ユーザインターフェイスのデザインのヒント - Apple Developer](https://developer.apple.com/jp/design/tips/)

## チェック

### フロー

1. ページ制作
2. 制作者チェック（透かしチェック含む）
3. Wチェック（透かしチェック含む）
4. デザインチェック
5. 本番公開
6. 本番公開後チェック

### 透かしチェック

要素の抜け漏れ、余白の大幅なズレを効率的に確認するために行う。  
[PerfectPixel by WellDoneCode](https://www.welldonecode.com/perfectpixel/)

### 制作者チェック

Backlogのカスタム属性の項目を元にチェックする。  
制作者チェックはデザインチェックのクオリティを担保する目的で、詳細なチェックはコンテンツ入れ込み後に行う。

### Wチェック

Backlogのカスタム属性の項目を元にチェックする。  
制作者は必ずミスをするという目線でチェックする。  
CMS組込前にHTML修正が必要ない状態まで仕上げる意識を持って制作、Wチェックを行う。

### デザインチェック

デザイナーさんが行うチェック

### 本番公開後チェック

asanaの本番公開後チェックリストを元にチェックする。

## Lighthouse検証

HTMLがFIXした後（CMSであればCMS組み込み後）に行うのが望ましい。

## 提出

### テストアップ
AM提出：課題指定日前日 〜12:00  
PM提出：課題指定日前日 〜17:00 

