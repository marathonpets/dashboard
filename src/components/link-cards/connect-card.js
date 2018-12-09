import React from 'react';
import { Row, Input } from 'react-materialize';

const ConnectCard = () => {
    return (
        <div className="container profile-container">
            <div className="wheel-connect">
                <ol>
                    <li>Plug In Wheel</li>
                    <li>Open Wifi and go to Marathon Pets Wifi</li>
                    <li>Connect</li>
                </ol>
            </div>
            <div className="wheel-register">
                <p>Enter the number listed on the back of you wheel</p>
                <Input type='text' label="wheel-number"></Input>
            </div>
        </div>
    )
}

export default ConnectCard;