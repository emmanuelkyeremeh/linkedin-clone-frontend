import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import styles from "../styles/feed.module.css";
import CloseIcon from "@material-ui/icons/Close";

const CreatePostModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onClose={handleClose}
    >
      <section className={styles.createPostModal}>
        <section className={styles.createPostModal_top}>
          <section className={styles.createPostModal_top_left}>
            Create a Post
          </section>
          <CloseIcon
            style={{ color: "rgb(119, 104, 104)", cursor: "pointer" }}
            onClick={handleClose}
          />
        </section>
        <hr className={styles.createPostModal_hr} />
      </section>
    </Modal>
  );
};

export default CreatePostModal;
