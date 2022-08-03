import '../styles/App.css';
import '../styles/Cover.css';
import React from "react";

function Cover() {
    return (
        <div className="cover">
            <div className='cover__text'>
                <h1>LIQUIDITY VAULTS FOR DAOS</h1>
                <p>Unlock native token liquidity and add more treasure to your treasury.</p>
                <div className='cover__buttons'>
                <button className='button coverButton'>Invest</button>
                <button className='button__counter coverButton'>Documentation</button>
                </div>
            </div>
        </div>
    )
}

export default Cover;