## What is this?

Bun + Nuxt3 で作られた会社でもバレずに使えるかもしれない Google 検索風のクライアントです

## 自分用メモ

Nuxt3 のディレクトリ構成は以下を参考に

https://zenn.dev/r0227n/articles/nuxt3_directory_structure_memo

- `.nuxt`: Nuxt.js が開発モードで起動されたときに自動的に生成されるディレクトリ。ビルドされたアプリケーションのファイルが格納されます。
- `.output`: nuxt generate コマンドによって静的に生成されたサイトのファイルが出力されるディレクトリ。
- `assets`: スタイルシート、画像、フォントなどの静的なアセットを格納するディレクトリ。
- `components`: 再利用可能な Vue コンポーネントを格納するディレクトリ。これらのコンポーネントは自動的にインポートされ、どこからでも使用できます。
- `composables`: Vue 3 の Composition API を使用した再利用可能なロジック（composable）を格納します。アプリケーション内で自動で import される。
- `content`: マークダウンファイルや CSV ファイルなどのコンテンツを格納するディレクトリ。
- `layouts`: アプリケーションのレイアウトを定義するディレクトリ。レイアウトはページの共通部分（例えばヘッダーやフッター）を定義するために使用されます。
- `middleware`: アプリケーションのミドルウェアを定義するディレクトリ。ミドルウェアは、ページやレイアウトがレンダリングされる前に実行されるカスタム関数です。
- `modules`: Nuxt.js のモジュールを格納するディレクトリ。モジュールは、Nuxt.js のコア機能を拡張するためのコードを含む JavaScript ファイルです。
- `node_modules`: プロジェクトの依存関係を格納するディレクトリ。npm install または yarn install コマンドを実行すると、このディレクトリに依存関係がインストールされます。
- `pages`: ルーティングとページコンポーネントが自動的に生成されます。各 Vue ファイルは対応するルートとなります。
- `plugins`: Vue.js のプラグインを格納するディレクトリ。これらのプラグインは、Nuxt.js がインスタンス化される前に実行されます。
- `public`: 静的ファイル（画像、スタイルシート、ロボット.txt など）を格納します。これらのファイルはそのままのパスで公開されます。
- `server`: サーバーサイドのロジックを格納します。このディレクトリ内に配置したファイルはサーバーサイドで実行され、API エンドポイントとして利用できます。
- `utils`: ユーティリティ関数など、プロジェクト全体で使用する JavaScript のヘルパー関数を格納します。

### あとでみる

EventBusについて　ー　https://www.google.com/amp/s/dev.appswingby.com/nuxt/vue3-x%25E7%25B3%25BB%25E3%2581%25A7%25E3%2581%25AEevent-bus%25E5%25AE%259F%25E8%25A3%2585%25E3%2581%25AB%25E3%2581%25A4%25E3%2581%2584%25E3%2581%25A6/amp/

### ページング、ページャーについて

cursor に何渡せばええねんって思ってたら調べてくれてる人がいた

ありがとう

(https://thinkami.hatenablog.com/entry/2024/05/07/223028#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF-cursor-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)[https://thinkami.hatenablog.com/entry/2024/05/07/223028#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF-cursor-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6]

### ライブラリ

TOKIMEKI でも使われてる PhotoSwipe ってライブラリ導入すれば画像のスライド処理とかは楽かも

https://photoswipe.com/getting-started/

## インストール

先に Bun をインストールしてください

https://bun.sh/docs/installation

インストールしたら以下のコードを実行することでプロジェクトがインストールされます

```bash
git clone https://github.com/shibaTT/phantom-social-client.git
cd phantom-social-client
bun install
```

## ローカル確認

引数で bun を渡さないと Node で起動してしまうみたいです

```bash
bun --bun run dev
```

## ビルド

```bash
bun run build
```

## プレビュー

```bash
npm run preview
```
