import React from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../component/collection-preview/collection-preview.component";

class ShopPage extends React.Component{
    constructor(probs){
        super(probs);
        this.state={
            collections: SHOP_DATA
        }
    }
    render(){
      
        return (<div className="ShopPAge">
            {
            this.state.collections.map(({id, ...othercollectionsprobs})=>
            (
            <CollectionPreview key={id} {...othercollectionsprobs}/>
            )) }
             </div>
        );
    }
   
 }
 export default ShopPage;