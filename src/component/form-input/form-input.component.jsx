import React from "react";
import './form-input.styles.css';

const Forminput=({handleChange,label,...otherprobs})=>
(
    <div className="group">
        <input className="forminput" onChange={handleChange} {...otherprobs}/>
        {
        label ?
       ( <label className={`${otherprobs.value.length ? 'shrink':''}form-input-label`}>
            {label}
        </label>)
        :null
        }
    </div>
)
export default Forminput;