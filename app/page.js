import styles from "./page.module.css";
import Feed from "./Components/Feed";
import InitialPosts from "./Components/InitialPosts";

export default function Home() {
  return (
    <main className={styles.main}>
      <InitialPosts />
    </main>
  );
}
