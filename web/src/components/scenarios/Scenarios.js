import React, { Fragment } from "react";
import './Scenarios.css';
import ScenariosList from "./ScenariosList";

const Scenarios = ({children}) => (
    <div className={"scenarios-wrapper"}>
        <div className={"scenarios-sidebar"}>
            <ScenariosList />
        </div>
        <div className={"scenarios-content"}>
            {children}
        </div>
    </div>
)

export default Scenarios