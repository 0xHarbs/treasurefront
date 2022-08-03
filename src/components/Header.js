import '../styles/App.css';
import '../styles/Header.css';
import React from "react";

function Header() {
    return (
        <div className="header">
            <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pirate_Flag.svg/2560px-Pirate_Flag.svg.png" alt=""></img>
            <button className='button'>Launch App</button>
        </div>
    )
}

export default Header;