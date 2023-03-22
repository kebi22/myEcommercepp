import React from "react";
import { connect } from "react-redux";
import { updateCollections } from '../../redux/shop/shop.actions';
import { Route } from "react-router-dom";
import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore,convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component{
    state = {
        loading: true
      };
    unsubscribeFromSnapshot=null
    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef=firestore.collection('Collections')
       collectionRef.get().then( snapshot=>{
            const collectionsMap=convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false });
            console.log(collectionsMap)
        })
        }
      
    render(){
        const {match}=this.props;
        const { loading } = this.state;
        return(
            <div className="ShopPAge">
                <Route exact path={`${match.path}`}  render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )} />
                <Route  path={`${match.path}/:collectionId`}  render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}/>         
           </div>
         
         
     )

    }
   
    }

    const mapDispatchToProps = dispatch => ({
        updateCollections: collectionsMap =>
          dispatch(updateCollections(collectionsMap))
      });
      
      export default connect(
        null,
        mapDispatchToProps
      )(ShopPage);