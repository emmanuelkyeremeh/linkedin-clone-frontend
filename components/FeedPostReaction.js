import styles from "../styles/feed.module.css";
const FeedPostReaction = ({ Icon, text }) => {
  return (
    <section className={styles.FeedPostReaction}>
      <section>{Icon}</section>
      <section className={styles.FeedPostReaction_text}>{text}</section>
    </section>
  );
};

export default FeedPostReaction;
