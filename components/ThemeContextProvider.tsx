import React, { useState } from 'react'
import { Purple, Theme } from '../src/theme'

export const ThemeContext = React.createContext({
  theme: Purple,
  setTheme: (theme: Theme) => {}
})

export const ThemeContextProvider = (props: any) => {

  const setTheme = (theme: Theme) => {
    setState({...state, theme: theme})
  }

  const initState = {
    theme: Purple,
    setTheme: setTheme
  } 

  const [state, setState] = useState(initState)

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  )
}