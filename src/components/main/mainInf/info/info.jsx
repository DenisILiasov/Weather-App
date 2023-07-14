import React from "react";
import MainSvg from "../../../../assets/jpg/mainSvg";

const Info = (props) => {
    return(
        <div className="main-info__container" {...props}>
            <div className="main-info__svg">
                <MainSvg id = {props.id}/>
            </div>
            <div className="main-info__title">
                {props.id}
            </div>
            <div className="main-info__subtitle">
                {props.description}
            </div>
        </div>
        
    )
}

export default Info