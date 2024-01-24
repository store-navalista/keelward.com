import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducers'
import thunk from 'redux-thunk'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { api } from './reducers/apiReducer'

// const store = configureStore({
//    reducer: {
//       reducer,
//       [api.reducerPath]: api.reducer
//    },
//    middleware: (getDefault) => getDefault({ serializableCheck: false }).concat(thunk)
// })

const store = configureStore({
   reducer,

   middleware: (getDefault) => getDefault({ serializableCheck: false }).concat(thunk)
})

setupListeners(store.dispatch)

export default store
