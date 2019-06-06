import React from "react";
import "./../../animate.css";
import ezparking from "./../Images/images/parking.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="reset loginmain">
        <a
          id="loginanimation"
          className="login animated zoomInDown"
          href="http://localhost:4000/auth/google"
        >
          <img
            alt=""
            src={ezparking}
            style={{ height: "70px", margin: "10px" }}
          />
        </a>
      </div>
    </div>
  );
}

// import React, { Component } from "react";
// import { fireBaseApp } from "../Firebase/index";
// import parking from './../Images/images/parking.png'

// class Login extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   onSubmit = async event => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     fireBaseApp
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(userInfo => {
//         console.log(userInfo);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.onSubmit}>
//           <label>
//             Email
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             Password
//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Login</button>
//           <button>Register</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;
