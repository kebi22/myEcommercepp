import { connect } from "react-redux";
import CollectionOverview from '../collection-overview/collection-overview.component'
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionFetching
})

export const CollectionOverviewContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)
