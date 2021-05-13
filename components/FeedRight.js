import styles from "../styles/feed.module.css";
import FeedRightUser from "../components/FeedRightUser";
import Image from "next/image";
const FeedRight = () => {
  return (
    <aside className={styles.feedRightContainer}>
      <section className={styles.feedRight_top}>
        <section className={styles.feedRight_top_header}>
          Add to your feed
        </section>
        <section>
          <FeedRightUser />
          <FeedRightUser />
          <FeedRightUser />
        </section>
      </section>
      <section className={styles.feedRight_top_middle}>
        <h2>Today's most viewed Courses</h2>
        <h3>1. The Six Morning habits of performace</h3>
        <p>John Ullmen</p>
        <h3>2. Executive Influence</h3>
        <p>Stacey Gordon</p>
        <h3>3. Unconscious</h3>
        <p>Pete Mockatis</p>
      </section>
      <section className={styles.feedRight_bottom}>
        <Image src="/linkedin-advert-image.jpg" width="290" height="240" />
      </section>
    </aside>
  );
};

export default FeedRight;
