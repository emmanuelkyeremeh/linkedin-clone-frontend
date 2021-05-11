import styles from "../styles/feed.module.css";
import Nav from "../components/FeedNav";

const feed = () => {
  return (
    <div className={styles.feedContainer}>
      <Nav />
    </div>
  );
};

export default feed;
