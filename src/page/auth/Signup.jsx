import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoAlertCircle } from "react-icons/io5";
import { useState } from "react";
import { auth } from "../../fireConfig/FireConfig";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { setInitialDoc } from "../../component/customFunction/SetInitialDoc";
import "./auth.css";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const ErrorMessage = (msg) => {
    setErrorMsg(msg);

    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  const UserAuthWithEmailAndPassword = async (e) => {
    e.preventDefault();

    if (userName === "" || userEmail === "" || userPassword === "") {
      ErrorMessage("Please fill all the required fields.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      await updateProfile(auth.currentUser, {
        displayName: `${userName} ${userLastName}`.trim(),
      });
      setInitialDoc(userEmail);
      navigate("/profile");
    } catch (e) {
      ErrorMessage(e.message);
    }
  };

  const UserAuthWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      setInitialDoc(auth.currentUser.email);
      navigate("/profile");
    } catch (e) {
      ErrorMessage(e.message);
    }
  };

  return (
    <section className="auth-container signup-container">
      <div className="auth-content">
        <div className="auth-content-left">
          <img src="/auth-signup.webp" alt="auth-image" loading="lazy" />
        </div>

        <div className="auth-content-right">
          <div className="auth-header">
            <h2 className="auth-header-title">Sign Up</h2>

            <p className="auth-header-desc">Unlock Your World</p>
          </div>

          <form
            className="auth-form"
            onSubmit={(e) => UserAuthWithEmailAndPassword(e)}
          >
            {ErrorMsg !== "" && (
              <span className="auth-error">
                <IoAlertCircle /> {ErrorMsg}
              </span>
            )}

            <div className="form-item has-sub-item">
              <div className="form-sub-item">
                <label htmlFor="name">
                  <span>*</span>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="form-sub-item">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  value={userLastName}
                  onChange={(e) => setUserLastName(e.target.value)}
                />
              </div>
            </div>

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
                autoComplete="on"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>

            <button className="auth-btn auth-btn-primary">Sign Up</button>
          </form>

          <button
            className="auth-btn auth-btn-secondary"
            onClick={() => UserAuthWithGoogle()}
          >
            <FcGoogle /> Sign Up With Google
          </button>

          <span className="auth-signin-signup">
            Already have an account? <Link to="/">Sign In</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Signup;
