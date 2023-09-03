import { configureStore } from "@reduxjs/toolkit";
import ecomersSlice from "./ecomersSlice";


const Store = configureStore({
    reducer : {
        addProdcut:ecomersSlice
    },
})

export default Store
