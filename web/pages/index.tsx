import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const { data, loading, error, refetch } = useQuery(GET_BOOKMARKS);
  const [createBookmark] = useMutation(CREATE_BOOKMARK);

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  // JWTチェック（なければログイン画面へ）
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!title || !url) {
      alert('タイトルとURLは必須です');
      return;
    }
  
    try {
      await createBookmark({
        variables: { title, url },
        context: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      });
      setTitle('');
      setUrl('');
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-xl p-6 bg-gray-900 rounded shadow-lg">
        <button
          onClick={() => {
            localStorage.removeItem('token');
            router.push('/login');
          }}
          className="mb-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          ログアウト
        </button>
        <h1 className="text-2xl font-bold mb-6 text-center">📚 Bookmarks</h1>

        <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            追加
          </button>
        </form>

        <ul className="space-y-2">
          {data.bookmarks.map((bm: Bookmark) => (
            <li key={bm.id} className="p-3 bg-gray-800 border border-gray-700 rounded shadow-sm">
              <a
                href={bm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                {bm.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
