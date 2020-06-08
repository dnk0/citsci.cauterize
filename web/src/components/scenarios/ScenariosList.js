import React, { Fragment } from "react";
import './ScenariosList.css';
import ScenariosListItem from "./ScenariosListItem";

const ScenariosList = ({state, handleChange, handleBlur, handleSubmit, hasFailed}) => (
    <ul className={"scenarios-list"}>
        <ScenariosListItem
            title={"Images"}
            children={[
                {"title": "Imagenet-Face-Detection"},
                {"title": "Imagenet-Object-Detection"}
            ]}
        />
        <li className={"scenarios-list-item"}>
            <div className={"scenario-list-item-title"}>B</div>
        </li>
    </ul>
)

export default ScenariosList