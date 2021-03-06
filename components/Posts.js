import styles from "../styles/feed.module.css";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import Moment from "react-moment";
import Image from "next/image";
import FeedPostReaction from "../components/FeedPostReaction";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import MoreHorizOutlined from "@material-ui/icons/MoreHorizOutlined";
import Link from "next/link";
import moment from "moment";
import ViewPostModal from "../components/ViewPostModal";

const Posts = ({ image, caption, time, userId }) => {
  const date = moment(time, "DD-MM-YYYY hh:mm:ss");
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };
  const handleOpen = () => {
    setopen(true);
  };
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
              {date}
            </Moment>
          </section>
        </section>
        <section className={styles.feedPostsContainer_header_right}>
          <MoreHorizOutlined />
        </section>
      </section>
      <section className={styles.feedPostsContainer_caption}>{caption}</section>
      {image ? (
        <Image
          className={styles.feedPostsContainer_image}
          src={`data:image/jpeg;base64,${image}`}
          onClick={() => setopen(true)}
          width="500"
          height="500"
        />
      ) : null}

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
              {date}
            </Moment>
            <MoreHorizOutlined />
          </section>
        </section>
      </section>
      <ViewPostModal
        open={open}
        handleClose={handleClose}
        image={image}
        caption={caption}
        time={time}
        userId={userId}
      />
    </section>
  );
};

export default Posts;
