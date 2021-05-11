import styles from "../styles/feed.module.css";
const FeedNavIcon = ({ Icon, text, OptionalIcon }) => {
  return (
    <div className={styles.feedNavIconContainer}>
      <div className={styles.feedNavIconContainer_icon}>{Icon}</div>
      <div className={styles.feedNavIconContainer_text}>
        <p>{text}</p>
        {""}
        {OptionalIcon}
      </div>
    </div>
  );
};

export default FeedNavIcon;
