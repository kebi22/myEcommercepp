import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {CollectionOverviewContainer} from "../../component/collection-overview/collection-overview.component.container";
import { CollectionPageContainer } from "../collection/collection.component.container";
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions'
import {  selectIsCollectionLoading } from "../../redux/shop/shop.selector";
import { Route } from "react-router-dom";


class ShopPage extends React.Component{
    
    unsubscribeFromSnapshot=null
    componentDidMount(){
       const {fetchCollectionsStartAsync} =this.props
       fetchCollectionsStartAsync()
        }
      
    render(){
        const {match}=this.props;
      
        return(
            <div className="ShopPAge">
                <Route exact path={`${match.path}`}  component={CollectionOverviewContainer}          />
                <Route  path={`${match.path}/:collectionId`}  component={CollectionPageContainer}/>         
           </div>
         
         
     )

    }
   
    }

 
   const mapDispatchToProps=dispatch=>({
    fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())

   })
      
      export default connect(
        null,
        mapDispatchToProps
      )(ShopPage);