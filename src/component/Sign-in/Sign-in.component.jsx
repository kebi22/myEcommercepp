import React from "react";
import Forminput from "../form-input/form-input.component";
import CustomButton from "../Custom-button/Custom-button.component";
import {auth ,signInWithGoogle} from '../../firebase/firebase.utils';

class Signin extends React.Component
{
    constructor()
    {
        super();
        this.state={
            email:'v@gmail.com',
            password:'mn'
        }
    }

handleSubmit= async event =>{
event.preventDefault();
const {email,password}=this.state;
try{
    await auth.signInWithEmailAndPassword(email,password)
    this.setState({email:'' ,password:''})
}catch(error){
    console.error(error);
    alert('incorrect')
}


}
handleChange= event=>{
   
    const{value ,name }=event.target;
    this.setState({[name]: value})
    console.log(event);
}

render(){
    return(
      <div className="Sign-in">
        <h2>I laready have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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
    <div className="buttons">
    <CustomButton type="submit"   > Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isgooglesignin  > Sign in with google</CustomButton>

    </div>
        
        </form>
      
        
      </div>  
    )
}
}
export default Signin;