import React from "react";
import './Custom-button.styles.scss';
const CustomButton=({children,isgooglesignin,inverted,...otherprobs})=>(
    <button className={`${inverted ? 'inverted' : 'custom-button'}`}
     {...otherprobs}> {children} </button>

);

export default CustomButton;