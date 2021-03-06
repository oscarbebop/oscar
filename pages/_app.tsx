import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Layout } from "design-system/layout/Layout";
import "../styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    };
  });

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
