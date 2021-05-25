import styles from "../styles/login.module.css";
import Nav from "../components/LoginNav";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/userActions";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2867B2",
    },
  },
});

export default function Home() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  const classes = useStyles();
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.loginMain}>
          <div className={styles.loginMain_text}>
            <h1>Welcome to your professional community</h1>
          </div>
          <form className={styles.loginForm}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name={email}
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className={classes.root}
              style={{ marginBottom: "20px", padding: "0px" }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name={password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.root}
              style={{ marginBottom: "20px", padding: "0px" }}
            />
            <button type="submit" className={styles.loginForm_button}>
              Sign in
            </button>
          </form>
        </main>
        <section className={styles.loginSection}>
          <Image src="/Linkedin.svg" width="800" height="800" />
        </section>
      </div>
    </>
  );
}
