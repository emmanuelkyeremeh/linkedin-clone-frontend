import styles from "../styles/feed.module.css";
import { Avatar } from "@material-ui/core";
import Moment from "react-moment";
import Image from "next/image";
import FeedPostReaction from "../components/FeedPostReaction";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import MoreHorizOutlined from "@material-ui/icons/MoreHorizOutlined";
import Link from "next/link";

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
          <MoreHorizOutlined />
        </section>
      </section>
      <Image
        className={styles.feedPostsContainer_image}
        src="/2-25045_stephen-curry-wallpaper-photo-stephen-curry-wallpaper-desktop.jpg"
        width="500"
        height="500"
      />
      <section className={styles.feedPostsContainer_reaction}>
        <FeedPostReaction
          Icon={<ThumbUpAltOutlinedIcon style={{ color: "gray" }} />}
          text="Like"
        />
        <FeedPostReaction
          Icon={<ChatOutlinedIcon style={{ color: "gray" }} />}
          text="Comment"
        />
        <FeedPostReaction
          Icon={<RedoOutlinedIcon style={{ color: "gray" }} />}
          text="Share"
        />
        <FeedPostReaction
          Icon={<SendOutlinedIcon style={{ color: "gray" }} />}
          text="Send"
        />
      </section>
      <section className={styles.feedMiddleContainer_top_upper}>
        <Avatar />
        <input
          type="text"
          placeholder="Add a comment"
          className={styles.feedPostsBottom_text}
        />
      </section>
      <section className={styles.feedPostsCommentContainer}>
        <Avatar />
        <section className={styles.feedPostsComment}>
          <section className={styles.feedPostsComment_left}>
            <h3 className={styles.feedPostsComment_left_title}>
              <Link href="/">Emmanuel Kyeremeh</Link>
            </h3>
            <p className={styles.feedPostsComment_left_bio}>
              Student at Kwame Nkrumah University of Science and Technology
            </p>
            <p className={styles.feedPostsComment_left_comment}>
              I love this post
            </p>
          </section>
          <section className={styles.feedPostsComment_right}>
            <Moment
              className={styles.feedPostsComment_right_moment}
              fromNow
              ago
            >
              Thu May 13 2021 12:48:18 GMT+0000
            </Moment>
            <MoreHorizOutlined />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Posts;