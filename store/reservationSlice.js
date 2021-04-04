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
            state = action.payload;
        }
    }
})

export const { reserve } = reservationSlice.actions;
export default reservationSlice.reducer;