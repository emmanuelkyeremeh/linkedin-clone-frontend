import styles from "../styles/signup.module.css";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signup as userSignup } from "../store/actions/userActions";
import uuid from "react-uuid";
import { uploadImage } from "../store/actions/imageActions";

const signup = () => {
  const router = useRouter();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const imageState = useSelector((state) => state.UploadImage);
  const { error } = imageState;

  const submitHandler = async (e) => {
    e.preventDefault();
    let avatar_filename = "";
    let avatar = "";
    if (image) {
      const newAvatar = new File([image], `${uuid()}${image.name}`, {
        type: image.type,
      });
      avatar_filename = newAvatar.name;
      const imageData = new FormData();
      imageData.append("image", newAvatar);
      await dispatch(uploadImage(imageData));

      if (error !== false) {
        const actualAvatarData = await axios.get(
          `http://localhost:4000/api/file/${avatar_filename}`
        );
        avatar = actualAvatarData.data;
        console.log(avatar);
      }
    }
    await dispatch(
      userSignup(
        firstName,
        lastName,
        avatar,
        avatar_filename,
        bio,
        email,
        password
      )
    );

    router.push("/feed");
  };
  return (
    <div className={styles.signupContainer}>
      <header className={styles.signupHeader}>
        <Image
          className={styles.signupHeader_image}
          src="/Linkedin-Logo.svg"
          width="150"
          height="150"
        />
      </header>
      <section className={styles.signupSection}>
        <h1>Make the most of your professional life</h1>
      </section>
      <form className={styles.signupForm} onSubmit={submitHandler}>
        <label>First Name</label>
        <input
          type="text"
          name={firstName}
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          name={lastName}
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <label>Bio</label>
        <input
          type="text"
          name={bio}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="file"
          className={styles.signupFileUpload}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label>Email</label>
        <input
          type="email"
          name={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name={password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.signupButton}>
          Agree and Join
        </button>
        <br />
        <section className={styles.signupSectionBottom}>
          Already on Linkedin?{" "}
          <span onClick={(e) => router.push("/")}>Sign in</span>
        </section>
      </form>
    </div>
  );
};

export default signup;
