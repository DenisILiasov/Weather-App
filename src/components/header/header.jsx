import React from "react";
import Logo from "../../assets/img/HeaderImg/Logo";

import HeaderForm from "./headerForm/headerForm";

const Header = (props) =>{
    return(
        <div className="header__container">
            <div className="logo__wrap" >
                <Logo/>
                <p className="header__title">Weather</p>
            </div>
            <div className="form__wrap">
                
                <HeaderForm changeWheather = {props.changeWheather} data = {props.data}/>
            </div>
        </div>
    )
}

export default Header