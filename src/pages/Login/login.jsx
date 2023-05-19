// // import React,{ useState } from "react"
// // import "./login.css";


// // const Login = () => {
// //     // const [email , setEmail]=useState('')
// //     // const [password , setPassword] =useState('')
// //     const [user, setUser] = useState({
// //         email:"",
// //         password:""
// //     })

// //     const handleSubmit =async (e) => {
// //             const{name, value} = e.target
// //         e.preventDefault()

// //         console.log(name, value)
// //         setUser({
// //             ...user,
// //             [name]:value
// //         })
// //     }
// //     return(
// //         <div className="container">
         
// //         <h3>Login</h3><br></br>

// //         <form className="login" onSubmit={handleSubmit}>
// //             {/* <lable>Email:</lable><br></br> */}
// //             <input 
// //                type="text" 
// //                name="email"
// //                onChnage={(handleSubmit)}
// //                placeholder="Enter your email address"
// //                value={user.email}/>
            
// //             <br></br><br></br>
// //              {/* <lable>Password:</lable><br></br> */}
// //             <input 
// //                type="password" 
// //                name="password"
// //                onChnage={(handleSubmit)}
// //                placeholder="Enter your password"
// //                value={user.password}
// //             /><br></br><br></br>
// //             <button className="button button1"><span style={{fontWeight: 'bold'}}>Log in</span></button>
// //             <br></br>    
// //         </form>
        

// //         </div>
// //     )

// // }

// // export default Login;
// import React,{useState} from "react";
// import "./login.css" 

// const Login = () => {

//     const [user, setUser] = useState({
//         email:"",
//         password:""
//     });
// const handleChange = e =>{
//     const { name, value } = e.target
//     console.log(name , value)
//     setUser({
//         ...user,
//         [name]: value
//     })
// }
//     return(
//         <div className="container">
//             {console.log(user)}
//             <h1>Login</h1>
//             <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange } ></input><br></br><br></br>
//             <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={ handleChange }></input><br></br><br></br>
//            <button className="button button1"><span style={{fontWeight: 'bold'}}>Log in</span></button>

//         </div>
//     )
// }

// export default Login

import React, { Component, useState } from "react";
// import Home from "../Home";
import "./login.css";
import Footer from "../../components/Footer/Footer";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("https://wadl-mini-project-backend.onrender.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./notes";
        }
      });
  }

  return (
    <div className="main">
      <div className="submain">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

         <br></br> <div className="inputmain">
            {/* <label>Email address<br></br></label> */}
            <input
              type="email"
              className="input1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br></br>
          <div className="mb-3">
            {/* <label>Password</label> */}
            <input
              type="password"
              className="input1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="button12">
              Submit
            </button>
          </div>
         
        </form>
      </div>
    </div>
  
  );
}
