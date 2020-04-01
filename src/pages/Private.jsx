import React, { Component } from 'react'
import Logout from '../components/auth/Logout'

class Private extends Component {
    render() {
        return (
            <main className='private-page'>
                <h2>this is a Private Page</h2>
                <Logout {...this.props}/>
            </main>
        )
    }
}


export default Private