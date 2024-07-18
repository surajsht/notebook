import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./auth.css";

const Signup = () => {
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

          <form className="auth-form">
            <div className="form-item has-sub-item">
              <div className="form-sub-item">
                <label htmlFor="name">
                  <span>*</span>
                  Name
                </label>
                <input type="text" placeholder="Enter Your Name" />
              </div>

              <div className="form-sub-item">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" placeholder="Enter Your Last Name" />
              </div>
            </div>

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

            <button className="auth-btn auth-btn-primary">Sign Up</button>
          </form>

          <button className="auth-btn auth-btn-secondary">
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
