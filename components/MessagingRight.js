import styles from "../styles/messaging.module.css";
import Image from "next/image";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Messages from "../components/Messages";
import { useSelector } from "react-redux";
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
  const [messages, setMessages] = useState(null);
  const [User, setUser] = useState(null);

  // const getMessages =  () => {
  //   const data = {
  //     senderId: user._id,
  //     receiverId: id,
  //   };
  //   socket.emit("messages", data);
  // };
  // const getSingleUser = async () => {
  //    socket.emit("singleUser", id);
  // };

  useEffect(() => {
    socket.on("saved!!!", () => {
      console.log("message recieved!!!!!!");
    });
    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    if (id) {
      // getMessages();
      // getSingleUser();
      const data = {
        senderId: user._id,
        receiverId: id,
      };
      socket.emit("messages", data);
      socket.emit("singleUser", id);

      return () => socket.disconnect();
    }
  }, [id]);

  useEffect(() => {
    socket.on("Messages", (messages) => {
      setMessages([...messages]);
    });
    socket.on("SingleUser", (UserInfo) => {
      setUser([...UserInfo]);
    });
    return () => socket.disconnect();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const newMessage = {
      avatar: user.avatar,
      firstName: user.firstName,
      lastName: user.lastName,
      time: time,
      message: message,
      senderId: user._id,
      receiverId: id && id,
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
              {User && User.firstName} {User && User.lastName}
            </section>
            <section className={styles.messagingRight_messages_title_right}>
              <MoreHorizIcon />
            </section>
          </section>
          <section className={styles.messagingRight_messages_body}>
            {messages
              ? messages.map((messages) => (
                  <Messages
                    key={messages._id}
                    firstName={messages.firstName}
                    lastName={messages.lastName}
                    avatar={messages.avatar}
                    time={messages.time}
                    message={messages.message}
                  />
                ))
              : "loading messages"}
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
