import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./Slices/paymentSlice"
import authReducer from "./Slices/authSlice"

const store = configureStore({
  reducer: {
    payment : paymentReducer,
    auth : authReducer
  },
});

export default store;
