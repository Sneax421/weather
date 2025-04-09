import React from 'react';
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";



const Data = () => {

    // const weather = useSelector(state => state.weather);

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

    return (
        <div>
            <Form />
            <Weather />
        </div>
    );
};

export default Data;










