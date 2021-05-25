import styles from "../styles/signup.module.css";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
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
  const [avatar, setAvatar] = useState(null);
  const [avatar_filename, setAvatar_filename] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (avatar) {
      const newAvatar = new File([avatar], `${uuid()}${avatar.name}`, {
        type: avatar.type,
      });
      setAvatar_filename(newAvatar.name);
      const imageData = new FormData();
      imageData.append("image", newAvatar);
      await dispatch(uploadImage(imageData));

      const actualAvatarData = await axios.get(`/api/file/${avatar_filename}`);
      actualAvatar = actualAvatarData.data;
    }

    await dispatch(
      userSignup(
        firstName,
        lastName,
        bio,
        avatar,
        avatar_filename,
        email,
        password
      )
    );

    // router.push("/feed");
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
          onChange={(e) => setAvatar(e.target.files[0])}
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
