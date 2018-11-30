import React, { useContext } from 'react'
import styled from 'styled-components'
import {
  ActionType,
  ThemeContext,
  ThemeType,
} from './Context'

const ThemeStyles = styled.div`
  .light {
    background: orange;
  }
  .dark {
    background: black;
  }

`

function ToggleTheme() {
  const { theme, dispatch } = useContext(ThemeContext)
  return (
    <ThemeStyles>
      <div className={theme}>
        <button onClick={() => dispatch({ type: ActionType.ToggleTheme })}>
          Change to {theme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light} theme
        </button>
      </div>
    </ThemeStyles>
  )

}

export default ToggleTheme