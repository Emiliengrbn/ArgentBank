import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./redux/login";

export const mainStore = configureStore({
    reducer: {
        Login: loginSlice.reducer,
    }
});