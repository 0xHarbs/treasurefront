import '../styles/App.css';
import '../styles/Partners.css';
import React from "react";

function Partners() {
    return (
        <div className="partners">
            <div className='partners__text'>
                <h2>Cooks & Gunners</h2>
                <div className='partners__images'>
                <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/800px-Ethereum_logo_translucent.svg.png" alt=""></img>
                <img className='header__logo' src="https://www.freelogovectors.net/wp-content/uploads/2022/03/debank-logo_freelogovectors.net_.png" alt=""></img>
                <img className='header__logo' src="https://cryptologos.cc/logos/siacoin-sc-logo.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Partners;