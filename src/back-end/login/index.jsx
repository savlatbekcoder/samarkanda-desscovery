import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const isLoggedIn = window.localStorage.getItem("issssseeeeeeLOOOOOOOgiiin");
  const login = (e) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    if (username === "admin" && password === "admin_password_top") {
      window.localStorage.setItem("issssseeeeeeLOOOOOOOgiiin", true);
      alert("Login Successful");
      navigate("/auth/as/back-end/admin");
    } else {
    }
  };
  const checkLogin = () => {
    if (isLoggedIn) {
      navigate("/auth/as/back-end/admin");
    }
  };
  checkLogin();
  return (
    <section>
      <div className="container login-con">
        <form onSubmit={login}>
          <h1>Login</h1>
          <br />
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
