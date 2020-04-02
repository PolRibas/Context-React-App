import React, { Component } from 'react';
import Logout from '../components/auth/Logout';

class Private extends Component {
	render() {
		return (
			<main className='private-page'>
				<h1>Private Page</h1>
				<div className='logout-button'>
					<Logout {...this.props}/>
				</div>
			</main>
		);
	};
};

export default Private;