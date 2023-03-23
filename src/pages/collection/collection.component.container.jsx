import { connect } from "react-redux";
import { selectIsCollectionLoading } from "../../redux/shop/shop.selector";
import CollectionPage from '../collection/collection.component';
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";


const mapStateToProps=createStructuredSelector({
    isLoading:state=>!selectIsCollectionLoading(state)
})
export const CollectionPageContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)