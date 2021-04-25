import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import fireApp from "../firebase_config";


const initialState = {
    addMode: false,
    removeMode: false,
    checkInDate: "",
    checkOutDate: "",
    days: 0,
    roomType: "",

}

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        getRoomsReservation(state, action) {
            state.checkInDate = action.payload.checkInDate;
            state.checkOutDate = action.payload.checkOutDate;
            state.roomType = action.payload.roomType;
            state.days = action.payload.days;
        },
        makeReservation(state, action) {
            fireApp.auth().onAuthStateChanged(user => {
                const guestDocRef = fireApp.firestore().collection('guest').doc(user.email);
                const reservationDocRef = fireApp.firestore().collection('reservation').doc(user.email);
                const roomDocRef = fireApp.firestore().collection('room').doc(action.payload.roomNumber);
                fireApp.firestore().runTransaction((transaction) => {
                    return transaction.get(guestDocRef).then((guestDoc) => {
                        if (!guestDoc.exists) {
                            throw "Document does not exists";
                        }
                        transaction.set(reservationDocRef, {
                            firstName: guestDoc.data().firstName,
                            lastName: guestDoc.data().lastName,
                            reservedDate: dayjs().format('MM/DD/YYYY'),
                            checkInDate: state.checkInDate,
                            checkOutDate: state.checkOutDate,
                            roomType: state.roomType,
                            roomStatus: "occupied",
                            roomNumber: action.payload.roomNumber,
                            dailyRate: action.payload.dailyRate,
                            totalCharge: action.payload.totalCharge
                        });
                        transaction.update(roomDocRef, {
                            roomStatus: "occupied",
                        })
                    })
                }).then(() => {
                    console.log("Transaction Completed.");
                }).catch((e) => {
                    console.log(e, " : Transaction Failed.");
                })
            })
        },
        removeReservation(state, action) {

        },
        setAddMode(state) {
            state.addMode = !state.addMode;
        },
        setRemoveMode(state, action) {
            state.removeMode = !state.removeMode;
        },
    }
})

export const { getRoomsReservation, makeReservation, removeReservation, setAddMode, setRemoveMode } = reservationSlice.actions;
export default reservationSlice.reducer;