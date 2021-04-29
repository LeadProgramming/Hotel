import { createSlice } from "@reduxjs/toolkit";
import firebase from "../firebase_config";

const initialState = {
    roomNumber: 0,
    dailyRate: 0,
    roomType: ""
}

const checkinSlice = createSlice({
    name: 'checkin',
    initialState,
    reducers: {
        checkingIn(state, action) {
            state.roomNumber = action.payload.roomNumber;
            state.dailyRate = action.payload.dailyRate;
            state.roomType = action.payload.roomType;
        },
        checkedIn(state, action) {
            const totalCharge = action.payload.days * state.dailyRate;
            const email = firebase.auth().currentUser.email;
            firebase.firestore().collection('checkin').doc(email).set({
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
            firebase.firestore().collection('room').doc(state.roomNumber).update({
                roomStatus: "occupied",
            });
        },

    }
})

export const { checkingIn, checkedIn } = checkinSlice.actions;
export default checkinSlice.reducer;