import { useRouter } from "next/router";
import { useMicroPostQuery } from "generated/graphql";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";

export default function MicroPost(): JSX.Element {
  const { asPath } = useRouter();
  const slug = asPath.replace("/daily-blog/", "");

  const { data, loading, error } = useMicroPostQuery({ variables: { slug } });

  if (loading) {
    return <p>loading</p>;
  }

  if (!data || !data.microPost || error) {
    return <p>error</p>;
  }

  const { title, content } = data.microPost;

  return (
    <>
      <Head>
        <title>Oscar - {title}</title>
        <meta name="description" content="micro post" />
      </Head>
      <div>
        <h1>{title}</h1>
        <RichText content={content.raw.children} />
      </div>
    </>
  );
}
