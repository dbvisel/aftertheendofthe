import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}

// TODO: make this a card grid of just images?

export default function Home({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/post/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
