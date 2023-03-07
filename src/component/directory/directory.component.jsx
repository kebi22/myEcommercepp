import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.css';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory=({sections})=>(
        <div className="directory-menu">{
            sections.map(({ id, ...otherSectionprobs})=>(
               <MenuItem key={id} {...otherSectionprobs}></MenuItem>
            ))}

        </div>  

    );
const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections

}
 
)
export default connect(mapStateToProps) (Directory);