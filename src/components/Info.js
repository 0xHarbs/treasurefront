import '../styles/App.css';
import '../styles/Info.css';
import React from "react";

function Info() {
    return (
        <div className='info'>
            <div className='info__valueSection'>
                <div className='info__valuePoints'>
                    <div className='info__valueBucket'>
                        <img className='info__image' src="https://cdn-icons-png.flaticon.com/512/1907/1907938.png" alt=""></img>
                        <h3>UNLOCK LIQUIDITY</h3>
                        <p>Borrow stablecoins by paying a yield in your native token.</p>
                    </div>
                    <div className='info__valueBucket'>
                        <img className='info__image' src="https://cdn-icons-png.flaticon.com/512/1907/1907935.png" alt=""></img>
                        <h3>EARN YIELD</h3>
                        <p>Earn revenue on borrowed tokens and grow your treasury reserves.</p>
                    </div>
                    <div className='info__valueBucket'>
                        <img className='info__image' src="https://cdn-icons-png.flaticon.com/512/1355/1355901.png" alt=""></img>
                        <h3>USE TREASURE</h3>
                        <p>Use your earnings to invest in grow or extend your runway.</p>
                    </div>
                </div>
            </div>
            <div className="info__vaultSection">
                <div className='info__title'>
                    <h3 className='info__smallTitle'>BUILT TO LAST</h3>
                    <h1>TOOLS TO LAST CYCLES</h1>
                    <p>Treasure was built to be a lasting treasury management protocol</p>
                </div>
                <div className='info__protocolValues'>
                    <div className='info__protocolBucket'>
                        <h3>Composability</h3>
                        <p>Composable protocol for anybody to deploy yield generating strategies.</p>
                    </div>
                    <div className='info__protocolBucket'>
                        <h3>Decentralised</h3>
                        <p>Vaults are fully decentralised smart contracts with no censorability.</p>
                    </div>
                </div>
                <div className='info__protocolValues'>
                    <div className='info__protocolBucket'>
                        <h3>Composability</h3>
                        <p>Composable protocol for anybody to deploy yield generating strategies.</p>
                    </div>
                    <div className='info__protocolBucket'>
                        <h3>Decentralised</h3>
                        <p>Vaults are fully decentralised smart contracts with no censorability.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;