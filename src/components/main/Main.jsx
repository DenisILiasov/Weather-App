import React from "react";
import MainTemperature from "./mainTem/MainTemperature";
import MainInfo from "./mainInf/MainInfo";



const Main = (props) => {
    return(
        <div className="main__container">
            <MainTemperature wheatherInfo = {props.wheatherInfo}/>
            <MainInfo wheatherInfo = {props.wheatherInfo}/>
        </div>
    )
}

export default Main