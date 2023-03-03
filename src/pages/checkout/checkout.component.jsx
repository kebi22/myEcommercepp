import React from "react";
import { connect } from "react-redux";
import { selectCartItems,selectCartTotal } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

import './checkout.styles.scss';

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
            cartItem.name)  } 
            <div className="total">
                <span>TOTAL:${total}</span>
                </div>   
                  </div>
)
 const mapStateToProbs=createStructuredSelector({
    CartItems:selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProbs) (CheckOutPage);