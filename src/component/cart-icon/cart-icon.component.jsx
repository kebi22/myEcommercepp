import React from "react";
import { ReactComponent as ShoppingIcon} from "../../asset/shopping-bag.svg.svg";
import './cart-icon.styles.css' ;
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
const CartIcon=({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
<ShoppingIcon className="shopping-icon"/>
<span className="item-count">0</span>
</div>

)
const mapDispatchToProbs=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProbs) (CartIcon);