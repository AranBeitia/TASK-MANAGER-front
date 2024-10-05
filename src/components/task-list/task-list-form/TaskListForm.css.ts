import { style } from '@vanilla-extract/css'
import { themeContract } from '@/assets/themes.css'

export const taskForm = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const taskInput = style({
  display: 'block',
  minWidth: '200px',
  width: '100%',
  outline: 0,
  padding: '0.5rem',
  borderRadius: '10px',
  border: `2px solid ${themeContract.color.secondary}`,
  background: themeContract.color.background
})

export const buttonStyle = style({
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: themeContract.color.primary,
  color: themeContract.color.text,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: themeContract.color.secondary
  }
})
