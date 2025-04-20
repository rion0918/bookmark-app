# 📚 Bookmark App

Next.js + NestJS + GraphQL + Prisma + PostgreSQL を使ったブックマーク管理アプリ
ログイン機能付きで、ユーザーごとにブックマークの追加・表示が可能

---

## ✅ 技術スタック

| 役割           | 技術                                 |
| -------------- | ------------------------------------ |
| フロントエンド | Next.js (TypeScript)                 |
| バックエンド   | NestJS (GraphQL code-first)          |
| 認証           | JWT（Passport）                      |
| データベース   | PostgreSQL（Prisma ORM）             |
| スタイリング   | Tailwind CSS                         |
| デプロイ       | Vercel（フロント）/ Render（DB/API） |

---

## 📁 ディレクトリ構成（抜粋）

```bash
bookmark-app/
├── service/                         # NestJS（バックエンドAPI）
│   ├── prisma/
│   │   ├── schema.prisma            # DBスキーマ（User, Bookmarkなど）
│   │   └── migrations/              # Prismaのマイグレーション履歴
│   │
│   ├── src/
│   │   ├── main.ts                  # アプリのエントリーポイント
│   │   ├── app.module.ts            # アプリのルートモジュール
│   │
│   │   ├── auth/                    # 🔐 認証関連
│   │   │   ├── auth.module.ts           # 認証モジュール
│   │   │   ├── auth.service.ts          # サインアップ／ログイン処理
│   │   │   ├── auth.resolver.ts         # GraphQLのResolver
│   │   │   ├── jwt.strategy.ts          # JWTトークン検証（Passport）
│   │   │   ├── gql-auth.guard.ts        # GraphQL用ガード
│   │   │   ├── current-user.decorator.ts # ログインユーザー取得用デコレータ
│   │   │   └── dto/
│   │   │       ├── login.input.ts       # ログイン時の入力型
│   │   │       └── signup.input.ts      # サインアップ時の入力型
│   │
│   │   ├── bookmark/                 # 📚 ブックマーク機能
│   │   │   ├── bookmark.module.ts       # Bookmarkモジュール
│   │   │   ├── bookmark.service.ts      # Bookmark作成・取得のビジネスロジック
│   │   │   ├── bookmark.resolver.ts     # GraphQL Resolver（Mutation / Query）
│   │   │   └── bookmark.model.ts        # GraphQL ObjectType定義
│   │
│   │   └── prisma/
│   │       ├── prisma.module.ts         # PrismaService用モジュール
│   │       └── prisma.service.ts        # PrismaClient ラッパー
│
│   ├── .env                          # DATABASE_URL / JWT_SECRET など
│   ├── package.json
│   └── tsconfig.json
│
├── web/                             # Next.js（フロントエンド）
│   ├── pages/
│   │   ├── index.tsx                # ブックマーク表示ページ
│   │   ├── login.tsx                # ログインフォーム
│   │   └── signup.tsx               # サインアップフォーム
│   ├── graphql/                     # GraphQLクエリ・ミューテーション定義
│   ├── components/                  # Navbarなど共通UI
│   ├── apollo-client.ts             # Apollo Client初期化
│   ├── .env.local                   # NEXT_PUBLIC_API_URL など
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```
