// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import userContext from "../Context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

const{setUser} =useContext(userContext)
 
  const handlesubmit = (e) => {
    e.preventDefault() 
    //ye islie karte hai submit karne par value kahi na kahi url ke through kahi na kahi chal jata hai islie ham use karte hai.. 
    setUser({username,password })
  };
  return ( 
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <input type="text" placeholder="password" value={password} 
        onChange={(e) => {
          setpassword(e.target.value);
        }}/>
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}

export default Login;
