import { MicroPostsQuery } from "generated/graphql";
import moment from "moment";
import Link from "next/link";
import { RightArrow } from "design-system/icons/RightArrow";

interface IProps {
  post: MicroPostsQuery["microPosts"][0];
}

export function BlogCard(props: IProps): JSX.Element {
  const { post } = props;
  const { title, excerpt, createdAt, slug } = post;

  return (
    <Link href={`/daily-blog/${slug}`}>
      <a>
        <div className="blog-card-container">
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <small>{moment(createdAt).format("MMM DD, YYYY")}</small>
        </div>
      </a>
    </Link>
  );
}
