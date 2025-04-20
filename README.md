# 📚 Bookmark App

URL とタイトルを登録して一覧表示できる、シンプルなブックマーク管理アプリです。  
**認証機能：なし（完全オープン）**

---

## 🛠 技術スタック

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [NestJS](https://nestjs.com/)
- **GraphQL**: [@nestjs/graphql + Apollo Server](https://docs.nestjs.com/graphql/quick-start)
- **ORM**: [Prisma](https://www.prisma.io/)
- **DB**: PostgreSQL
- **Hosting**
  - Frontend: Vercel

---

## 📁 ディレクトリ構成

```
bookmark-app/
├── service/          # NestJS（GraphQL + Prisma）
│   ├── src/
│   │   ├── bookmark/
│   │   │   ├── bookmark.module.ts
│   │   │   ├── bookmark.resolver.ts
│   │   │   ├── bookmark.service.ts
│   │   │   ├── bookmark.model.ts
│   │   │   └── dto/
│   │   └── prisma/
│   │       └── schema.prisma
├── web/              # Next.js（Apollo Client）
│   └── pages/
│       └── index.tsx
└── README.md
```

---

## 🚀 セットアップ手順

### 🔧 1. サーバー（NestJS）

```bash
cd service
npm install
npx prisma generate
npx prisma db push  # 初期 DB を反映
npm run start:dev
```

### 🌐 2. フロント（Next.js）

```bash
cd ../web
npm install
npm run dev
```

---

## 🧪 GraphQL 確認（NestJS）

GraphQL エンドポイント： [http://localhost:4000/graphql](http://localhost:4000/graphql)

### 🎯 Mutation（ブックマーク追加）

```graphql
mutation {
  createBookmark(title: "Google", url: "https://google.com") {
    id
    title
    url
  }
}
```

### 📄 Query（ブックマーク一覧取得）

```graphql
query {
  bookmarks {
    id
    title
    url
  }
}
```

---

## 📡 デプロイ先（例）

- Frontend: https://bookmark-app.vercel.app/
