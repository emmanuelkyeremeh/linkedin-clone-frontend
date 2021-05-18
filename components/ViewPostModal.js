import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import styles from "../styles/feed.module.css";
import { Avatar } from "@material-ui/core";
import Image from "next/image";
import moment from "moment";
import Moment from "react-moment";
import CloseIcon from "@material-ui/icons/Close";
import FeedPostReaction from "./FeedPostReaction";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import RedoRoundedIcon from "@material-ui/icons/RedoRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import Link from "next/link";
import MoreHorizOutlined from "@material-ui/icons/MoreHorizOutlined";

const ViewPostModal = ({ open, handleClose }) => {
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [modalStyle] = useState(getModalStyle);

  const newDate = new Date();
  const jsDate = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  const date = moment(`${jsDate}`, "DD-MM-YYYY hh:mm:ss");

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={styles.viewPostModal}
      >
        <section style={modalStyle} className={styles.viewPostModal_container}>
          <section className={styles.viewPostModal_left}>
            <Image
              src="/2-25045_stephen-curry-wallpaper-photo-stephen-curry-wallpaper-desktop.jpg"
              width="300"
              height="500"
            />
          </section>
          <section className={styles.viewPostModal_right}>
            <section className={styles.viewPostModal_right_top_container}>
              <section className={styles.viewPostModal_right_top}>
                <section className={styles.viewPostModal_right_top_left}>
                  <Avatar />
                </section>
                <section className={styles.viewPostModal_right_top_right}>
                  <h3 className={styles.viewPostModal_right_top_name}>
                    Emmanuel Kyeremeh
                  </h3>
                  <p className={styles.viewPostModal_right_top_bio}>
                    Student at Kwame Nkrumah Unviversity of Science and
                    Technology
                  </p>
                  <Moment
                    style={{ fontSize: "0.6rem", color: "gray" }}
                    className={styles.viewPostModal_right_top_date}
                    fromNow
                  >
                    {date}
                  </Moment>
                </section>
              </section>
              <section className={styles.viewPostModal_container_close}>
                <CloseIcon
                  className={styles.viewPostModal_container_close_icon}
                  onClick={handleClose}
                />
              </section>
            </section>
            <section className={styles.viewPostModal_right_caption}>
              I love you guys very much!
            </section>
            <hr className={styles.viewPostModal_right_hr} />
            <section className={styles.viewPostModal_right_reaction}>
              <FeedPostReaction
                Icon={<ThumbUpAltOutlinedIcon style={{ color: "gray" }} />}
                text="Like"
              />
              <FeedPostReaction
                Icon={<CommentOutlinedIcon style={{ color: "gray" }} />}
                text="Comment"
              />
              <FeedPostReaction
                Icon={<RedoRoundedIcon style={{ color: "gray" }} />}
                text="Share"
              />
              <FeedPostReaction
                Icon={<SendRoundedIcon style={{ color: "gray" }} />}
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
                    Student at Kwame Nkrumah University of Science and
                    Technology
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
          </section>
        </section>
      </Modal>
    </>
  );
};

export default ViewPostModal;
