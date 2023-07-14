import React from "react";
import MainSvg from "../../../../assets/jpg/mainSvg";

const Info = ({id, ...props}) => {
    return(
        <div className="main-info__container" {...props}>
            <div className="main-info__svg">
                <MainSvg id = {id}/>
            </div>
            <div className="main-info__title">
                {id}
            </div>
            <div className="main-info__subtitle">
                20°
            </div>
        </div>
        
    )
}

export default Info