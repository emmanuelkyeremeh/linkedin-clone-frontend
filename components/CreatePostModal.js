import Modal from "@material-ui/core/Modal";
import styles from "../styles/feed.module.css";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import { socket } from "../ioUtils";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../store/actions/imageActions";
import axios from "axios";

const CreatePostModal = ({ open, handleClose }) => {
  const imageData = useSelector((state) => state.UploadImage);
  const { error } = imageData;
  const loginData = useSelector((state) => state.userLogin);
  const { userDataLinkedin } = loginData;
  const [image, setimage] = useState("");
  const [caption, setcaption] = useState("");

  const newDate = new Date();
  const time = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;

  const userId = userDataLinkedin._id;
  console.log(userId);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    let postImage = "";
    let postImage_filename = "";

    if (image) {
      const newImage = new File([image], `${uuid()}${image.name}`, {
        type: image.type,
      });
      postImage_filename = newImage.name;
      const imageData = new FormData();
      imageData.append("image", newImage);
      await dispatch(uploadImage(imageData));

      if (!error) {
        const actualImageData = await axios.get(
          `http://localhost:4000/api/file/${postImage_filename}`
        );
        postImage = actualImageData.data;
      }
    }
    const Post = {
      userId,
      postImage,
      postImage_filename,
      time,
      caption,
    };
    socket.emit("createPost", Post);
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
            name={caption}
            value={caption}
            onChange={(e) => setcaption(e.target.value)}
            placeholder="What do you want to talk about?"
          />
        </section>
        <section className={styles.createPostModal_bottom}>
          <input type="file" onChange={(e) => setimage(e.target.files[0])} />
          <button
            onClick={submitHandler}
            className={styles.createPostModal_bottom_button}
          >
            Post
          </button>
        </section>
      </section>
    </Modal>
  );
};

export default CreatePostModal;
