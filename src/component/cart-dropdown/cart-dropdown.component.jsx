import React from "react";
import CustomButton from "../Custom-button/Custom-button.component";
import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";
const CartDropdown=({cartItems,history,dispatch})=>{
    
    return(

<div className="cart-dropdown">
    <div className="cart-items">
        {
            cartItems.length ?(
                cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}/>
                ))
            :(
                <span className="empty-message">YOUR CART IS EMPTY</span>

            )
      
}
        <CustomButton onClick={()=>{
          
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }} > GO TO CHECKOUT please</CustomButton>
    </div>

</div>
 )}
 const mapStateToProbs=(state)=>({
    cartItems:selectCartItems(state) })

 export default withRouter(connect(mapStateToProbs)(CartDropdown)) ;