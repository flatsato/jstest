# ディレクトリ構成

担当者：伊藤

各フォルダの説明は以下の通りです。

```
├── README.md （制作者は必ず読む）
├── /dist/ （生成フォルダ）
├── .brouserslistrc （対象ブラウザを指定）
├── .editorconfig （エディタのレイアウト統一）
├── .eslintrc （ESLint設定ファイル）
├── .gitignore （Git管轄から除外するファイル指定）
├── .nvmrc （nvm設定ファイル）
├── .prettierrc （Prettier設定ファイル）
├── .stylelintrc （StyleLint設定ファイル）
├── babel.config.js （Babel設定ファイル）
├── fix-css.js （SCSSファイル自動整形）
├── fix-js.js （JSファイル自動整形）
├── guideline_css.md（制作者マニュアル CSS）
├── guideline_directory.md （制作者マニュアル ディレクトリ構成）
├── guideline_frontend.md（制作者マニュアル フロントエンド実装ルール）
├── guideline_git.md（制作者マニュアル Git）
├── guideline_html.md（制作者マニュアル HTML）
├── gulp.config.js （gulp設定ファイル）
├── gulpfile.js （Gulpファイル）
├── package-lock.json
├── package.json
├── remove.js （生成フォルダ一括削除）
└── /src/ （制作フォルダ）
    ├── /duplicate/ （そのまま複製されるフォルダ）
    │   ├── css
    │   │   └── vendor
    │   │       └── ress.min.css
    │   └── fonts
    │       ├── noto-sans-jp-v28-japanese-700.woff
    │       └── noto-sans-jp-v28-japanese-700.woff2
    │   └── js
    │       └── vendor
    ├── /img/ （画像フォルダ）
    │   ├── /common/ （サイト共通画像）
    │   ├── /dummy/ （ダミー画像 公開・納品前にフォルダごと削除。このフォルダ以外にダミー・アテの画像を入れない）
    │   └── /head/ （head内で使う画像）
    │       ├── android-chrome-192x192.png
    │       ├── apple-touch-icon.png
    │       ├── favicon.ico
    │       └── manifest.json
    │       ├── ogp.png
    │       ├── safari-pinned-tab.svg
    ├── /js/（JavaScriptフォルダ）
    │   ├── changeMetaViewport.js
    │   ├── hashScroll.js
    │   ├── polyfill.js
    │   ├── script.js
    │   └── scrollTarget.js
    ├── /scss/（Sassフォルダ）
    │   ├── /component/ （コンポーネント）
    │   │   └── _button.scss
    │   ├── /foundation/ （ベース）
    │   │   ├── _index.scss （/foundation/をまとめる）
    │   │   ├── _reset.scss （オリジナルリセットCSS）
    │   │   └── _zindex.scss （Blockのz-index指定）
    │   ├── /global/ （グローバルで使用する変数やmixin）
    │   │   ├── _animation.scss （アニメーション用のmixin） 
    │   │   ├── _breakpoint.scss （ブレークポイント用のmixin）
    │   │   ├── _font.scss （フォント用のmixin）
    │   │   ├── _index.scss （/global/をまとめる）
    │   │   └── _mixin.scss （サイト共通のmixin）
    │   │   ├── _variables.scss （SCSS変数）
    │   ├── /layout/ （レイアウト）
    │   │   └── _breadcrumb.scss
    │   ├── /project/ （プロジェクト）
    │   │   └── _entry.scss
    │   ├── /utility/ （ユーティリティ）
    │   │   └── _hide.scss
    │   └── style.scss（生成対象ファイル）
    └── /template/ （ejsフォルダ）
        ├── /_include/ （インクルード）
        │   ├── /common/ （サイト共通）
        │   │   └── _head.ejs
        │   ├── _c-hamburger.ejs
        │   ├── _c-mainVisual.ejs
        │   ├── _contact-form.ejs（Contact Form 7用HTML）
        │   ├── _l-breadcrumb.ejs
        │   ├── _l-footer.ejs
        │   ├── _l-globalNavigation.ejs
        │   ├── _l-header.ejs
        │   ├── _l-pagetop.ejs
        │   ├── _l-sub.ejs
        │   ├── _mw-wp-form.ejs（MW WP Form用HTML）
        │   ├── _wp-pagination.ejs（WP-PageNavi用HTML）
        ├── index.ejs（制作ページ一覧）
        ├── page_base_column1.ejs（サンプルファイル＞納品、公開時には削除する）
        ├── page_base_column2.ejs（サンプルファイル＞納品、公開時には削除する）
        └── page_top.ejs（サンプルファイル＞納品、公開時には削除する）
```



