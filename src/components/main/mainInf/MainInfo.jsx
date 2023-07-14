import React from "react";
import Info from "./info/info";

const MainInfo = () => {
    return(
        <div className="main__info">
            <Info id= 'Temperature'/>
            <Info id= 'Pressure'/>
            <Info id= 'Wind' style = {{margin:0}}/>
        </div>
    )
}

export default MainInfo