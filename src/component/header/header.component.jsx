import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../asset/crown.svg";
import './header.styles.css';
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
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
const mapStateToProbs= ({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProbs) (Header);