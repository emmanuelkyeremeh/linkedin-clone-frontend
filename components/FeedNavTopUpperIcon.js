import styles from "../styles/feed.module.css";

const FeedNavTopUpperIcon = ({ Icon, text }) => {
  return (
    <section className={styles.feedNavTopUpperIcon}>
      <section>{Icon}</section>
      <section className={styles.feedNavTopUpperIcon_text}>{text}</section>
    </section>
  );
};

export default FeedNavTopUpperIcon;
