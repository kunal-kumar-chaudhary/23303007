import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice';
// configuring the store

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
    }
});

export default store;