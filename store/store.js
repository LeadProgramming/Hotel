import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./reservationSlice";

const reducer = {
    reservation: reservationReducer,
}

const store = configureStore({ reducer: reducer })
export default store;