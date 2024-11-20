// import { createSlice } from '@reduxjs/toolkit'

// export const ProductSlice = createSlice({
//   name: 'product',
//   initialState: {
//     cartItem: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//         console.log(action.payload);
        
      
//     },
  
//   },
// })

// // Action creators are generated for each case reducer function
// export const { addToCart } = ProductSlice.actions

// export default ProductSlice.reducer





// next

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
// }

// export const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     addToCart: (state,action) => {
//         let findproduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
//         if(findproduct !== -1){
//           state.cartItem[findproduct].qun += 1
//           localStorage.setItem("cart", JSON.stringify(state.cartItem))

//         }else{
//           state.cartItem = [...state.cartItem, action.payload]
//           localStorage.setItem("cart", JSON.stringify(state.cartItem))
          

//         }
        
//     },
//     producrIncrement:(state, action)=>{
//       state.cartItem[action.payload].qun += 1

//     }

    
//   },

//   productDecrement: (state, action) => {
//     const item = state.cartItem[action.payload];
//     if (item && item.qun > 1) {
//       item.qun -= 1;
//       localStorage.setItem("cart", JSON.stringify(state.cartItem));
//     }
//   },
// })

// // Action creators are generated for each case reducer function
// export const { addToCart, producrIncrement, productDecrement } = productSlice.actions

// export default productSlice.reducer




// pro

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProductIndex = state.cartItem.findIndex(item => item.id === action.payload.id);
      if (findProductIndex !== -1) {
        state.cartItem[findProductIndex].qun += 1;
      } else {
        state.cartItem = [...state.cartItem, { ...action.payload, qun: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    productIncrement: (state, action) => {
      state.cartItem[action.payload].qun += 1;
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    productDecrement: (state, action) => {
      const item = state.cartItem[action.payload];
      if (item && item.qun > 1) {
        item.qun -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, productIncrement, productDecrement } = productSlice.actions;

export default productSlice.reducer;
