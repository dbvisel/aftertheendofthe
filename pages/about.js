import styles from "./photo/Photo.module.css";

export async function getStaticProps() {
  return {
    props: {
      title: "about this project",
      slug: "about",
    },
  };
}

export default function AboutPage() {
  return (
    <div className={styles.post}>
      <div>
        <p>
          The project takes as its source a collection of images from a trip to
          Libya in early 2011, taken on a phone and a digital camera. They are
          not, or should be said from the start, very good photos. In part this
          is because of the time that they're from, when storage was suddenly
          available and every picture could be taken without thinking about it.
          When one went someone, one took pictures; though what was done with
          those pictures was not clear. The most interesting of these were
          shared at the time; most, however, were simply dumped into iPhoto on
          my computer where they stayed, jumping two computers to the one where
          they are now. I don't think any of them have ever been given any real
          physical presence; they exist in an unattended digital archive,
          waiting for something to happen to them. In this, they're not unlike
          most of the photos I've taken on my phone over the past fifteen years.
        </p>
        <p>
          I can claim, it should go without saying, no special knowledge of
          Libya; when I looked more often than not I did not know what I was
          seeing, and I'm not sure that I would claim any more knowledge now.{" "}
        </p>
        <p>
          And yet: I wonder if there's something to be seen in these photos,
          taken weeks before the country they were taken in ceased to exist; and
          while of course we didn't know that at the time, on a personal level,
          it was my last big trip before becoming a parent.
        </p>
        <p>
          This is part of a larger project thinking about travel and books and
          how we come to understand (or misunderstand) the world. Correspondence
          is invited and should be sent to Dan Visel, responsible for all errors
          herein,{" "}
          <a href="mailto:dbvisel@gmail.com" style={{ fontWeight: "normal" }}>
            <em>dbvisel@gmail.com</em>
          </a>
          .
        </p>
      </div>
    </div>
  );
}
