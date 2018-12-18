import React, { Component } from 'react'
import { Row, Input } from 'react-materialize';

class LogInCard extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logInUser(this.state);

    console.log('login card submit', this.state);
  }
  
  render() {
    return (
      <div className="container signin-container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <Row>
						<Input s={12} type='email' id="email" label="Email" onChange={this.handleChange}>
						</Input>
					</Row>
					<Row>
						<Input s={12} type='password' id="password" label="Password" onChange={this.handleChange}>
						</Input>
					</Row>
          <div className="row right link-buttons">
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0" onClick={e => this.handleSubmit(e)}>Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default LogInCard;
