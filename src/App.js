import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { initFirebase } from './config/fbConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import C from './constants';
import Navbar from './components/nav-layout/navbar';
// import Link from './components/link-dashboard';
import Link from './store/containers/link';
import FrontPage from './components/dashboard/front-page';
import Dashboard from './store/containers/dashboard';
import LogInCard from './store/containers/login-card';
import SignUpCard from './store/containers/signup-card';
import ConnectCard from './store/containers/connect-card';
import Account from './store/containers/account';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<Switch>
         				<Route exact path="/" component={FrontPage} />
         				<Route path="/link" component={Link} />
         				<Route path="/login" component={LogInCard} />
         				<Route path="/signup" component={SignUpCard} />
         				<Route path="/connect" component={ConnectCard} />
         				<Route path="/account" component={Account} />
         				<Route path="/dashboard/:id" component={Dashboard} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
