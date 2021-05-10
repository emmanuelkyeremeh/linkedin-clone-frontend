import styles from "../styles/Login.module.css";
import Image from "next/image";
const LoginNav = () => {
  return (
    <nav className={styles.loginNav}>
      <div className={styles.loginNav_imageContainer}>
        <Image
          src="/Linkedin-Logo.png"
          width="120"
          height="120"
          className={styles.loginNav_image}
        />
      </div>
      <div className={styles.loginNav_buttonContainer}>
        <button
          className={styles.loginNav_button}
          onClick={() => window.location.assign("/signup")}
        >
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default LoginNav;
