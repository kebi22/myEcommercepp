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
import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv } from "./header.styles";
const Header=({currentUser,hidden})=>(
    <HeaderContainer>
<LogoContainer to="/">
    <Logo className="logo "/>

</LogoContainer>
<OptionsContainer>
<OptionLink to="/shop">
   SHOP

</OptionLink>
<OptionLink to="/" >
   CONTACT 

</OptionLink>
{
currentUser ?
<OptionLink as='div'  onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
:
<OptionLink to="/signin" >SIGN IN</OptionLink>
}

<CartIcon/>
</OptionsContainer>
{hidden ? null
:
<CartDropdown/>}
    </HeaderContainer>
)
const mapStateToProbs= createStructuredSelector({
    currentUser:selectCurrentuser,
    hidden:selectCartHidden
})

export default connect(mapStateToProbs) (Header);