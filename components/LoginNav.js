import styles from "../styles/Login.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const LoginNav = () => {
  const router = useRouter();
  return (
    <nav className={styles.loginNav}>
      <div className={styles.loginNav_imageContainer}>
        <Image
          src="/Linkedin-Logo.svg"
          width="120"
          height="120"
          className={styles.loginNav_image}
        />
      </div>
      <div className={styles.loginNav_buttonContainer}>
        <button
          className={styles.loginNav_button}
          onClick={() => router.push("/signup")}
        >
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default LoginNav;
