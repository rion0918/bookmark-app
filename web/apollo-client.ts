import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL, // ←ここが重要！
  cache: new InMemoryCache(),
});

export default client;
