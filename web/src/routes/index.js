import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import authRoutes from './routes.auth';
import PageLayout from "../components/pageLayout/PageLayout";
import App from "../App";

const RouterRoot = () => (
    <Router>
        <PageLayout>
        <Switch>
            <Route path="/" exact component={() => (<App/>)} />
            {authRoutes}
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