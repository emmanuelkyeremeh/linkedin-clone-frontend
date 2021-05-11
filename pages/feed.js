import styles from "../styles/feed.module.css";
import Nav from "../components/FeedNav";
import FeedLeft from "../components/FeedLeft";
import FeedMiddle from "../components/FeedMiddle";
import FeedRight from "../components/FeedRight";

const feed = () => {
  return (
    <div className={styles.feedContainer}>
      <Nav />
      <main className={styles.feedBody}>
        <FeedLeft />
        <FeedMiddle />
        <FeedRight />
      </main>
    </div>
  );
};

export default feed;
