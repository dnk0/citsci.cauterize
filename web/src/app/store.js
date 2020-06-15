import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter';
import visibilityReducer from '../reducers/visibilityFilter'
import scenarioReducer from '../reducers/scenarios'

export default configureStore({
    reducer: {
        counter: counterReducer,
        visibility: visibilityReducer,
        scenarios: scenarioReducer
    },
});
