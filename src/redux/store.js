import {configureStore} from '@reduxjs/toolkit';
import {productListReducer, productDetailsReducer} from './reducers/productReducers';
import {userLoginReducer, userRegisterReducer, userDetailsReducer} from './reducers/userReducers'
const reducer = {
    productList:productListReducer,
    productDetails:productDetailsReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store;