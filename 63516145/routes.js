import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Brand from './pages/Brand';
import Users from './pages/Users';
import Create from './pages/Create';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component ={ Home } />
                <Route path="/brand" component={ Brand } />
                <Route path="/users" component={ Users } />
                <Route path="/create" component={ Create } />
            </Switch>
        </BrowserRouter>
    )
}
