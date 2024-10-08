import { createGlobalTheme, createTheme, createThemeContract, style } from '@vanilla-extract/css'

const globalVars = createGlobalTheme(':root', {
  color: {
    primary: '#15101c',
    secondary: '#9e78cf',
    tertiary: '#1d1825',
    light: '#ffffff',
    background: '#1d1825',
    text: '#212529',
    bgInput: '#CEAFF5'
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem'
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem'
  }
})

export const mixins = {
  flexCenter: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
}

export const themeContract = createThemeContract({
  color: {
    primary: 'color-primary',
    secondary: 'color-secondary',
    tertiary: 'color-tertiary',
    light: 'color-light',
    background: 'color-background',
    text: 'color-text',
    bgInput: 'color-bgInput'
  }
})

export const lightTheme = createTheme(themeContract, {
  color: {
    primary: '#9e78cf',
    secondary: '#15101c',
    tertiary: '#9e78cf',
    light: '#ffffff',
    background: '#f8f9fa',
    text: '#212529',
    bgInput: '#CEAFF5'
  }
})

export const darkTheme = createTheme(themeContract, {
  color: {
    primary: '#15101c',
    secondary: '#9e78cf',
    tertiary: '#1d1825',
    light: '#ffffff',
    background: '#343a40',
    text: '#f8f9fa',
    bgInput: 'transparent'
  }
})
