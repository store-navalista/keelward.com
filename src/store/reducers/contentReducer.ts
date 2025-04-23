import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IMediaQuery {
   isMobile: boolean | undefined
   isLaptop: boolean | undefined
}

interface IStateProps {
   cursorIsHovered: boolean
   hoveredLink: string
   currentPage: string
   currentLang: string
   prefix: string
   mediaQuery: IMediaQuery
}

const initialState: IStateProps = {
   cursorIsHovered: true,
   hoveredLink: 'HOME',
   currentPage: 'HOME',
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
      setID(state, action: PayloadAction<string>) {
         state.currentPage = action.payload
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
