import React from "react";
import SHOP_DATA from "./shopdata";
import { Route } from "react-router-dom";
import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
const ShopPage =({match})=> {
    console.log(match)
    return(
       <div className="ShopPAge">
           <Route exact path={`${match.path}`} component={CollectionOverview} />
           <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>         
      </div>
    
    
)}

 export default ShopPage;