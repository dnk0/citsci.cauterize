import { connect } from 'react-redux'
import ScenarioList from '../components/scenarioList/scenarioList'
import { VisibilityFilters } from '../actions/visibilityFilter'
import { HandleEntries } from '../actions/handleEntries'

const getVisibleScenarios = (scenarios, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
          return scenarios 
    default:
          throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
    scenarios: getVisibleScenarios(state.scenarios, state.visibility)
})

const mapDispatchToProps = dispatch => ({
    tailScenario: () => dispatch({type: 'TAIL'}),
    addEntry: () => dispatch({type: 'ADD_ENTRY'})
})

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioList)



