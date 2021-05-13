import styles from "../styles/feed.module.css";
const FeedBottomHash = ({ text }) => {
  return (
    <section className={styles.feedBottomHash}>
      <section className={styles.feedBottomHash_hash}>#</section>
      <section className={styles.feedBottomHash_text}>{text}</section>
    </section>
  );
};

export default FeedBottomHash;
