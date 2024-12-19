import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: ""
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    axios
      .post("http://localhost:6969/signup", state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form className="signup" onSubmit={HandleSubmit}>
        <h1>Create account</h1>
        <h2>
          Already have an account? <span>Sign in</span>
        </h2>

        <div className="signup__field">
          <input
            className="signup__input"
            type="text"
            name="username"
            onChange={HandleChange}
            required
          />
          <label className="signup__label">Username</label>
        </div>

        <div className="signup__field">
          <input
            className="signup__input"
            type="text"
            name="email"
            onChange={HandleChange}
            required
          />
          <label className="signup__label">Email</label>
        </div>

        <div className="signup__field">
          <input
            className="signup__input"
            type="password"
            name="password"
            onChange={HandleChange}
            required
          />
          <label className="signup__label">Password</label>
        </div>

        <input className="button" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Signup;
