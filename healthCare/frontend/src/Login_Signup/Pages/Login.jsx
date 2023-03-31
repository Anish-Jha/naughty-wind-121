import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };
    // console.log(payload);
    fetch(`/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      //   .then((res) => console.log(res))
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("fill correct  details");
      });
  };

  return (
    <>
      <div className="login_div">
        <h3>Login Page</h3>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Login;
