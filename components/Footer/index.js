import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made by{` `}
        <a href="https://withhiddennoise.net">Dan Visel</a>, 2022.
      </p>
    </footer>
  );
}
