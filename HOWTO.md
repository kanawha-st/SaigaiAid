# 災害援助ナビゲーターカスタマイズHOWTO

tomoiida@gmail.com



## 目的

このドキュメントは袖ケ浦市の災害支援ナビゲーター(http://civictechsodegaura.org/saigai)の内容を別の市町村や別の目的のために使用できるようカスタマイズするための設定・ビルド方法を説明します。

## 準備

以下のツールが必要です。

* yarn (パッケージツール)
* vue-cli （WebUIライブラリ）

```
# yarnのインストール
npm install -g yarn

# vue-cliのインストール
npm install -g @vue/cli

# ライブラリのアップデート
yarn install
```

## 設定ファイルの更新

### サブフォルダの指定

サービスをドメインのサブフォルダ（http://xxx.xxx/path/to/）に配置する場合、vue.config.jsのpublicPathを書き換えます。

```
module.exports = {
  publicPath: '/path/to/',
  "transpileDependencies": [
    "vuetify"
  ]
}
```

### 質問ファイル(src/data/QData.js)の更新

工事中

### サービスファイル(src/data/Services.js)の更新

工事中

# デプロイ方法

## ビルド

以下のコマンドでビルドします。

```
yarn build
```

## デプロイ

./distフォルダの内容をサーバーのフォルダ（vue.config.jsで指定した場所）にアップロードしてください。