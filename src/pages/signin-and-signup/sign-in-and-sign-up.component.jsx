import React from "react";
import Signin from "../../component/Sign-in/Sign-in.component";
import Signup from "../../component/Sign-up/Sign-up.component";
import './sign-in-and-sign-up.styles.css';
const SignInAndSignUp=()=>(
    <div className="sign-in-and-sign-up">
        <Signin/>
        <Signup/>
        </div>
)
export default SignInAndSignUp;