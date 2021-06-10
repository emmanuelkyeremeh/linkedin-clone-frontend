import Nav from "../components/FeedNav";
import styles from "../styles/messaging.module.css";
import MessagingRight from "../components/MessagingRight";
import MessageUsers from "../components/MessageUsers";
const messaging = () => {
  return (
    <>
      <Nav />
      <main className={styles.messagingContainer}>
        <aside className={styles.messagingLeft}>
          <section className={styles.messagingLeft_header}>Messaging</section>
          <section className={styles.messagingLeft_users}>
            <MessageUsers />
          </section>
        </aside>
        <aside className={styles.messagingRight}>
          <MessagingRight />
        </aside>
      </main>
    </>
  );
};

export default messaging;
