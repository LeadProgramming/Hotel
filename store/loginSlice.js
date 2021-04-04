import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    logged: false
}
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state) {
            state.logged = true;
        },
        logout(state) {
            state.logged = false;
        }
    }
})

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;