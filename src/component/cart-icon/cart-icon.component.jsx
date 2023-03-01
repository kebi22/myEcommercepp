import React from "react";
import { ReactComponent as ShoppingIcon} from "../../asset/shopping-bag.svg.svg";
import './cart-icon.styles.css' ;
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
<ShoppingIcon className="shopping-icon"/>
<span className="item-count">{itemCount}</span>
</div>

)
const mapDispatchToProbs=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
const mapStateToProbs=(state)=>({
    itemCount:selectCartItemsCount(state)

})
export default connect(mapStateToProbs,mapDispatchToProbs) (CartIcon);