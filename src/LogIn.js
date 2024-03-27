import React, { useState } from "react";
import "./style.css";

const generateCaptcha = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userType, setUserType] = useState(""); // ekane je state ta ase seta user er jonno

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputCaptcha.toUpperCase() !== captcha) {
      setErrorMessage("Captcha does not match.");
      setInputCaptcha("");
      return;
    }
    console.log("Logging in...");
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setInputCaptcha("");
  };

  return (
    <div className="login-container">
      <div className="user-type-options">
        <label>User Type:</label>
        <div>
          <input
            type="radio"
            id="systemAdmin"
            name="userType"
            value="System Admin"
            checked={userType === "System Admin"}
            onChange={(e) => setUserType(e.target.value)}
          />
          <label htmlFor="systemAdmin">System Admin</label>
        </div>
        <div>
          <input
            type="radio"
            id="stsManager"
            name="userType"
            value="STS Manager"
            checked={userType === "STS Manager"}
            onChange={(e) => setUserType(e.target.value)}
          />
          <label htmlFor="stsManager">STS Manager</label>
        </div>
        <div>
          <input
            type="radio"
            id="landfillManager"
            name="userType"
            value="Landfill Manager"
            checked={userType === "Landfill Manager"}
            onChange={(e) => setUserType(e.target.value)}
          />
          <label htmlFor="landfillManager">Landfill Manager</label>
        </div>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Captcha:</label>
            <input
              type="text"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
              required
            />
            <span className="captcha-text">{captcha}</span>
            <button type="button" onClick={refreshCaptcha}>Refresh Captcha</button>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit">Login</button>
        </form>
        <div className="password-reset-link">
          <a href="/reset-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
