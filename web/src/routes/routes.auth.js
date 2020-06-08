import React from 'react';
import {Switch, Route} from "react-router-dom";
import Login from "../containers/login/Login";

const routes = (
    <Route path={"/auth"}>
        <Switch>
            <Route path="/auth/login" component={
                () => (<Login />)}/>
            <Route path="/auth/signup" component={
                () => (<div>Template 2</div>)}/>
        </Switch>
    </Route>
)
export default routes;