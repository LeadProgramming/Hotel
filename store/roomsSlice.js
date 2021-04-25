import { createSlice } from "@reduxjs/toolkit";
import fireApp from "../firebase_config";

const initialState = {
    roomNumber: 0,
    dailyRate: 0,
    roomType: ""
}

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        checkingIn(state, action) {
            state.roomNumber = action.payload.roomNumber;
            state.dailyRate = action.payload.dailyRate;
            state.roomType = action.payload.roomType;
        },
        checkedIn(state, action) {
            const totalCharge = action.payload.days * state.dailyRate;
            const email = fireApp.auth().currentUser.email;
            fireApp.firestore().collection('checkin').doc(email).set({
                checkInDate: action.payload.checkInDate,
                checkInTime: action.payload.checkInTime,
                checkOutDate: action.payload.checkOutDate,
                checkOutTime: action.payload.checkOutTime,
                roomNumber: state.roomNumber,
                roomType: state.roomType,
                totalCharge,
                dailyRate: state.dailyRate,
                payment: action.payload.payment,
                balance: totalCharge - action.payload.payment,
                days: action.payload.days
            })
            fireApp.firestore().collection('room').doc(state.roomNumber).update({
                roomStatus: "occupied",
            });
        },
        setAvailable(state, action) {
            fireApp.firestore().collection('room').doc(action.payload.roomNumber).update({
                roomStatus: "available"
            })
        }
    }
})

export const { checkingIn, checkedIn, reserve, setAvailable } = roomsSlice.actions;
export default roomsSlice.reducer;