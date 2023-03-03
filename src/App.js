
import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './component/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from "react-redux";
import {setCurrentUser} from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentuser } from './redux/user/user.selector';
import CheckOutPage from './pages/checkout/checkout.component';




class App extends React.Component {

  unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}= this.props;
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef =await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=>{
        setCurrentUser({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        });

      })

    }
    else{
     setCurrentUser(userAuth)
    }
     

     
     
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div >
        <Header />
        <Switch>  
        <Route  exact path='/' component={HomePage} />
        <Route   path='/shop' component={ShopPage} />
        <Route  exact path='/checkout' component={CheckOutPage} />
        <Route  exact path='/signin' render={()=>this.props.currentUser? 
          (<Redirect to='/'/>)
          :(<SignInAndSignUp/>) } />
        </Switch>
      </div>
    );

  }
  
}
const mapStateToProbs=createStructuredSelector({
  currentUser:selectCurrentuser
})
const mapDispatchToProbs=dispatch=>({
setCurrentUser:user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProbs,mapDispatchToProbs) (App);
