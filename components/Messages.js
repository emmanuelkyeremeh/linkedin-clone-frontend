import styles from "../styles/messaging.module.css";
import { Avatar } from "@material-ui/core";
const Messages = ({ avatar, firstName, lastName, time, message }) => {
  return (
    <section className={styles.messagesContainer}>
      <section className={styles.message_avatar}>
        <Avatar src={`data:image/jpeg;base64,${avatar}`} />
      </section>
      <section className={styles.message_body}>
        <section className={styles.message_title}>
          <div className={styles.message_header}>
            {firstName} {lastName}
          </div>
          <div className={styles.message_timestamp}>{time.slice(9, 14)}</div>
        </section>
        <section className={styles.message_body_text}>{message}</section>
      </section>
    </section>
  );
};

export default Messages;
