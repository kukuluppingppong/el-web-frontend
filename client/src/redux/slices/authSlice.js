import { createSlice } from '@reduxjs/toolkit';
import {
    LOGIN,
    REGISTER,
    LOGIN_PAGE_UNLOADED,
    REGISTER_PAGE_UNLOADED,
    ASYNC_START,
    UPDATE_FIELD_AUTH
} from '../actionTypes';


const authSlice = createSlice({
    name: 'auth',
    initialState: { inProgress: false },
    reducers: {
        LOGIN: (state, action) => {
            state.inProgress = action.payload;
        },
        REGISTER: (state, action) => {
            state.inProgress = action.payload;
        },
        LOGIN_PAGE_UNLOADED: (state, action) => {
            state.inProgress = action.payload;
        },
        REGISTER_PAGE_UNLOADED: (state, action) => {
            state.inProgress = action.payload;
        },
        ASYNC_START: (state, action) => {
            state.inProgress = action.payload;
        },
        UPDATE_FIELD_AUTH: (state, action) => {
            state.inProgress = action.payload;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;