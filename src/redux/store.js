import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { userSlice } from "./features/Userslice";

export default configureStore({
    reducer: {
        alerts : alertSlice.reducer,
        user: userSlice.reducer,
    },
});