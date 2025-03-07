import Link from "next/link";
import { getPosts } from "@/lib/posts";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function BlogPostsPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const tags = (searchParams.tags as string)?.split(",");
  const order = searchParams.order ?? "newest";
  const posts = await getPosts({ tags: tags, newest: order === "newest" });

  console.log("tags", tags);
  console.log("order", order);

  return (
    <article>
      <h1 className="mb-4 text-2xl">Page: Blog</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Stay up to date with most recent posts
      </p>

      <hr />

      <article className="mb-8">
        Display&nbsp;
        {order === "newest" && (
          <Link href="/blog?order=oldest" className="underline">
            Oldest
          </Link>
        )}
        {order === "oldest" && (
          <Link href="/blog?order=newest" className="underline">
            Newest
          </Link>
        )}
      </article>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
            >
              {post.frontmatter.title}
              <p className="text-gray-400 text-sm mt-2">
                {post.frontmatter.date}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
