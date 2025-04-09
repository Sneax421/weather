import {configureStore} from "@reduxjs/toolkit";
import weather from "../featurs/weather/weatherSlice.js"

export const store = configureStore({
    reducer: {
        weather
    }
})