import { configureStore } from "@reduxjs/toolkit";
import contractorReducer from "./contractor/contractorSlice";

export const store = configureStore({
    reducer: {
        contractors: contractorReducer,
    }
})