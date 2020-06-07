import React from 'react'
import PropTypes from 'prop-types'
import './scenario.css'

const Scenario = ({ submissionDate, downloadLink, status, title, category, platform, target, author, onClick}) => (
    <tr className="scenario-entry"
        onClick={onClick}
    >
        <td>{submissionDate}</td>
        <td>{downloadLink}</td>
        <td>{status}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{platform}</td>
        <td>{target}</td>
        <td>{author}</td>
    </tr>
)

Scenario.propTypes = {
  onClick: PropTypes.func,
  submissionDate: PropTypes.instanceOf(Date),
  downloadLink: PropTypes.string,
  status: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  platform: PropTypes.string,
  target: PropTypes.string,
  author: PropTypes.string,
}

export default Scenario
