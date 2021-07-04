import Nav from "../components/FeedNav";
import styles from "../styles/messaging.module.css";
import MessagingRight from "../components/MessagingRight";
import MessageUsers from "../components/MessageUsers";
import { socket } from "../ioUtils";
import { useState, useEffect } from "react";
const messaging = () => {
  const [users, setUsers] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    socket.on("users", (users) => {
      setUsers([...users]);
      console.log(users);
    });
    return () => socket.disconnect();
  }, []);
  return (
    <>
      <Nav />
      <main className={styles.messagingContainer}>
        <aside className={styles.messagingLeft}>
          <section className={styles.messagingLeft_header}>Messaging</section>
          <section className={styles.messagingLeft_users}>
            {users
              ? users.map((user) => (
                  <MessageUsers
                    key={user._id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    id={user._id}
                    avatar={user.avatar}
                    onClick={() => setUserId(user._id)}
                  />
                ))
              : "loading users..."}
          </section>
        </aside>
        <aside className={styles.messagingRight}>
          <MessagingRight id={userId} />
        </aside>
      </main>
    </>
  );
};

export default messaging;
