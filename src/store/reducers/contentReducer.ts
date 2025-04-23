import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IMediaQuery {
   isMobile: boolean | undefined
   isLaptop: boolean | undefined
}

export interface ContentState {
   cursorIsHovered: boolean
   hoveredLink: string
   currentLang: string
   prefix: string
   mediaQuery: IMediaQuery
}

export const initialState: ContentState = {
   cursorIsHovered: true,
   hoveredLink: 'HOME',
   currentLang: 'en',
   prefix: '',
   mediaQuery: {
      isMobile: undefined,
      isLaptop: undefined
   }
}

export const ContentSlice = createSlice({
   name: 'content',
   initialState,
   reducers: {
      setLanguage(state, action: PayloadAction<string>) {
         const lang = action.payload.substring(0, 2)
         state.currentLang = lang
         state.prefix = `/${lang}`
      },
      setMediaQuery(state, action: PayloadAction<IMediaQuery>) {
         state.mediaQuery = { ...action.payload }
      },
      setIsHovered(state, action: PayloadAction<boolean>) {
         state.cursorIsHovered = action.payload
      },
      setHoveredLink(state, action: PayloadAction<string>) {
         state.hoveredLink = action.payload
      }
   }
})

export const ContentActions = ContentSlice.actions
export default ContentSlice.reducer
