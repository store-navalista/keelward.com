import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { reducer } from './reducers'

const store = configureStore({
   reducer: {
      reducer
   }
})

setupListeners(store.dispatch)

export default store
