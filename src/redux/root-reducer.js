import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";


const persistConfig={
    key:'root',
    storage,
    whitelist: ['cart']
}
const rootReducer= combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer

    
})
export default persistReducer(persistConfig,rootReducer)