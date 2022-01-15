import type { NextPage } from "next";
import Head from "next/head";

import { useMicroPostsQuery } from "generated/graphql";
import { BlogCard } from "design-system/blog-card/BlogCard";

const Home: NextPage = () => {
  const { data, loading, error } = useMicroPostsQuery();

  if (loading) {
    return <p>loading</p>;
  }

  if (!data || error) {
    return <p>error</p>;
  }

  return (
    <div>
      <Head>
        <title>Oscar</title>
        <meta name="description" content="Oscar Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {data.microPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

export default Home;
