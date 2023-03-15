import React from "react";
import { connect } from "react-redux";
import { selectCartItems,selectCartTotal } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import './checkout.styles.scss';
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";

const CheckOutPage=({CartItems,total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>prodcut</span>
                </div>
            <div className="header-block">
            <span>Description</span>
            </div>
            <div className="header-block">
             <span>Quantity</span>
             </div>
            <div className="header-block">
            <span>price</span>
            </div>
            <div className="header-block">
            <span>Remove</span>
            </div>

            </div>  
           { CartItems.map(cartItem=>
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)  } 
            <div className="total">
                <span>TOTAL:${total}</span>
                </div>   
                <div className="test-warning">
                    *please use the following test credit card for payment*
                    <br/>
                    4242 4242 4242 4242 -  Exp: 03/23 - CVV:123
                </div>
                <StripeCheckoutButton price={total}/>
                  </div>
)
 const mapStateToProbs=createStructuredSelector({
    CartItems:selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProbs) (CheckOutPage);