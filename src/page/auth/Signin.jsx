import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoAlertCircle } from "react-icons/io5";
import { useState } from "react";
import { auth } from "../../fireConfig/FireConfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "./auth.css";

const Signin = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const ErroMessage = (msg) => {
    setErrorMsg(msg);

    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  const userAuthWithEmailAndPassword = async (e) => {
    e.preventDefault();

    if (userEmail === "" || userPassword === "") {
      ErroMessage("Please fill all the required fields.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
      navigate("/profile");
    } catch (e) {
      ErroMessage(e.message);
    }
  };

  const UserAuthWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/profile");
    } catch (e) {
      ErroMessage(e.message);
    }
  };

  return (
    <section className="auth-container signin-container">
      <div className="auth-content">
        <div className="auth-content-left">
          <img src="/auth-signin.webp" alt="auth-image" loading="lazy" />
        </div>

        <div className="auth-content-right">
          <div className="auth-header">
            <h2 className="auth-header-title">Sign In</h2>

            <p className="auth-header-desc">Unlock Your World</p>
          </div>

          <form
            className="auth-form"
            onSubmit={(e) => userAuthWithEmailAndPassword(e)}
          >
            {ErrorMsg !== "" && (
              <span className="auth-error">
                <IoAlertCircle /> {ErrorMsg}
              </span>
            )}

            <div className="form-item">
              <label htmlFor="email">
                <span>*</span>
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <div className="form-item">
              <label htmlFor="password">
                <span>*</span>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                autoComplete="on"
              />
            </div>

            <button className="auth-btn auth-btn-primary">Sign In</button>
          </form>

          <button
            className="auth-btn auth-btn-secondary"
            onClick={() => UserAuthWithGoogle()}
          >
            <FcGoogle /> Sign In With Google
          </button>

          <span className="auth-signin-signup">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Signin;
