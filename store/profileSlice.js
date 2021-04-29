import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firebase from "../firebase_config";

const initialState = {
    guest: {}
}

export const changeName = createAsyncThunk('profile/changeName', async (data, thunkAPI) => {
    try {
        const { firstName, lastName } = data;
        await firebase.firestore()
            .collection("guest")
            .doc(thunkAPI.getState().profile.guest.email)
            .update({
                firstName,
                lastName
            })
    } catch (e) {
        console.log(e)
    }
})

export const changePassword = createAsyncThunk('profile/changeEmail', async (data, thunkAPI) => {
    try {
        const { password } = data;
        await firebase.auth().currentUser
            .updatePassword(password)
    } catch (e) {
        console.log(e)
    }
})

export const changePhone = createAsyncThunk('profile/changePhone', async (data, thunkAPI) => {
    try {
        const { phone } = data;
        await firebase.firestore()
            .collection("guest")
            .doc(thunkAPI.getState().profile.guest.email)
            .update({
                phone
            })
    } catch (e) {
        console.log(e)
    }
})

export const changeAddress = createAsyncThunk('profile/changeAddress', async (data, thunkAPI) => {
    try {
        const { address } = data;
        await firebase.firestore()
            .collection("guest")
            .doc(thunkAPI.getState().profile.guest.email)
            .update({
                address
            })
    } catch (e) {
        console.log(e)
    }
})

export const changeDriverId = createAsyncThunk('profile/changeDriverId', async (data, thunkAPI) => {
    try {
        const { driverId } = data;
        await firebase.firestore()
            .collection("guest")
            .doc(thunkAPI.getState().profile.guest.email)
            .update({
                driverId
            })
    } catch (e) {
        console.log(e)
    }
})

export const changeCarId = createAsyncThunk('profile/changeName', async (data, thunkAPI) => {
    try {
        const { carId } = data;
        await firebase.firestore()
            .collection("guest")
            .doc(thunkAPI.getState().profile.guest.email)
            .update({
                carId
            })
    } catch (e) {
        console.log(e)
    }
})

export const loadProfile = createAsyncThunk('profile/loadProfile', async (user) => {
    let guest = {};
    await firebase.firestore()
        .collection("guest")
        .doc(user.email)
        .get()
        .then(async (doc) => {
            if (doc.exists) {
                guest = doc.data();
                guest.pic = await firebase.storage()
                    .refFromURL(`gs://hotel-3c249.appspot.com/images/${doc.data().imgName}`)
                    .getDownloadURL()
            }
        })
    guest.email = user.email;

    return guest;
})



const profileSlice = createSlice({
    name: 'profile',
    initialState,
    extraReducers: {

        [loadProfile.fulfilled]: (state, action) => {
            state.guest = action.payload;
        }
    },
    reducers: {

    },
})

// export const { changeName } = profileSlice.actions;
export default profileSlice.reducer;