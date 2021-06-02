import Modal from "@material-ui/core/Modal";
import styles from "../styles/feed.module.css";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";

const CreatePostModal = ({ open, handleClose }) => {
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
        <section className={styles.createPostModal_middle}>
          <section className={styles.createPostModal_user}>
            <Avatar />
            <section className={styles.createPostModal_user_name}>
              <h3>Emmanuel Kyeremeh</h3>
              <button className={styles.createPostModal_user_button}>
                <PublicIcon /> <p>Anyone</p>
              </button>
            </section>
          </section>
          <textarea
            type="text"
            rows="7"
            colums="20"
            className={styles.createPostModal_textarea}
            name=""
            placeholder="What do you want to talk about?"
          />
        </section>
        <section className={styles.createPostModal_bottom}>
          <input type="file" />
          <button className={styles.createPostModal_bottom_button}>Post</button>
        </section>
      </section>
    </Modal>
  );
};

export default CreatePostModal;
