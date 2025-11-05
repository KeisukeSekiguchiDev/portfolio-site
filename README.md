# Portfolio Site

AIネイティブDXコンサルタント　関口佳祐のポートフォリオサイト

Claude Codeを活用して構築した、モダンでレスポンシブなポートフォリオWebサイトです。

## 🌐 デモ

- **GitHub**: https://github.com/KeisukeSekiguchiDev/portfolio-site
- **本番環境**: 準備中（Vercelにデプロイ予定）

## ✨ 主な機能

- **Hero Section**: 名前、肩書き、SNSリンク（GitHub、Qiita、LinkedIn）
- **About Me**: 経歴と実績の紹介（エンジニア歴8年）
- **Tech Stack**: 使用技術の一覧表示
  - Languages: C++/C#, TypeScript, Python, Rust
  - Frameworks: .NET Core, React/Next.js, Node.js, Tailwind CSS
  - AI Tools: Claude Code, Claude API, OpenAI API
- **Projects**: 開発予定の5つのプロジェクト一覧
- **Contact**: LinkedIn経由でのお問い合わせ
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **ダークモードテーマ**: 紫をベースとしたグラデーション背景

## 🛠️ 技術スタック

### フロントエンド
- **Next.js** 15.0.3 - React フレームワーク
- **React** 18.3.1 - UIライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストCSS

### 開発環境
- **Node.js** v24.5.0
- **npm** 11.5.1
- **ESLint** - コード品質管理
- **PostCSS** - CSS処理

### ホスティング
- **Vercel** - デプロイ予定

## 📦 セットアップ

### 必要要件

- Node.js v20以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/KeisukeSekiguchiDev/portfolio-site.git

# ディレクトリに移動
cd portfolio-site

# 依存関係をインストール
npm install
```

## 🚀 開発

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

ファイルを編集すると、ページが自動的にリロードされます（ホットリロード）。

### ビルド

```bash
# 本番用ビルド
npm run build

# 本番用サーバーの起動
npm start
```

### Lint

```bash
npm run lint
```

## 📁 プロジェクト構造

```
portfolio-site/
├── app/                    # Next.js App Router
│   ├── components/        # 再利用可能なコンポーネント
│   │   └── SocialButton.tsx
│   ├── layout.tsx         # 共通レイアウト
│   ├── page.tsx           # トップページ
│   └── globals.css        # グローバルスタイル
├── public/                # 静的ファイル（今後追加予定）
├── .eslintrc.json        # ESLint設定
├── .gitignore            # Git除外設定
├── next.config.js        # Next.js設定
├── package.json          # 依存関係
├── postcss.config.js     # PostCSS設定
├── tailwind.config.ts    # Tailwind設定
├── tsconfig.json         # TypeScript設定
└── README.md             # このファイル
```

## 🎨 カスタマイズ

### 個人情報の変更

`app/page.tsx` を編集して、以下の情報を変更できます:

- 名前とキャッチフレーズ
- SNSリンク（GitHub、Qiita、LinkedIn）
- 経歴・スキル情報
- プロジェクト一覧

### スタイルの変更

- **色**: `tailwind.config.ts` でカラーパレットをカスタマイズ
- **フォント**: `app/layout.tsx` でフォント設定を変更
- **レイアウト**: `app/globals.css` でグローバルスタイルを調整

## 🚀 デプロイ

### Vercelへのデプロイ（推奨）

1. [Vercel](https://vercel.com)にサインアップ
2. GitHubリポジトリを連携
3. `portfolio-site`リポジトリを選択
4. デプロイボタンをクリック

Vercelが自動的にビルド・デプロイを行います。プッシュするたびに自動デプロイされます。

## 📝 今後の更新予定

- [ ] Vercelへのデプロイ
- [ ] スクリーンショット追加
- [ ] プロジェクト完成時に詳細ページ追加
- [ ] 技術記事公開時にブログセクション更新
- [ ] アニメーション・トランジション追加
- [ ] パフォーマンス最適化

## 🤝 貢献

このプロジェクトは個人ポートフォリオサイトですが、改善提案やバグ報告は歓迎します。

Issueを作成するか、Pull Requestを送ってください。

## 📄 ライセンス

© 2025 Keisuke Sekiguchi. All rights reserved.

個人利用・学習目的での参照は自由です。商用利用の際はご連絡ください。

## 🙏 謝辞

このプロジェクトは [Claude Code](https://claude.com/claude-code) を活用して構築されました。

---

**Author**: Keisuke Sekiguchi
**Email**: keisuke.sekiguchi2@gmail.com
**GitHub**: [@KeisukeSekiguchiDev](https://github.com/KeisukeSekiguchiDev)
**Qiita**: [@Keisuke_Sekiguchi](https://qiita.com/Keisuke_Sekiguchi)
**LinkedIn**: [関口佳祐](https://www.linkedin.com/in/%E4%BD%B3%E7%A5%90-%E9%96%A2%E5%8F%A3-5a3329391/)
