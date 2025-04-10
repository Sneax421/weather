import {configureStore} from "@reduxjs/toolkit";
import weather from "../featurs/weather/weatherSlice.js"
import message from "../featurs/message/messageSlice.js"

export const store = configureStore({
    reducer: {
        weather,
        message
    }
})