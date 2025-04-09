import {createSlice} from "@reduxjs/toolkit";
import {getWeather} from "../api/asyncWeatherAction.js";


const weatherSlice = createSlice({
    name: 'weather',
    initialState: 'Enter city name',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getWeather.pending, () => 'Pending...')
            .addCase(getWeather.rejected, () => 'Enter correct city name')
            .addCase(getWeather.fulfilled,(state, action) => action.payload)
    }
})

export default weatherSlice.reducer;