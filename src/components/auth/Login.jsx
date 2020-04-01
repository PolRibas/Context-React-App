import React, { Component } from 'react'

class Login extends Component {
    state = {
        password: '',
        username: '',
        errorMessage: false
    }

    handleSubmit = e => {
        e.preventDefault();
        const {password, username} = this.state
        this.props.login({password, username})
        .then()
        .catch(e => this.setState({
            errorMessage: true,
            password: '',
            username: '',
        }))
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value, errorMessage: false,})

    render() {

        const {password, username, errorMessage} = this.state

        return (
            <div className={this.props.styla}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
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
            </div>
        )
    }
}

export default Login