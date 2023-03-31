import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
      location: location,
      age: age,
    };
    // console.log(payload);
    fetch(`/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup_div">
      <h3>Signup Page</h3>
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
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Signup;
