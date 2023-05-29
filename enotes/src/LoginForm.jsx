import { Link } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const handleLogin = () => {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "3rem",
        }}
      >
        <h3 style={{ alignSelf: "center", marginBottom: "1.5rem" }}>LOGIN</h3>
        <div>
          <label>username:</label>
          <input
            type="text"
            className="form-input"
            style={{ marginBottom: "2rem", marginTop: "0.6rem" }}
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label>Password:</label>
          <input
            type="password"
            className="form-input"
            style={{ marginBottom: "2rem", marginTop: "0.6rem" }}
            required
            minLength={6}
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <Link to="/">
            <button type="submit" className="btn" onClick={handleLogin}>
              Login
            </button>
          </Link>
          <Link to="/">
            <button className="btn">Logout</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
// Explanation:

// We import React and useState hooks from the 'react' module, and axios for making API requests.
// We create a functional component called 'Login'.
// Inside the component, we define two pieces of state using useState hooks: 'email' and 'password'.
// We define a handleSubmit function that will be called when the user submits the login form. It will send a POST request to the '/auth/login' endpoint with the email and password values.
// The form element has an onSubmit event that will trigger the handleSubmit function when the user submits the form.
// The input elements for email and password are controlled components that set the email and password state values on change.
// Finally, we export the Login component for use in other parts of the application.
// Note: This code assumes that you have already set up the server-side authentication logic using Passport, Local strategy, and Mongoose.
