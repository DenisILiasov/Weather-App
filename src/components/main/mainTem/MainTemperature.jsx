import React from "react";

const MainTemperature = (props) => {
    return(
        <div className="main__temperature">
            <p className="main__title">
                {props.wheatherInfo.temperature}°
            </p>
            <div className="main__subtitle">
                Now
            </div>
            <div className="main__city">
                City: {props.wheatherInfo.city}
            </div>
        </div>
    )
}

export default MainTemperature