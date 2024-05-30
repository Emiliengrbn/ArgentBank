import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./redux/login";
import { profileSlice } from "./redux/profile";

export const mainStore = configureStore({
    reducer: {
        Login: loginSlice.reducer,
        Profile: profileSlice.reducer
    }
});