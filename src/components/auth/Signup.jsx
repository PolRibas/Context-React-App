import React, { Component } from 'react'

class Signup extends Component {
    state = {
        password: '',
        username: '',
        email: '',
        errorMessage: false
    }

    handleSubmit = e => {
        e.preventDefault();
        const {password, email, username} = this.state
        this.props.signup({password, email, username})
        .then()
        .catch(e => this.setState({
            errorMessage: true,
            password: '',
            username: '',
            email: '',
        }))
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value, errorMessage: false,})

    render() {
        const {password, username, email, errorMessage} = this.state
        return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input id='email' type='text' name='email' value={email} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label >Password:</label>
                        <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
                    </div>
                    <div className='submit-div'>
                        <input className='submit' type='submit' value='Log in' />
                    </div>
                    { errorMessage ? <p className='error'>Incorrect email or password</p> : null }
                </form>
        )
    }
}

export default Signup