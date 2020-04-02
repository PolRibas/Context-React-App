import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import AnonimRoute from './components/routes/AnonimRoute';
import Home from './pages/Home';
import PrivateRoute from './components/routes/PrivateRoute';
import Private from './pages/Private';
import AuthProvaider from './context/auth-context';

import "./css/main.css";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <AuthProvaider>
                    <AnonimRoute path="/" exact component={Home} />
                    <PrivateRoute path="/spawn" exact component={Private} />
                </AuthProvaider>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
