import { configureStore } from "@reduxjs/toolkit";
import { authSlice,themeConfigSlice } from "./";




export const store = configureStore({
   
    reducer: {       
        auth: authSlice.reducer,
        themeConfig: themeConfigSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})


// Exporta el tipo del estado global
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;