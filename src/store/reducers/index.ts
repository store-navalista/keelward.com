import { combineReducers } from 'redux'
import ContentReducer from './contentReducer'
import DashboardReducer from './dashboardReducer'

export const reducer = combineReducers({
   content: ContentReducer,
   dashboard: DashboardReducer
})
