import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Product : [] ,
    totalAmount: 0,
    totalQuantity: 0
}

const ecomersSlice = createSlice({
    name:'addItem' , 
    initialState,
    reducers: {
        addItem:(state , action) =>{
            const newItem = action.payload
            const existingItem = state.Product.find(
                (Item) => Item.id === newItem.id
            );

            state.totalQuantity++

            if(!existingItem) {
                state.Product.push({
                    title:newItem.title,
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number
                (newItem.price)
            }
            state.totalAmount = state.Product.reduce((total , item) => total+ Number(item.price) * Number(item.quantity),0 )
        },
        
        deleteItem: (state, action)=> {
            const id = action.payload
            const existingItem = state.Product.find(item=> item.id === id)

            if(existingItem){
                state.Product = state.Product.filter(item=> item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            
            state.totalAmount = state.Product.reduce((total , item) => total+
            Number(item.price) * Number(item.quantity),0
            ) 
         },
         handlePlus: (state , action) => {
            const newItem = action.payload
            const existingItem = state.Product.find((item) => item.id === newItem.id)

                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number
                (newItem.price)
                state.totalQuantity++
                state.totalAmount = state.Product.reduce((total , item) => total+ Number(item.price) * Number(item.quantity),0 )
         },
       
         handleMinus: (state , action) => {
            const newItem = action.payload
            const existingItem = state.Product.find((item) => item.id === newItem.id)

            if (existingItem.quantity > 1) {
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number
                (newItem.price)
                state.totalQuantity--
                state.totalAmount = state.Product.reduce((total , item) => total+ Number(item.price) * Number(item.quantity),0 )
            }
         },
       
    }
})



export const cartActions = ecomersSlice.actions

export default ecomersSlice.reducer