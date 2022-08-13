import '../styles/App.css';
import '../styles/Join.css';
import React from "react";

function Join() {
    return (
        <div className="join">
            <div className='join__text'>
                <h1>Want to get involved?</h1>
                <p>or learn about <span style={{color: '#FDC943'}}>how we built Treasure.</span></p>
                <button className='button joinButton'>Launch App</button>
            </div>
        </div>
    )
}

export default Join;