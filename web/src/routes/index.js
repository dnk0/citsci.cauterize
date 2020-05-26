import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import authRoutes from './routes.auth';
import userRoutes from './routes.users';
import scenarioRoutes from './routes.scenarios';
import PageLayout from "../components/pageLayout/PageLayout";
import App from "../App";

const RouterRoot = () => (
    <Router>
        <PageLayout>
        <Switch>
            <Route path="/" exact component={() => (<App/>)} />
            {authRoutes}        {/* all routes which handle the authentication protocol*/}
            {userRoutes}        {/* all routes which handle user profiles/ edit profile/ ...*/}
            {scenarioRoutes}    {/* all routes which handle the display and documentation of scenarios*/}
                                {/* /scenarios/:query get all scenarios/list/filtered by query*/}
                                {/* /scenarios/:id display specific scenario*/}
                                {/* /scenarios/:id/leaderboard display the leaderboard for the scenario*/}
                                {/* /scenarios/:id/models/:id2 display information about the algorithm with id2 solving scenario with id*/}
                                {/* /scenarios/:id/models/upload */}

            {/*{dataQualityRoutes} // ...*/}
            {/*{datenAuswertung}   // query/search interface for all data, do statistics and other stuff*/}
            <Route path="*" component={
                () => (<div>
                    lo no matcho
                </div>)
            }/>
        </Switch>
        </PageLayout>
    </Router>
)

export default RouterRoot