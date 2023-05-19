// import { useState } from "react"
// import "./signup.css";
// // import axios from "axios"
// const Signup = () => {

//     const [user, setUser] = useState({
//         name:"",
//         email:"",
//         password:"",
//         reEnterPassword:""
//     });
// const handleChange = (e) =>{
//     const { name, value } = e.target
//     console.log(name , value)
//     setUser({
//         ...user,
//         [name]: value
//     })


// }
//     const register = () => {
//         const {name, email, password} =user
//     }

//     return(
//         <div className="container">
//         {console.log("User" , user)} 
//        <br></br> <h1>SignUp</h1>
//         <br></br><input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={ handleChange } ></input><br></br><br></br>
//         <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input><br></br><br></br>

//         <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={ handleChange }></input><br></br><br></br>
//         <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your password" onChange={ handleChange }></input><br></br><br></br>

//         <button className="button button1" onClick={register}><span style={{fontWeight: 'bold'}}>Sign up</span></button>

//     </div>
//     )
// }

    
//     // const [email , setEmail]=useState('')
//     // const [password , setPassword] =useState('')

//     // const handleSubmit =async (e) => {
//     //     e.preventDefault()

//     //     console.log(email, password)
//     // }
//     // return(
//     //     <form className="container" onSubmit={handleSubmit}>
//     //         <h3>Sign Up</h3>
//     //         {/* <lable>Enter Your Name:</lable> */}
//     //         <input 
//     //            type="name" 
//     //            onChnage={(e) => setName(e.target.value)}
//     //            placeholder="Enter your Name"
//     //            value={name}
//     //         />
//     //         <br></br>
//     //         <br></br>
//     //         {/* <lable>Enter Your Email:</lable> */}
//     //           <input 
//     //            type="email" 
//     //            onChnage={(e) => setEmail(e.target.value)}
//     //            placeholder="Enter your Email address"
//     //            value={email}
//     //         />
//     //         <br></br>
//     //         <br></br>
//     //          {/* <lable>Enter Your Password:</lable> */}
//     //         <input 
//     //            type="password" 
//     //            onChnage={(e) => setPassword(e.target.value)}
//     //            placeholder="Enter your password"
//     //            value={password}
//     //         /><br></br><br></br>
//     //         <input 
//     //            type="password" 
//     //            onChnage={(e) => setPassword(e.target.value)}
//     //            placeholder="Re-Enter your password"
//     //            value={password}
//     //         /><br></br><br></br>
//     //         <button class="button button1"><span style={{fontWeight: 'bold'}}>Sign Up</span></button>
//     //     </form>
//     // )


// export default Signup;

import React, { Component, useState } from "react";
import './signup.css';

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="main">
      <div className="submain">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            Register As<br></br>
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
           &nbsp;&nbsp; User &nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            &nbsp;&nbsp;Admin
          </div>
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

         <br></br> <div className="mb-3">
            {/* <label>First name</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            {/* <label>Last name</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            {/* <label>Email address</label> */}
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            {/* <label>Password</label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="button11">
              Sign Up
            </button><br></br><br></br>
          </div>
          
        </form>
      </div>
    </div>
  );
}
