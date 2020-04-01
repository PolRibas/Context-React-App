import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import AnonimRoute from './components/routes/AnonimRoute';
import Home from './pages/Home';
import PrivateRote from './components/routes/PrivateRote';
import Private from './pages/Private';
import AuthProvaider from './context/auth-context';

const Router = () =>
    <BrowserRouter>
        <Switch>
            <AuthProvaider>
                <AnonimRoute path="/" exact component={Home} />
                <PrivateRote path="/spawn" exact component={Private} />
            </AuthProvaider>
        </Switch>
    </BrowserRouter>

export default Router;
