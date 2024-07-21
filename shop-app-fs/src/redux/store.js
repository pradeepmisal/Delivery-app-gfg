

import { combineReducers } from 'redux'
import { productReducer, selectedProductReducer } from './reducers/productReducer'
 


const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

export default rootReducer