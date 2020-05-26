import React from 'react';
import {Switch, Route} from "react-router-dom";

const routes = (
    <Route path={"/users"}>
        <div>
            lol users
        </div>
        <Switch>
            <Route path="/users/me" component={
                () => (<div>my profile boilerplate</div>)}/>
            <Route path="/users/:id" component={
                () => (<div>User with id boilerplate</div>)}/>
        </Switch>
    </Route>
)
export default routes;