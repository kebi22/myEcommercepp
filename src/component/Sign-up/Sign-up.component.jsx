import React from "react";
import Forminput from "../form-input/form-input.component";
import CustomButton from "../Custom-button/Custom-button.component";
import './Sign-up.styles.css';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
class Signup extends React.Component
{
    constructor()
    {
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''

        }
    }
    handleSubmit= async event =>{
        event.preventDefault();
        const {email, password, displayName, confirmPassword}=this.state
        if(password!==confirmPassword){
        alert('passwords dont match')
        return;
    }
      try{

        const {user} =await auth.createUserWithEmailAndPassword(
            email,
            password);
        await createUserProfileDocument(user,{displayName});
        this.setState={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''


        }
        
      } catch(error){
        console.error(error);
      }
     
        };
        handleChange= event=>{
   
            const{value ,name }=event.target;
            this.setState({[name]: value})
            
        }
        

    render(){
        return(
          <div className="Sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <Forminput 
            name="displayName"
             type="text" 
             handleChange={this.handleChange} 
             value={this.state.displayName}
              label= "Display Name"
              required/>
            <Forminput 
            name="email"
             type="email" 
             handleChange={this.handleChange} 
             value={this.state.email}
              label= "email"
              required/>
           
            <Forminput 
            name="password"
             type="password" 
             handleChange={this.handleChange} 
             value={this.state.password} 
             label="password"
             required/>
              <Forminput 
            name="confirmPassword"
             type="password" 
             handleChange={this.handleChange} 
             value={this.state.confirmPassword} 
             label="Confirm Password"
             required/>
               <div className="buttons">
    <CustomButton type="submit"   > Sign Up</CustomButton>
        
    </div>
        
        </form>
      
        
      </div>  
    )
}
}
export default Signup;