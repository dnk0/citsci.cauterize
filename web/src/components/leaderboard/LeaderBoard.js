import React from "react";
import './LeaderBoard.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const LeaderBoard = () => (
    <div className={"leaderboard-container"}>
        <ol className={"leaderboard"}>
            <li className={"leaderboard-item"}>
                <ul className={"leaderboard-item-content"}>
                    <li className={"leaderboard-item-rank"}>
                        1
                    </li>
                    <li className={"leaderboard-item-name"}>
                        Trading
                    </li>
                    <li className={"leaderboard-item-absolut"}>
                        509k
                    </li>
                    <li className={"leaderboard-item-relative"}>
                        +0%
                    </li>
                    <li className={"leaderboard-item-performance"}>

                    </li>
                    <li className={"leaderboard-item-actions"}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </li>
                </ul>
            </li>
        </ol>
    </div>
)

export default LeaderBoard;
