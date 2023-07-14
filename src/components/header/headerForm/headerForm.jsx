import React, { useState } from "react";

const HeaderForm = ({changeWheather, data}) => {

    const [value, setValue] = useState('')
    let value2 = ''
    return(
        <form className="header__form">
            <input type="text" className="header__input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={(e) => {
                e.preventDefault()
                value2 += value
                setValue('')
                changeWheather(value2)
                data()
            }} className="header__button">Find wheather</button>
        </form>
    )
}

export default HeaderForm