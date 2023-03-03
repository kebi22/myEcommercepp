import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../asset/crown.svg";
import './header.styles.css';
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentuser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
const Header=({currentUser,hidden})=>(
    <div className="header">
<Link to="/" className="logocontainer">
    <Logo className="logo "/>

</Link>
<div className="options">
<Link to="/shop" className="option">
   SHOP

</Link>
<Link to="/shop" className="option">
   CONTACT 

</Link>
<Link>{
currentUser ?
<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
:
<Link to="/signin" className="option">SIGN IN</Link>
}
</Link>
<CartIcon/>
</div>
{hidden ? null
:
<CartDropdown/>}
    </div>
)
const mapStateToProbs= createStructuredSelector({
    currentUser:selectCurrentuser,
    hidden:selectCartHidden
})

export default connect(mapStateToProbs) (Header);