import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';
import firebase from "../firebase_config";


const initialState = {
    addMode: false,
    removeMode: false,
    checkInDate: "",
    checkOutDate: "",
    days: 0,
    roomType: "",
    reservations: []
}
export const removeReservation = createAsyncThunk('reservation/removeReservation', async (payload) => {
    await firebase.firestore()
        .collection("reservation")
        .doc(payload.id)
        .delete()
})
export const loadReservations = createAsyncThunk('reservation/loadReservations', async (email) => {
    let reservations = []
    await firebase.firestore()
        .collection("reservation")
        .where("email", "==", email)
        .get()
        .then((queryData) => {
            queryData.forEach((i) => {
                reservations.push(i.data());
            })
        })
    return reservations
})

export const makeReservation = createAsyncThunk('reservation/makeReservation', async (payload, thunkAPI) => {
    await firebase.auth().onAuthStateChanged((user) => {
        const reservationId = uuidv4();
        const guestDocRef = firebase.firestore().collection('guest').doc(user.email);
        const reservationDocRef = firebase.firestore().collection('reservation').doc(reservationId);
        firebase.firestore().runTransaction((transaction) => {
            return transaction.get(guestDocRef).then((guestDoc) => {
                if (!guestDoc.exists) {
                    throw "Document does not exists";
                }
                transaction.set(reservationDocRef, {
                    id: reservationId,
                    email: user.email,
                    firstName: guestDoc.data().firstName,
                    lastName: guestDoc.data().lastName,
                    dateMade: dayjs().toString(),
                    checkInDate: thunkAPI.getState().reservation.checkInDate,
                    checkOutDate: thunkAPI.getState().reservation.checkOutDate,
                    roomType: thunkAPI.getState().reservation.roomType,
                    roomNumber: payload.roomNumber,
                    dailyRate: payload.dailyRate,
                    days: thunkAPI.getState().reservation.days,
                    totalCharge: payload.totalCharge,
                });
            })
        }).then(() => {
            console.log("Transaction Completed.");
        }).catch((e) => {
            console.log(e, " : Transaction Failed.");
        })
    })
})
const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    extraReducers: {
        [loadReservations.fulfilled]: (state, action) => {
            state.reservations = action.payload;
        }
    },
    reducers: {
        getRoomsReservation(state, action) {
            state.checkInDate = action.payload.checkInDate;
            state.checkOutDate = action.payload.checkOutDate;
            state.roomType = action.payload.roomType;
            state.days = action.payload.days;
        },

        setAddMode(state) {
            state.addMode = !state.addMode;
        },
        setRemoveMode(state) {
            state.removeMode = !state.removeMode;
        },
    },
})

export const { getRoomsReservation, setAddMode, setRemoveMode } = reservationSlice.actions;
export default reservationSlice.reducer;