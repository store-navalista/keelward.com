import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import contentReducer, { ContentState } from './reducers/contentReducer'

export const makeStore = (preloadedState?: PreloadedState<RootState>) =>
   configureStore({
      reducer: {
         content: contentReducer
      },
      preloadedState
   })

export type RootState = {
   content: ContentState
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
