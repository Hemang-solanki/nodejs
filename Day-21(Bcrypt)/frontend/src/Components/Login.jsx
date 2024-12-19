import { useState } from 'react';

const Login = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="login-container">
      <form className="signup">
        <h1>Login</h1>
        <h2>
          Don&apos;t have an account? <span href="/signup">Sign up</span>
        </h2>

        <div className="signup__field">
          <input
            className="signup__input"
            type="email"
            name="email"
            id="email"
            required
          />
          <label className="signup__label">Email</label>
        </div>

        <div className="signup__field">
          <input
            className="signup__input"
            type="password"
            name="password"
            id="password"
            required
          />
          <label className="signup__label">Password</label>
        </div>

        <button type="submit">Login</button>
        
        <div className="forgot-password">
          <span onClick={() => setIsPopupOpen(true)}>Forgot Password?</span>
        </div>
      </form>

      {/* Change Password Popup */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={(e) => {
          if (e.target.className === 'popup-overlay') setIsPopupOpen(false);
        }}>
          <div className="popup-content">
            <button 
              className="close-button"
              onClick={() => setIsPopupOpen(false)}
            >
              ×
            </button>
            <h2>Change Password</h2>
            <p>Please enter your current password and new password</p>
            
            <form>
              <div className="signup__field">
                <input
                  className="signup__input"
                  type="email"
                  name="email"
                  id="resetEmail"
                  required
                />
                <label className="signup__label">Email</label>
              </div>

              <div className="signup__field">
                <input
                  className="signup__input"
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  placeholder=" "
                  required
                />
                <label className="signup__label">Current Password</label>
              </div>

              <div className="signup__field">
                <input
                  className="signup__input"
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder=" "
                  required
                />
                <label className="signup__label">New Password</label>
              </div>

              <div className="signup__field">
                <input
                  className="signup__input"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder=" "
                  required
                />
                <label className="signup__label">Confirm New Password</label>
              </div>

              <button type="submit">Change Password</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
