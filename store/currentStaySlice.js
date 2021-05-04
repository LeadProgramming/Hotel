import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firebase from "../firebase_config";
const initialState = {};
export const loadCurrentStay = createAsyncThunk('currentStay/loadCurrentStay', async ({ email }) => {
    let checkin = {};
    let firstName = "";
    let lastName = "";
    await firebase.firestore()
        .collection("checkin")
        .doc(email)
        .get()
        .then((queryData) => {
            checkin = queryData.data();
        })
    await firebase.firestore()
        .collection("guest")
        .doc(email)
        .get().then((queryData) => {
            firstName = queryData.data().firstName;
            lastName = queryData.data().lastName;
        })
    return {
        checkin,
        email,
        firstName,
        lastName
    }
})

export const checkingOut = createAsyncThunk('currentStay/CheckingOut', async (_, thunkAPI) => {
    await firebase.firestore()
        .collection("checkin")
        .doc(thunkAPI.getState().currentStay.email)
        .delete();
    await firebase.firestore()
        .collection("room")
        .doc(thunkAPI.getState().currentStay.roomNumber)
        .update({
            roomStatus: "dirty",
        });
})

export const payBalance = createAsyncThunk('currenStay/payBalance', async ({ payment, balance }, thunkAPI) => {
    await firebase.firestore()
        .collection("checkin")
        .doc(thunkAPI.getState().currentStay.email)
        .update({
            balance: balance - payment
        })
    state.balance -= payment;
})

const currentStaySlice = createSlice({
    name: 'currentStay',
    initialState,
    extraReducers: {
        [loadCurrentStay.fulfilled]: (state, action) => {
            const { firstName, lastName, email, checkin } = action.payload;
            return { firstName, lastName, email, ...checkin, ...state }
        }
    },
    reducers: {

    }
})
export const { } = currentStaySlice.actions;
export default currentStaySlice.reducer;