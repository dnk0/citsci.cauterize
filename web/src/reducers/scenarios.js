import { VisibilityFilters } from '../actions/visibilityFilter'
import { HandleEntries } from '../actions/handleEntries'

const scenario = (state = [
    {
        id: 1,
        submissionDate: "2020-6-2",
        downloadLink: 'Download',
        status: 'verified',
        title: 'something', 
        category: 'Botnet',
        platform: 'Windows',
        target: 'Windows Defender',
        author: 'boneymoy'
    } 
    ], action) => {

    switch(action.type) {
        case 'TAIL' :
            return state.slice(1)
        case 'ADD_ENTRY':
            return [ 
                ...state,
                {
                    id: action.id,
                    submissionDate: action.submissionDate,
                    title: action.title,
                    category: action.category,
                    platform: action.platform,
                    target: action.target,
                    author: action.author
                }
            ]
        default:
            return state
    }
}

export default scenario
