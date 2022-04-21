import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import matter from "gray-matter";
import md from "markdown-it";
import styles from "./Photo.module.css";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName, index) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

// TODO:

export async function getStaticProps({ params: { slug } }) {
  const files = fs.readdirSync("posts");
  const sortedFiles = files.sort((a, b) => {
    const x = parseInt(a.replace(".md", ""), 10);
    const y = parseInt(b.replace(".md", ""), 10);
    if (x > y) return 1;
    if (y > x) return -1;
    return 0;
  });
  const myPosition = sortedFiles.indexOf(`${slug}.md`);

  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const title = frontmatter.title;
  frontmatter.src = `/images/${title}`;
  frontmatter.width = 768;
  frontmatter.height = frontmatter.imageStyle === "portrait" ? 1024 : 576;
  const jsDate = new Date(Date.parse(frontmatter.date));
  frontmatter.jsDate = jsDate.toLocaleDateString("en-uk", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return {
    props: {
      metadata: frontmatter,
      content,
      title,
      slug: `photo/${slug}/`,
      next:
        myPosition < files.length - 1
          ? files[myPosition + 1].replace(".md", "")
          : null,
      prev: myPosition > 0 ? files[myPosition - 1].replace(".md", "") : null,
    },
  };
}

export default function PostPage({ metadata, content, next, prev }) {
  return (
    <div className={styles.post}>
      <figure>
        <Image
          width={metadata.width}
          height={metadata.height}
          alt={metadata.title}
          src={metadata.src}
        />
        <figcaption>{metadata.jsDate}</figcaption>
      </figure>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      <nav>
        {prev ? (
          <Link href={`/photo/${prev}`}>
            <a style={{ marginRight: "auto" }}>{prev} ←</a>
          </Link>
        ) : null}
        {next ? (
          <Link href={`/photo/${next}`}>
            <a style={{ marginLeft: "auto" }}>→ {next}</a>
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
