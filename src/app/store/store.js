import { configureStore } from "@reduxjs/toolkit";
import CanalesReducer from "../features/CanalesReducer";

export default configureStore({
    reducer: {
        canales: CanalesReducer,
    }
})