import React, { Component } from 'react'
import auth from '../services/auth-service'


export const AuthContext = React.createContext();

class AuthProvaider extends Component {
    state = {
        isLoggedIn: false,
        user: null,
        isLoading: true
    }

    signUp = (user) => {
        return auth.signup(user)
            .then( (user) => {
            this.setState({
                user,
                isLoggedIn: true,
            });
        })
    }

    login = (user) => {
        return auth.login(user)
        .then( (user) => {
            this.setState({
                user,
                isLoggedIn: true,
                isLoading: false,
            });
        })
    }

    logout = () => {
        return auth.logout()
        .then(() => {
            this.setState({
                user: null,
                isLoggedIn: false,
                isLoading: false,
            });
        })
    }

    getMe = () => {
        this.setState({isLoading: true})
        auth.me()
        .then(user => {
            this.setState({
                user,
                isLoggedIn:true,
                isLoading: false
            })
        })
        .catch(() => {
            this.setState({
                user: null,
                isLoggedIn: true,
                isLoading: false
            });
        })
    }

    componentDidMount() {
        this.getMe()
    }

    render() {
        const {user, isLoggedIn, isLoading} = this.state;
        return isLoading ? <div className='loading-component'>
            <p>... Your Loading Component ...</p>
            </div> : 
            <AuthContext.Provider value={
                {user, 
                isLoggedIn,
                login: this.login,
                signup: this.signUp,
                logout: this.logout,
                getMe: this.getMe
                }
            }>
                {this.props.children}
            </AuthContext.Provider>
    }
}

export default AuthProvaider
