import { TID } from '@/constants/dashboard'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DashboardState {
   dashboardItems: Record<TID, boolean>
}

const initialState: DashboardState = {
   dashboardItems: {
      account: false,
      time: true,
      qr: false,
      radio: false,
      employees: false,
      users: false
   }
}

export const DashboardSlice = createSlice({
   name: 'dashboard',
   initialState,
   reducers: {
      setDahsboardItems(state, action: PayloadAction<DashboardState['dashboardItems']>) {
         state.dashboardItems = { ...state.dashboardItems, ...action.payload }
      }
   }
})

export const DashboardActions = DashboardSlice.actions
export default DashboardSlice.reducer
