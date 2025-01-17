import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className="font-mono">
      <ul className="flex flex-col md:flex-row md:space-x-4">
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.link}>
          <Link href="/about/projects">Projects</Link>
        </li>
        <li className={styles.link}>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
