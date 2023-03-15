import React from "react";
import CollectionPreview from "../../component/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import shopReducer from "../../redux/shop/shop.reducer";
import {  selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview=({collections})=>(
    <div className="collections-overview">
 {
            collections.map(({id, ...othercollectionsprobs})=>
            (
            <CollectionPreview key={id} {...othercollectionsprobs}/>
            )) }
    </div>
)
const mapStateToProps=createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps) (CollectionOverview);