import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          <Link href="/">
            <a>After the end of the</a>
          </Link>
          {title ? ` ${title}` : " world"}
        </h1>
      </div>
    </header>
  );
}
