import styles from "../styles/messaging.module.css";
import { Avatar } from "@material-ui/core";
const Messages = () => {
  return (
    <section className={styles.messagesContainer}>
      <section className={styles.message_avatar}>
        <Avatar />
      </section>
      <section className={styles.message_body}>
        <section className={styles.message_title}>
          <p className={styles.message_header}>Emmanuel Kyeremeh</p>
          <p className={styles.message_timestamp}>.4:53PM</p>
        </section>
        <section className={styles.message_body}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          possimus. Tempora, dicta! Reiciendis nihil velit aut tenetur. Itaque
          exercitationem deleniti ducimus mollitia explicabo voluptatem vero
          dignissimos magni quod. Aut, deserunt.
        </section>
      </section>
    </section>
  );
};

export default Messages;
