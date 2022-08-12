import { createSlice } from '@reduxjs/toolkit'
import { getTheme } from 'utils'

type Theme = "PURPLE" | "GREEN"

interface IInitialState {
  activeTheme: Theme
  sideMenuIsOpen: boolean;
}

const getInitialTheme = (): Theme => {
  let theme = getTheme()

  if (theme === 'undefined' || !theme) {
    theme = 'PURPLE'
  }

  // @ts-ignore
  return theme
} 

const initialState: IInitialState = {
  activeTheme: getInitialTheme(),
  sideMenuIsOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    selectActiveTheme: (state, action) => {
      state.activeTheme = action.payload
    },
    openMenu: (state) => {
      state.sideMenuIsOpen = true
    },
    closeMenu: (state) => {
      state.sideMenuIsOpen = false
    }
  }
})

export const { selectActiveTheme, openMenu, closeMenu } = uiSlice.actions

export default uiSlice.reducer