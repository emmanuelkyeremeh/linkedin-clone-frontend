import styles from "../styles/feed.module.css";
import Image from "next/image";
import { Avatar } from "@material-ui/core";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const FeedLeft = () => {
  return (
    <aside className={styles.feedLeft_container}>
      <section className={styles.feedLeftTop}>
        <Image
          className={styles.feedLeftTop_image}
          src="/linkedin-dummy-header.jpg"
          width="200"
          height="50"
        />
        <header className={styles.feedLeftTop_header}>
          <Avatar className={styles.feedLeftTop_header_image} />
          <section className={styles.feedLeftTop_header_name}>
            Emmanuel Kyeremeh
          </section>
          <section className={styles.feedLeftTop_header_bio}>
            Student at Kwame Nkrumah University of Science and Technology
          </section>
        </header>
        <br />
        <hr className={styles.feedLeftTop_hr} />
        <section className={styles.feedLeftTop_body}>
          <p>Profile Visits</p>
          <p>Video views</p>
        </section>
        <hr className={styles.feedLeftTop_hr} />
        <section className={styles.feedLeftTop_footer}>
          <CallToActionIcon style={{ color: "gold", fontSize: "1.1rem" }} />
          <p>Try Premium Free for one month</p>
        </section>
        <hr className={styles.feedLeftTop_hr} />
        <section className={styles.feedLeftTop_footer}>
          <BookmarkIcon style={{ color: "grey", fontSize: "1.1rem" }} />
          <p>My Items</p>
        </section>
      </section>
      <section className={styles.feedLeftBottom}></section>
    </aside>
  );
};

export default FeedLeft;
