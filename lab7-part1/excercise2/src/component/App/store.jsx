import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Login&Signup/userSlice';


export default configureStore({
    reducer: {
        user: userReducer,
    }
})