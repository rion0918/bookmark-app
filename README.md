# Bookmark App

Next.js + NestJS + GraphQL + Prisma + PostgreSQL で構成された個人開発用ブックマークアプリ

---

## ▶️ モチーフ

私用のサイトメモを、タイトル & URL で登録、一覧で検索、リンクして飛べる。

> "ブラウザ上でサイトをまとめる" ことに特化した個人開発用アプリ

---

## ▶️ 機能

- ブックマークの新規登録 (title, url)
- 登録されたリストの表示
- 削除機能
- TailwindCSS を用いたシンプル UI

---

## ▶️ 技術スタック

### ▶️ フロントエンド (web)

- Next.js
- TypeScript
- Apollo Client
- Tailwind CSS

### ▶️ バックエンド (service)

- NestJS
- GraphQL (Code First)
- Prisma (ORM)
- PostgreSQL

---

## ▶️ ディレクトリ構成

```plaintext
bookmark-app/
├── service/                      # NestJS backend
│   ├── src/                      # GraphQL resolver, service, moduleなど
│   ├── prisma/                   # schema.prisma とマイグレーション
│   │   └── schema.prisma
│   ├── .env                      # DATABASE_URL など
│   └── package.json
│
├── web/                          # Next.js frontend
│   ├── pages/                    # ページルーティング
│   ├── graphql/                  # クエリ・ミューテーション定義
│   ├── apollo-client.ts         # Apollo Client 設定
│   ├── .env.local                # NEXT_PUBLIC_API_URL を定義
│   └── package.json
│
├── README.md
└── .gitignore
```

</details>

---

## ▶️ 開発メモ

- 一番最初は NestJS で Prisma + GraphQL の最小構成を作成
- Next.js の仕様を合わせて Apollo Client との連携を試しながら開発
- PrismaClient の output 設定も Prisma 7 対応のために追加

---

## ▶️ 現状

- フロントは Vercel で公開中 ✅
- バックエンドは ローカル PostgreSQL で開発中のみ ✅

---

## ▶️ 今後

- サービスを Render または Railway などに公開して、誰でも使えるように
- 編集機能 / カテゴリ分類 / 検索機能 などを追加していく
- 認証 (ログイン) 機能も展開予定

---

## ▶️ 開発者

- 名前：**@rion0918**
