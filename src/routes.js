import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Detail from './pages/Detail';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detail/:key" exact component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;