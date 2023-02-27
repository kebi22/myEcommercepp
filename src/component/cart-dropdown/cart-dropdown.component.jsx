import React from "react";
import CustomButton from "../Custom-button/Custom-button.component";
import './cart-dropdown.styles.css';
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
const CartDropdown=({cartItems})=>(
<div className="cart-dropdown">
    <div className="cart-items">
        {
        cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}/>)
}
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>

</div>
 )
 const mapStateToProbs=({cart:{cartItems}})=>({
    cartItems
 })

 export default connect(mapStateToProbs)(CartDropdown);