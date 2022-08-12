import { RefObject, useEffect } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'store/rootReducer'
import { themes } from './themes'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useOutsideClick = (ref: RefObject<HTMLElement>, handleClick: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClick()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClick]);
}

export const getLocale = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.language || 'en';
  }
}

export const getTheme = () => window.localStorage.getItem('theme')

export const setInitialTheme = () => {
  let theme = window.localStorage.getItem('theme')
  
  if (theme === 'undefined' || !theme) {
    theme = 'PURPLE'
    window.localStorage.setItem('theme', 'PURPLE')
  }

  // @ts-ignore
  const selectedTheme: ITheme = themes[theme]

  Object.keys(selectedTheme).forEach((key: string) => {
    const value = selectedTheme[key]
    document.documentElement.style.setProperty(key, value)
  })
}

export const setTheme = (theme: "PURPLE" | "GREEN") => {
  window.localStorage.setItem('theme', theme)
  const selectedTheme: ITheme = themes[theme]

  Object.keys(selectedTheme).forEach((key: string) => {
    const value = selectedTheme[key]
    document.documentElement.style.setProperty(key, value)
  })
}