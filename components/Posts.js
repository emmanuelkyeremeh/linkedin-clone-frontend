import styles from "../styles/feed.module.css";
import { Avatar } from "@material-ui/core";
import Moment from "react-moment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Image from "next/image";
const Posts = () => {
  return (
    <section className={styles.feedPostsContainer}>
      <section className={styles.feedPostsContainer_header}>
        <section className={styles.feedPostsContainer_header_left}>
          <Avatar />
          <section className={styles.feedPostsContainer_header_left_desc}>
            <p className={styles.feedPostsContainer_header_left_name}>
              Emmanuel Kyeremeh
            </p>
            <p className={styles.feedPostsContainer_header_left_bio}>
              Student at Kwame Nkrumah University of Science and Technology
            </p>
            <Moment
              style={{ fontSize: "0.7rem", color: "gray" }}
              className={styles.feedPostsContainer_header_left_moment}
              fromNow
            >
              Wed May 12 2021 17:43:25 GMT+0000
            </Moment>
          </section>
        </section>
        <section className={styles.feedPostsContainer_header_right}>
          <MoreVertIcon />
        </section>
      </section>
      <Image
        className={styles.feedPostsContainer_image}
        src="/2-25045_stephen-curry-wallpaper-photo-stephen-curry-wallpaper-desktop.jpg"
        width="500"
        height="500"
      />
    </section>
  );
};

export default Posts;
