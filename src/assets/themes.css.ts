import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css'

const globalVars = createGlobalTheme(':root', {
  color: {
    primary: '#15101c',
    secondary: '#9e78cf',
    tertiary: '#1d1825',
    light: '#ffffff',
    background: '#1d1825',
    text: '#212529'
  }
})

export const themeContract = createThemeContract({
  color: {
    primary: 'color-primary',
    secondary: 'color-secondary',
    tertiary: 'color-tertiary',
    light: 'color-light',
    background: 'color-background',
    text: 'color-text'
  }
})

export const lightTheme = createTheme(themeContract, {
  color: {
    primary: '#9e78cf',
    secondary: '#6c757d',
    tertiary: '#adb5bd',
    light: '#ffffff',
    background: '#f8f9fa',
    text: '#212529'
  }
})

export const darkTheme = createTheme(themeContract, {
  color: {
    primary: '#15101c',
    secondary: '#9e78cf',
    tertiary: '#1d1825',
    light: '#ffffff',
    background: '#343a40',
    text: '#f8f9fa'
  }
})
