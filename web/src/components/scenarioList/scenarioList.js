import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Scenario from './../scenario/scenario'
import './scenarioList.css'

const ScenarioList = ({scenarios, onScenarioClick, tailScenario, addEntry}) => (

    <Fragment>
    
        <table className="scenario-table">
            <caption>Available Scenarios</caption>
            <tr className="scenario-header">
                <th className="header-entry">Submission Date</th>
                <th className="header-entry">Download Link</th>
                <th className="header-entry">Status</th>
                <th className="header-entry">Title</th>
                <th className="header-entry">Category</th>
                <th className="header-entry">Platform</th>
                <th className="header-entry">Target</th>
                <th className="header-entry">Author</th>
            </tr>
            {scenarios.map((scenario, index) => (
                <Scenario key={scenario.id} {...scenario} onClick={() => onScenarioClick(scenario.id)} />
            ))}
        </table>
    </Fragment>
)

ScenarioList.propTypes = {
  scenarios: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      submissionDate: PropTypes.instanceOf(Date).isRequired,
      downloadLink: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default ScenarioList
