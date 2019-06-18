import React from "react";
import "./../../animate.css";
import ezcarpark from "./../Images/images/parking.png";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div>
      <div className="reset loginmain">
        <a
          id="loginanimation"
          className="login animated slideOutDown"
          // href="http://localhost:4000/auth/callback"
          href={process.env.REACT_APP_LOGIN}
        >
          <img
            alt=""
            src={ezcarpark}
            style={{
              height: "70px",
              margin: "10px",
              position: "absolute",
              top: "50px",
              left: "60px"
            }}
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
