import React, { Component } from "react";
import { Row, Input } from 'react-materialize';

class SignUpCard extends Component {
	state = {
		first_name: "",
		last_name: "",
		zipcode: "",
		number_of_pets: "",
		system_of_measurement: "",
		email: "",
		password: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log('state', this.state);
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div className="container signup-container">
				<form className="white col s6" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign Up</h5>
					<Row>
						<Input s={12} type='text' id="first_name" label="First Name" onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='text' id="last_name" label="Last Name" onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='text' id="zipcode" label="Zipcode" onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='select' label="Number Of Pets Running On The Wheel" defaultValue='1'>
							<option value="1">1 Pet</option>
							<option value="2">2 Pet</option>
							<option value="3">3 Pet</option>
							<option value="4">4 Pet</option>
							<option value="5">5 Pet</option>
							<option value="6">6 Pet</option>
							<option value="7">7 Pet</option>
							<option value="8">8 Pet</option>
							<option value="9">9 Pet</option>
							<option value="10">10+ Pets</option>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='select' label="Number Of Pets Running On The Wheel" defaultValue='1'>
							<option value="standard">Feet / Miles</option>
							<option value="metric">
								Meters / Kilometers
							</option>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='email' id="email" label="Email" onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='password' id="password" label="Password" onChange={this.handleChange}>
						</Input>
					</Row>
					<div className="row right link-buttons">
						<div className="input-field col s12">
							<button className="btn pink lighten-1 z-depth-0">
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
