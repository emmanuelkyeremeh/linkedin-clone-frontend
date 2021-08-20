import Nav from "../components/FeedNav";
import styles from "../styles/messaging.module.css";
import MessagingRight from "../components/MessagingRight";
import MessageUsers from "../components/MessageUsers";
import { socket } from "../ioUtils";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const messaging = () => {
  const LoggedUser = useSelector((state) => state.userLogin);
  const { userDataLinkedin } = LoggedUser;
  const [users, setUsers] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    socket.on("users", (users) => {
      setUsers([...users]);
      console.log(users);
    });
    return () => socket.disconnect();
  }, []);
  useEffect(() => {
    socket.on("idprop", (id) => {
      setUserId(id);
      console.log(id);
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
                    className={
                      userDataLinkedin && userDataLinkedin._id === user._id
                        ? "DisplayNone"
                        : ""
                    }
                    firstName={user.firstName}
                    lastName={user.lastName}
                    id={user._id}
                    avatar={user.avatar}
                  />
                ))
              : "loading users..."}
          </section>
        </aside>
        <aside className={styles.messagingRight}>
          <MessagingRight id={userId && userId} />
        </aside>
      </main>
    </>
  );
};

export default messaging;
