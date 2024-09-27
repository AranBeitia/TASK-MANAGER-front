import { style } from '@vanilla-extract/css'
import { themeContract } from '@/assets/themes.css'

export const CardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  border: `2px solid ${themeContract.color.secondary}`,
  borderRadius: '20px',
  padding: '3rem',
  minWidth: '600px',
  width: '100%',
  backgroundColor: themeContract.color.background
})
