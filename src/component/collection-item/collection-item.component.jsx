import React from "react";
import './collection-item.styles.scss';
import CustomButton from "../Custom-button/Custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
const CollectionItem=({item,addItem})=>{ 
    const {price,name,imageUrl}=item;
    return (
<div className="collection-item ">
<div className="image" 
style={{
    backgroundImage:  `url(${imageUrl})`
}}></div> 
<div className="collecton-footer">
    <span className="name">{name}</span>
    <span className="price">{price}</span>

</div>
<CustomButton  onClick={()=>addItem(item)}>ADD TO CART</CustomButton>
</div>
)}
const mapDispatchToprobs=dispatch=>({
    addItem:item=>dispatch(addItem(item))

})
export default connect(null,mapDispatchToprobs)(CollectionItem);