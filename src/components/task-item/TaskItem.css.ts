import { style } from '@vanilla-extract/css'
import { themeContract } from '@/assets/themes.css'

export const ItemContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 1.5rem',
  marginBottom: '0.5rem',
  border: `2px solid ${themeContract.color.secondary}`,
  borderRadius: '0.5rem',
  backgroundColor: themeContract.color.background
})
