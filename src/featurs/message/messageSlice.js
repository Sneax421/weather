import {createSlice} from "@reduxjs/toolkit";
import {getWeather} from "../api/asyncWeatherAction.js";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, () => 'Pending...')
            .addCase(getWeather.rejected, () => 'Enter correct city name')
            .addCase(getWeather.fulfilled,() => '')
    }
})

export default messageSlice.reducer;