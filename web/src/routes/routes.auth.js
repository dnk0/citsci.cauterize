import React from 'react';
import {Switch, Route} from "react-router-dom";

const routes = (
    <Route path={"/auth"}>
        <div>
            lol auth
        </div>
        <Switch>
            <Route path="/auth/login" component={
                () => (<div>Template 1</div>)}/>
            <Route path="/auth/signup" component={
                () => (<div>Template 2</div>)}/>
        </Switch>
    </Route>
)
export default routes;