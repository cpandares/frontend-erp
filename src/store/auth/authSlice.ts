import { createSlice } from "@reduxjs/toolkit";




export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking' | 'authenticated' | 'not-authenticated'
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        login: (state, { payload }) => {
            console.log(payload);
            state.status = 'authenticated';
            state.user = {
                name: payload.name,
                email: payload.email,
            };
            state.errorMessage = undefined;
        },
        
        checkingCredentials: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        logout: (state, { payload }) => {
            
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;