import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    firstName: "",
    lastName: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    days: 0
}
const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        reserve(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.checkInDate = Date.parse(action.payload.checkInDate);
            state.checkOutDate = Date.parse(action.payload.checkOutDate);
            state.roomType = action.payload.roomType;
            state.days = action.payload.days;
        }
    }
})

export const { reserve } = reservationSlice.actions;
export default reservationSlice.reducer;