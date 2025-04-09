import {createAsyncThunk} from "@reduxjs/toolkit";
import {api_key, base_url} from "../../utils/constans.js";

export const getWeather = createAsyncThunk(
    'weather/fetch',
    async (city) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        return ({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
        })
    }
)







// const [weatherInfo, setWeatherInfo] = useState({});
// const [message, setMessage] = useState('Enter city name');
//
// const getWeather = city => {
//     fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//         .then(res => res.json())
//         .then(data => {
//             setWeatherInfo({
//                 city: data.name,
//                 country: data.sys.country,
//                 temp: data.main.temp,
//                 pressure: data.main.pressure,
//                 sunset: data.sys.sunset
//             });
//             setMessage('');
//         })
//         .catch(() => setMessage('Enter correct city name'));
// }