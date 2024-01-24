import { combineReducers } from 'redux'
import ContentReducer from './contentReducer'
import DashboardReducer from './dashboardReducer'
import JobsReducer from './jobsReducer'

export const reducer = combineReducers({
   content: ContentReducer,
   dashboard: DashboardReducer,
   jobs: JobsReducer
})
