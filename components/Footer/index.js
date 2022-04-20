import Link from "next/link";
import styles from "./fffooter.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <Link href={`/about`}>
          <a>About this project</a>
        </Link>
        . Made by{` `}
        <a href="https://withhiddennoise.net">Dan Visel</a>, 2022.
      </p>
    </footer>
  );
}
