//configureStore extract from toolkit
import {configureStore} from '@reduxjs/toolkit';
import getReducer from './productSlice';

 const store = configureStore(
    {
// it take reducer-
 reducer:{
    reciveReducer:getReducer,

}
}
)

export default store;
