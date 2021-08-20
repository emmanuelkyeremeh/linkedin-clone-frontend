import styles from "../styles/messaging.module.css";
import { Avatar } from "@material-ui/core";
import { socket } from "../ioUtils";
const MessageUsers = ({ firstName, lastName, id, avatar, className }) => {
  const idSender = () => {
    socket.emit("idProp", id);
    console.log(id);
  };
  return (
    <section
      className={`${styles.messageUsersContainer} ${styles[className]}`}
      onClick={idSender}
    >
      <section className={styles.messageUsers_avatar}>
        <Avatar src={`data:image/jpeg;base64,${avatar}`} />
      </section>
      <section className={styles.messageUsers_right}>
        <section className={styles.messageUsers_rightLeft}>
          <section className={styles.messageUsers_rightLeft_name}>
            {firstName} {lastName}
          </section>
          <section className={styles.messageUsers_rightLeft_text}>
            Thanks for the cowries
          </section>
        </section>
        <section className={styles.messageUsers_rightRight}>April 3</section>
      </section>
    </section>
  );
};

export default MessageUsers;
