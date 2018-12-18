import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

class SignUpCard extends Component {
	state = {
		username: '',
		first_name: '',
		last_name: '',
		zipcode: '',
		number_of_pets: '',
		system_of_measurement: '',
		email: '',
		password: ''
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log('state', this.state);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signUpUser(this.state);
	
		console.log('login card submit', this.state);
	}

	render() {
		return (
			<div className='container signup-container'>
				<form className='white col s6' onSubmit={this.handleSubmit}>
					<h5 className='grey-text text-darken-3'>Sign Up</h5>
					<Row>
						<Input s={12} type='text' id='username' label='Username' onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='text' id='first_name' label='First Name' onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='text' id='last_name' label='Last Name' onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='text' id='zipcode' label='Zipcode' onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='select' id='pets' label='Number Of Pets Running On The Wheel' defaultValue='1' onChange={this.handleChange}>
							<option value='1'>1 Pet</option>
							<option value='2'>2 Pets</option>
							<option value='3'>3 Pets</option>
							<option value='4'>4 Pets</option>
							<option value='5'>5 Pets</option>
							<option value='6'>6 Pets</option>
							<option value='7'>7 Pets</option>
							<option value='8'>8 Pets</option>
							<option value='9'>9 Pets</option>
							<option value='10'>10+ Pets</option>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='select' id='metric' label='Speed & Distance Tracking' defaultValue='1' onChange={this.handleChange}>
							<option value='standard'>Feet / Miles</option>
							<option value='metric'>
								Meters / Kilometers
							</option>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='email' id='email' label='Email' onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='password' id='password' label='Password' onChange={this.handleChange}>
						</Input>
					</Row>
					<div className='row right link-buttons'>
						<div className='input-field col s12'>
							<button className='btn pink lighten-1 z-depth-0' onClick={e => this.handleSubmit(e)}>
								Sign Up
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUpCard;
