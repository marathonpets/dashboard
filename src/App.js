import React, { Component } from 'react';
import firebase from 'firebase/app';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { initFirebase, showSection } from './config/fbConfig';
import Navbar from './components/nav-layout/navbar';
// import Link from './components/link-dashboard';
import Link from './store/containers/link';
import Dashboard from './store/containers/dashboard';
import SignInCard from './components/link-cards/signin-card';
import SignUpCard from './components/link-cards/signup-card';
import ConnectCard from './components/link-cards/connect-card';

class App extends Component {
	constructor(props) {
		super(props)
		// if (!firebase.apps.length) {
			initFirebase();
		// }
	}

	componentDidMount () {
		showSection();
	}

	render() {
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<Switch>
         				<Route exact path="/" component={Dashboard} />
         				<Route path="/link" component={Link} />
         				<Route path="/signin" component={SignInCard} />
         				<Route path="/signup" component={SignUpCard} />
         				<Route path="/connect" component={ConnectCard} />
         				<Route path="/dashboard/:id" component={Dashboard} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
