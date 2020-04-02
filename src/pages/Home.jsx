import React, { Component } from 'react';
import withAuth from '../components/HOC/withAuth';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

class Home extends Component {
	state = {
		login: true
	};

	render() {
		const {login} = this.state;
		return (
			<main className='home-page'>
				<div className={'login-box' + (login ? ' on' : ' off')}>
					<h2 
					onClick={() => this.setState({login: !login})}>Login to Your Account</h2>
					<Login {...this.props} />
				</div>
				<div className={'signup-box' + (!login ? ' on' : ' off')}>
					<h2 
					onClick={() => this.setState({login: !login})}>Create New Account</h2>
					<Signup {...this.props} />
				</div>
			</main>
		);
	};
};

export default withAuth(Home);