import fs from "fs";
import Image from "next/image";
import matter from "gray-matter";
import md from "markdown-it";
import styles from "./Post.module.css";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const title = frontmatter.title;
  return {
    props: {
      frontmatter,
      content,
      title,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  console.log(frontmatter);
  return (
    <div className={styles.post}>
      <figure>
        <Image
          width={768}
          height={576}
          alt={frontmatter.title}
          src={`/${frontmatter.socialImage}`}
        />
        <figcaption>{frontmatter.date}</figcaption>
      </figure>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
