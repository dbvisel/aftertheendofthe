import Link from "next/link";
import styles from "./hhheader.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          <Link href="/">
            <a>After the end of the</a>
          </Link>
          {title ? `: ${title}` : null}
        </h1>
      </div>
    </header>
  );
}
