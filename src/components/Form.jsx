

import {getWeather} from "../featurs/api/asyncWeatherAction.js";
import {useDispatch} from "react-redux";


const Form = () => {


    const dispatch = useDispatch();



    return (
        <form >
            <input type={'text'} name={'city'}/>
            <button onClick={() => dispatch(getWeather())}>Get Weather</button>
        </form>
    );
};

export default Form;