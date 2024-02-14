import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import thunk from 'redux-thunk'
import { reducer } from './reducers'
import { api } from './reducers/apiReducer'

const store = configureStore({
   reducer: {
      reducer,
      [api.reducerPath]: api.reducer
   },
   middleware: (getDefault) => getDefault({ serializableCheck: false }).concat(thunk, api.middleware)
})

setupListeners(store.dispatch)

export default store
