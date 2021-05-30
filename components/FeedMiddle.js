import styles from "../styles/feed.module.css";
import { Avatar } from "@material-ui/core";
import FeedNavTopUpperIcon from "../components/FeedNavTopUpperIcon";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Posts from "../components/Posts";
import io from "socket.io-client";
import { useEffect } from "react";

const FeedMiddle = () => {
  const socket = io("http://localhost:4000");

  useEffect(() => {
    socket.on("kepler", (res) => {
      console.log(res);
    });
    return () => {
      socket.off();
    };
  }, []);
  return (
    <main className={styles.feedMiddleContainer}>
      <header className={styles.feedMiddleContainer_top}>
        <section className={styles.feedMiddleContainer_top_upper}>
          <Avatar />
          <input
            type="text"
            placeholder="Start a Post"
            className={styles.feedMiddleContainer_top_upper_text}
          />
        </section>
        <section className={styles.feedMiddleContainer_top_lower}>
          <FeedNavTopUpperIcon
            Icon={<PhotoIcon style={{ color: "green" }} />}
            text="Photo"
          />
          <FeedNavTopUpperIcon
            Icon={<YouTubeIcon style={{ color: "red" }} />}
            text="Video"
          />
          <FeedNavTopUpperIcon
            Icon={<EventNoteIcon style={{ color: "orange" }} />}
            text="Event"
          />
          <FeedNavTopUpperIcon
            Icon={<AssignmentIcon style={{ color: "red" }} />}
            text="Write article"
          />
        </section>
      </header>
      <section className={styles.feedMiddleContainer_bottom}>
        <Posts />
      </section>
    </main>
  );
};

export default FeedMiddle;
