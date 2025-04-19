import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';

const GET_BOOKMARKS = gql`
  query GetBookmarks {
    bookmarks {
      id
      title
      url
    }
  }
`;

const CREATE_BOOKMARK = gql`
  mutation CreateBookmark($title: String!, $url: String!) {
    createBookmark(title: $title, url: $url) {
      id
      title
      url
    }
  }
`;

interface Bookmark {
  id: string;
  title: string;
  url: string;
}

export default function Home() {
  const { data, loading, error, refetch } = useQuery(GET_BOOKMARKS);
  const [createBookmark] = useMutation(CREATE_BOOKMARK);

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBookmark({
        variables: { title, url },
      });
      setTitle('');
      setUrl('');
      refetch(); // ← 一覧を更新
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">📚 Bookmarks</h1>

      <form onSubmit={handleSubmit} className="mb-6 flex flex-col">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-3 py-1 mb-2 w-full"
          required
        />
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border rounded px-3 py-1 mb-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
          追加
        </button>
      </form>

      <ul className="list-disc pl-4 space-y-2">
        {data.bookmarks.map((bm: Bookmark) => (
          <li key={bm.id} className="p-3 border rounded shadow-sm">
            <a href={bm.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {bm.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}