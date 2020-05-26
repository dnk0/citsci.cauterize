import React from 'react';
import {Switch, Route} from "react-router-dom";

const routes = (
    <Route path={"/scenarios"}>
        <div>
            lol scenarios
        </div>
        <Switch>
            {/* /scenarios/:query get all scenarios/list/filtered by query*/}
            <Route path="/scenarios/:query" component={
                () => (<div>lol query boilerplate</div>)}/>
            {/* /scenarios/:id display specific scenario*/}
            <Route path="/scenarios/:id" component={
                () => (<div>a specific scneario with id</div>)}/>
            {/* /scenarios/:id/leaderboard display the leaderboard for the scenario*/}
            <Route path="/scenarios/:id/leaderboard" component={
                () => (<div>the leaderboard of scenario with id</div>)}/>
            {/* /scenarios/:id/models/:id2 display information about the algorithm with id2 solving scenario with id*/}
            <Route path="/scenarios/:id/models/:id2" component={
                () => (<div>display a specific model for a specific scenario</div>)}/>
            {/* /scenarios/:id/models/upload */}
            <Route path="/scenarios/:id/models/upload" component={
                () => (<div>here should be an upload form a new leaderboard entry</div>)}/>
        </Switch>
    </Route>
)
export default routes;