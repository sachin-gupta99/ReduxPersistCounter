import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const Auth = () => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();

    if (
      emailRef.current.value.includes("@") &&
      passwordRef.current.value.length > 0
    ) {
      dispatch(authActions.login());
    } else return;
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={SubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
