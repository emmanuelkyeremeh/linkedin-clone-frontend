import styles from "../styles/messaging.module.css";
import Image from "next/image";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Messages from "../components/Messages";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../ioUtils.js";
import { useState, useEffect } from "react";

const MessagingRight = ({ id }) => {
  const userData = useSelector((state) => state.userLogin);
  const { userDataLinkedin: user } = userData;
  const newDate = new Date();
  const time = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message recieved!", () => {
      console.log("message recieved!!!!!!");
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted!");
    const newMessage = {
      avatar: user.avatar,
      firstName: user.firstName,
      lastName: user.lastName,
      time: time,
      message: message,
      senderId: user._id,
      receiverId: "60c5319df5f43e39582cdb3a",
    };
    socket.emit("newMessage", newMessage);
  };
  return (
    <>
      {!id ? (
        <section className={styles.messagingRight_image_container}>
          <Image src="/linkedin-message.svg" width="100px" height="100px" />
          <p className={styles.messagingRight_image_message}>
            Select a message to start a new conversation
          </p>
        </section>
      ) : (
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
              name={message}
              onChange={(e) => setMessage(e.target.value)}
              spellCheck="true"
              id=""
              cols="30"
              rows="3"
            ></textarea>
            <button
              className={styles.messagingRight_messages_inputContainer_button}
              onClick={submitHandler}
            >
              Post
            </button>
          </section>
        </section>
      )}
    </>
  );
};

export default MessagingRight;
