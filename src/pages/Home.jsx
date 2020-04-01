import React, { Component } from 'react'
import withAuth from '../components/HOC/withAuth'
import Login from '../components/auth/Login'

class Home extends Component {
    render() {
        return (
            <main className='home-page'>
                <Login {...this.props} />
            </main>
        )
    }
}

export default withAuth(Home)