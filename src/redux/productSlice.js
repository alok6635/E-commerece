// createSlice extract from toolkit
import {createSlice} from '@reduxjs/toolkit';

// check the api status create a object-
export let apiStaus={
    success:'sucess',
    unsuccess:'error',
    loading:'loading'
}

// creating a productSlice -
const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:apiStaus.success
    },
// reducers passed a method- 
reducers:{
    getStatus(state,actions){
        state.status= actions.payload;
   },
   getProduct(state,actions){
    state.data=actions.payload;
   }
}
})
export const {getProduct,getStatus} = productSlice.actions;
export default productSlice.reducer;

// calling  api here-
export function callApi(){
     return async function innerApi(dispatch){
// send data to reducer throw to dispatch-
          dispatch(getStatus(apiStaus.loading))
          try{
           let api= await fetch('https://fakestoreapi.com/products')
           let res = await api.json()
           dispatch(getProduct(res))
           dispatch(getStatus(apiStaus.success))
          }catch(error){
            console.log(error);
          dispatch(getStatus(apiStaus.unsuccess))
          }
      }
} 