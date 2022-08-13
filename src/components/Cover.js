import '../styles/App.css';
import '../styles/Cover.css';
import React from "react";
import { Link } from "react-router-dom";

function Cover() {
    return (
        <div className="cover">
            <div className='cover__text'>
                <h3>INTRODUCING TREASURE</h3>
                <h1>Treasury management protocol for DAOs</h1>
                <p>Treasure delivers open-source treasury lending and support service to help you earn on your native token.</p>
                <div className='cover__buttons'>
                <Link to="choose">
                <button className='button coverButton'>Launch App</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Cover;