import React from "react";
import Info from "./info/info";

const MainInfo = (props) => {
    return(
        <div className="main__info">
            <Info id= 'Temperature' description = {props.wheatherInfo.temperature}/>
            <Info id= 'Pressure' description = {props.wheatherInfo.pressure}/>
            <Info id= 'Wind' description = {props.wheatherInfo.wind} style = {{margin:0}}/>
        </div>
    )
}

export default MainInfo