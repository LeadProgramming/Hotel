import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firebase from "../firebase_config";

const initialState = {
}
export const setAvailable = createAsyncThunk("rooms/setAvailable", async (payload) => {
    await firebase.firestore().collection('room').doc(payload.roomNumber).update({
        roomStatus: "available"
    })
})
const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    extraReducers: {
        // [setAvailable.fulfilled]: (state, action) {

        // }
    }
})

// export const { setAvailable } = roomsSlice.actions;
export default roomsSlice.reducer;