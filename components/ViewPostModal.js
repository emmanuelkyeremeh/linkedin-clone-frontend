import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import styles from "../styles/feed.module.css";
import { Avatar } from "@material-ui/core";
import Image from "next/image";
import moment from "moment";
import Moment from "react-moment";

const ViewPostModal = ({ open, handleClose }) => {
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [modalStyle] = useState(getModalStyle);

  const newDate = new Date();
  const jsDate = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  const date = moment(`${jsDate}`, "DD-MM-YYYY hh:mm:ss");

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={styles.viewPostModal}
      >
        <section style={modalStyle} className={styles.viewPostModal_container}>
          <section className={styles.viewPostModal_left}>
            <Image
              src="/2-25045_stephen-curry-wallpaper-photo-stephen-curry-wallpaper-desktop.jpg"
              width="300"
              height="300"
            />
          </section>
          <section className={styles.viewPostModal_right}>
            <section className={styles.viewPostModal_right_top}>
              <section className={styles.viewPostModal_right_top_left}>
                <Avatar />
              </section>
              <section className={styles.viewPostModal_right_top_right}>
                <h3 className={styles.viewPostModal_right_top_name}>
                  Emmanuel Kyeremeh
                </h3>
                <p className={styles.viewPostModal_right_top_bio}>
                  Student at Kwame Nkrumah Unviversity of Science and Technology
                </p>
                <Moment
                  style={{ fontSize: "0.7rem", color: "gray" }}
                  className={styles.viewPostModal_right_top_date}
                  fromNow
                >
                  {date}
                </Moment>
              </section>
            </section>
          </section>
        </section>
      </Modal>
    </>
  );
};

export default ViewPostModal;
