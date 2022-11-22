import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { value: {} },
    reducers: {
        login: (state, { payload }) => {
            state.value = payload;
        },
        logOut: (state, { payload }) => {
            state.value = payload;
        }
    }
})
export const { login, logOut } = userSlice.actions
export default userSlice.reducer