import styles from "../styles/feed.module.css";
import { Avatar } from "@material-ui/core";
const FeedRightUser = () => {
  return (
    <section className={styles.feedRightUserContainer}>
      <Avatar className={styles.FeedRightUser_image} />
      <section className={styles.feedRightUser_body}>
        <h1 className={styles.feedRightUser_name}>Emmanuel Kyeremeh</h1>
        <p className={styles.FeedRightUser_bio}>
          Student at Kwame Nkrumah University of Science and Technology
        </p>
        <button className={styles.FeedRightUser_button}>Connect</button>
      </section>
    </section>
  );
};

export default FeedRightUser;
