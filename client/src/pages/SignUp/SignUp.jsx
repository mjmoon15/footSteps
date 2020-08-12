import React from "react";
import logo from "../../images/FPLogo.png";
import React, {useState} from "react";
import "./signup.css";
import axios from "axios"


const SignUp = (props) => {
  const [initials, setInitials] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
    const handleSubmit= (e)=>{
      e.preventDefault();
      console.log(e)
  
      axios
        .post("/api/signup", { initials: initials, username: username, password: password })
        .then((response) => {
          console.log(response);
          window.alert(`Successfully created new account with email: ${username}`);
          props.history.push("/login")
        })
        .catch((err) => {
          console.log(err);
        });
    }



  return (
    <div id="signupBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <h2>Sign Up</h2>
        <form id="signupInput">
          <input
            className="input"
            type="text"
            name="initials"
            placeholder="Enter your initials"
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Re-enter your password"
            required
          />
          <div className="row">
              <div className="col s12">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
