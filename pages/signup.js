import styles from "../styles/signup.module.css";
import Image from "next/image";

const signup = () => {
  return (
    <div className={styles.signupContainer}>
      <header className={styles.signupHeader}>
        <Image
          className={styles.signupHeader_image}
          src="/Linkedin-Logo.png"
          width="150"
          height="150"
        />
      </header>
      <section className={styles.signupSection}>
        <h1>Make the most of your professional life</h1>
      </section>
      <form className={styles.signupForm}>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Bio</label>
        <input type="text" />
        <input type="file" className={styles.signupFileUpload} />
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <button type="submit" className={styles.signupButton}>
          Agree and Join
        </button>
        <br />
        <section className={styles.signupSectionBottom}>
          Already on Linkedin?{" "}
          <span onClick={(e) => window.location.assign("/")}>Sign in</span>
        </section>
      </form>
    </div>
  );
};

export default signup;
