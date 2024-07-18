import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./auth.css";

const Signin = () => {
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

          <form className="auth-form">
            <div className="form-item">
              <label htmlFor="email">
                <span>*</span>
                Email
              </label>
              <input type="text" placeholder="Enter Your Email" />
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
              />
            </div>

            <button className="auth-btn auth-btn-primary">Sign In</button>
          </form>

          <button className="auth-btn auth-btn-secondary">
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
