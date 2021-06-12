import styles from "../styles/messaging.module.css";
import Image from "next/image";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Messages from "../components/Messages";
const MessagingRight = () => {
  return (
    <>
      {/* <section className={styles.messagingRight_image_container}>
        <Image src="/linkedin-message.svg" width="100px" height="100px" />
        <p className={styles.messagingRight_image_message}>
          Select a message to start a new conversation
        </p>
      </section> */}
      <section className={styles.messagingRight_messages_container}>
        <section className={styles.messagingRight_messages_title}>
          <section className={styles.messagingRight_messages_title_left}>
            Emmanuel Kepler
          </section>
          <section className={styles.messagingRight_messages_title_right}>
            <MoreHorizIcon />
          </section>
        </section>
        <section className={styles.messagingRight_messages_body}>
          <Messages />
        </section>
        <section className={styles.messagingRight_messages_inputContainer}>
          <textarea
            className={styles.messagingRight_messages_inputContainer_input}
            placeholder="Write Something"
            name=""
            id=""
            cols="30"
            rows="3"
          ></textarea>
          <button
            className={styles.messagingRight_messages_inputContainer_button}
          >
            Post
          </button>
        </section>
      </section>
    </>
  );
};

export default MessagingRight;
