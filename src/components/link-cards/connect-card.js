import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

class ConnectCard extends Component {
    state = {
        wheelId: ''
    }
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log('state', this.state);
	};
	handleSubmit = (e) => {
		e.preventDefault(); 
		this.props.connectWheel(this.state);
	
		console.log('login card submit', this.state);
	}
    render () {
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
                    <Row>
                        <Input type='text' id="wheelId" label="wheel-number" onChange={this.handleChange}>
                        </Input>
                    </Row>
                </div>
                <div className='row right link-buttons'>
                    <div className='input-field col s12'>
                        <button className='btn pink lighten-1 z-depth-0' onClick={e => this.handleSubmit(e)}>
                            Connect Your Wheel
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnectCard;