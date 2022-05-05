import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export async function getStaticProps() {
  const files = fs.readdirSync("drafts");
  const sortedFiles = files.sort((a, b) => {
    const x = parseInt(a.replace(".md", ""), 10);
    const y = parseInt(b.replace(".md", ""), 10);
    if (x > y) return 1;
    if (y > x) return -1;
    return 0;
  });
  const posts = sortedFiles.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`drafts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      title: "",
      slug: "",
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
            <Link href={`/drafts/${post.slug}`}>
              <a>
                <Image
                  src={`/images/${post.frontmatter.title}`}
                  alt={post.frontmatter.title}
                  width={512}
                  height={512}
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
