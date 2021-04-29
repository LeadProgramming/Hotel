import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./calendarSlice";
import checkinReducer from "./checkinSlice";
import currentStayReducer from "./currentStaySlice";
import profileReducer from "./profileSlice";
import reservationReducer from "./reservationSlice";
import roomsReducer from "./roomsSlice";

const reducer = {
    currentStay: currentStayReducer,
    calendar: calendarReducer,
    checkin: checkinReducer,
    profile: profileReducer,
    reservation: reservationReducer,
    rooms: roomsReducer
}

const store = configureStore({ reducer: reducer })
export default store;