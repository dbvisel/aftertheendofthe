import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

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

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div className={styles.indexgrid}>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/post/${post.slug}`}>
              <a>
                <Image
                  src={`/images/${post.frontmatter.title}`}
                  alt={post.frontmatter.title}
                  width={256}
                  height={256}
                  objectFit={"cover"}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
