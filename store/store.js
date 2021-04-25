import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./reservationSlice";
import roomsReducer from "./roomsSlice";
const reducer = {
    reservation: reservationReducer,
    rooms: roomsReducer
}

const store = configureStore({ reducer: reducer })
export default store;