import { style } from '@vanilla-extract/css'
import { themeContract } from '@/assets/themes.css'

export const button = style({
  border: `2px solid ${themeContract.color.secondary}`,
  backgroundColor: themeContract.color.secondary,
  transition: 'border-color 0.25s',
  borderRadius: '10px',
  color: themeContract.color.light,

  ':hover': {
    backgroundColor: themeContract.color.tertiary,
    color: themeContract.color.light
  },

  ':focus': {
    outline: '4px auto -webkit-focus-ring-color'
  },

  ':disabled': {
    backgroundColor: themeContract.color.background,
    cursor: 'not-allowed'
  }
})
