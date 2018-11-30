import React, { createContext, Dispatch, ReactNode, useReducer } from 'react'

export const enum ThemeType {
  Light = 'light',
  Dark = 'dark',
  Custom = 'custom',
}

interface PrimaryColor {
  kind: 'primary';
  color: string;
}
interface SecondaryColor {
  kind: 'secondary';
  color: string;
}
type CustomColor = PrimaryColor | SecondaryColor

export const enum ActionType {
  ResetTheme,
  ToggleTheme,
  ChangeColor,
  ToggleCustomColors,
}

// this is our dispatch type?
interface ThemeAction {
  type: ActionType;
  payload?: CustomColor;
}

interface ThemeState {
  theme: ThemeType;
  dispatch: Dispatch<ThemeAction>;
  customThemeEnabled: boolean;
  primaryColor?: CustomColor;
  secondaryColor?: CustomColor;
}

const initialState: ThemeState = {
  theme: ThemeType.Light,
  customThemeEnabled: false,
  dispatch: action => ({ ...action }),
}

export const ThemeContext = createContext(initialState)

export const reducer = (state: ThemeState, action: ThemeAction) => {
  // not sure the + operator is necessary?
  // switch (+action.type) {
  switch (+action.type) {
    case ActionType.ResetTheme:
      return initialState

    case ActionType.ToggleTheme:
      return { ...state, theme: state.theme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light }

    case ActionType.ToggleCustomColors:
      return { ...state, customThemeEnabled: !state.customThemeEnabled }

    case ActionType.ChangeColor:
      return {
        ...state,
        theme: ThemeType.Custom,
        primaryColor: action.payload && action.payload.kind === 'primary'
          ? { ...action.payload }
          : state.primaryColor,
        secondaryColor: action.payload && action.payload.kind === 'secondary'
          ? { ...action.payload }
          : state.secondaryColor,
      }

    // case ActionType.Randomize:
    //   // TODO: make this actually random
    //   return { ...state, theme: ThemeType.Random, primaryColor: 'orange', secondaryColor: 'blue' }

    default:
      return state
  }
}

interface ProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider(props: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeContext.Provider value={{ ...state }}>
      {dispatch.toString()}
      {props.children}
    </ThemeContext.Provider>
  )
}

export const ThemeContextConsumer = ThemeContext.Consumer
