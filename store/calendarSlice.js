import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import firebase from "../firebase_config";


const initialState = {
    rooms: [],
    checkins: [],
    reservations: [],
    calendar: [],
    week: [
        dayjs().toString(),
        dayjs().add(1, 'day').toString(),
        dayjs().add(2, 'day').toString(),
        dayjs().add(3, 'day').toString(),
        dayjs().add(4, 'day').toString(),
        dayjs().add(5, 'day').toString(),
        dayjs().add(6, 'day').toString(),
    ]
}

export const loadEntities = createAsyncThunk('calendar/loadEntities', async () => {
    let rooms = [];
    let checkins = [];
    let reservations = [];
    const checkOutDate = dayjs().add(7, 'day').toString()
    await firebase.firestore()
        .collection('room')
        .get()
        .then(queryData => {
            queryData.forEach(i => {
                rooms.push(i.data());
            })
        })
    await firebase.firestore()
        .collection('checkin')
        .get()
        .then(queryData => {
            queryData.forEach(i => {
                checkins.push(i.data());
            })
        })
    await firebase.firestore()
        .collection('reservation')
        .where("checkOutDate", "<=", checkOutDate)
        .get()
        .then(queryData => {
            queryData.forEach(i => {
                reservations.push(i.data());
            })
        })
    return ({
        rooms,
        checkins,
        reservations
    })
})



const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    extraReducers: {
        [loadEntities.fulfilled]: (state, action) => {
            state.rooms = action.payload.rooms;
            state.checkins = action.payload.checkins;
            state.reservations = action.payload.reservations;
            state.calendar = state.rooms.map(i => {

                return (
                    state.week
                    // state.week.map(i => return ())
                )
            })
            console.log(state.calendar)
            // for (let { roomNumber } in state.rooms) {
            //     if (state.checkins) {
            //         for (let i in state.week) {
            //             if () {

            //             }
            //         }
            //     }
            // }
        }
    },
    reducers: {

    },
})

// export const { getRoomscalendar, setAddMode, setRemoveMode } = calendarSlice.actions;
export default calendarSlice.reducer;