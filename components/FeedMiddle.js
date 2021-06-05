import styles from "../styles/feed.module.css";
import { Avatar } from "@material-ui/core";
import FeedNavTopUpperIcon from "../components/FeedNavTopUpperIcon";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Posts from "../components/Posts";
import { useEffect, useState } from "react";
import CreatePostModal from "./CreatePostModal";
import { socket } from "../ioUtils";

const FeedMiddle = () => {
  const [AllPosts, setAllPosts] = useState([]);
  useEffect(() => {
    socket.on("getPosts", (posts) => {
      console.log(posts);
      setAllPosts([...posts]);
      console.log(AllPosts);
    });
    return () => {
      socket.off();
    };
  }, []);
  useEffect(() => {
    socket.on("createPostSuccess", (newpost) => {
      AllPosts.push(newpost);
      console.log(AllPosts);
    });
    return () => {
      socket.off();
    };
  }, []);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <main className={styles.feedMiddleContainer}>
      <header className={styles.feedMiddleContainer_top}>
        <section className={styles.feedMiddleContainer_top_upper}>
          <Avatar />
          <input
            type="text"
            placeholder="Start a Post"
            className={styles.feedMiddleContainer_top_upper_text}
            onClick={() => setOpen(true)}
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
        {AllPosts
          ? AllPosts.map((post) => (
              <Posts
                key={post._id}
                caption={post.caption}
                time={post.time}
                image={post.image}
                userid={post.userId}
              />
            ))
          : null}

        <CreatePostModal open={open} handleClose={handleClose} />
      </section>
    </main>
  );
};

export default FeedMiddle;
