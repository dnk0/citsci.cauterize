import React from "react";

class ScenariosListItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className={"scenarios-list-item"}>
                <div className={"scenarios-list-item-title"}></div>
                <div className={"scenario-list-item-children"}></div>
            </li>
        );
    }
}

export default ScenariosListItem;