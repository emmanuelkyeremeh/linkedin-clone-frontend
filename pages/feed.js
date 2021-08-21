import styles from "../styles/feed.module.css";
import Nav from "../components/FeedNav";
import FeedLeft from "../components/FeedLeft";
import FeedMiddle from "../components/FeedMiddle";
import FeedRight from "../components/FeedRight";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const feed = () => {
  const router = useRouter();
  const user = useSelector((state) => state.Login);
  if (!user) {
    router.push("/");
  }
  return (
    <div className={styles.feedContainer}>
      <Nav />
      <main className={styles.feedBody}>
        <FeedLeft />
        <FeedMiddle />
        <FeedRight />
      </main>
    </div>
  );
};

export default feed;
