import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter';
import visibilityReducer from '../reducers/visibilityFilter'
import scenarioReducer from '../reducers/scenarios'
import { reducer as formReducer } from 'redux-form'

export default configureStore({
    reducer: {
        counter: counterReducer,
        visibility: visibilityReducer,
        scenarios: scenarioReducer,
        form: formReducer
    },
});
