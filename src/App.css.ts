import { globalStyle } from '@vanilla-extract/css'

globalStyle('body', {
  display: 'grid',
  placeItems: 'center',
  minWidth: '320px',
  minHeight: '100vh'
})

globalStyle('h1', {
  fontSize: '3.2rem',
  lineHeight: 1.1
})

globalStyle('a', {
  fontWeight: 500,
  color: '#646cff',
  textDecoration: 'inherit',
  cursor: 'pointer'
})

globalStyle('a:hover', {
  color: '#535bf2'
})

globalStyle('button', {
  display: 'inline-flex',
  padding: '0.6em 1.2rem',
  fontSize: '1.2rem',
  fontWeight: 500,
  fontFamily: 'inherit',
  cursor: 'pointer'
})

globalStyle('button:hover', {
  backgroundColor: '#f1f1f1'
})

// @media (prefers-color-scheme: light) {
//   :root {
//     color: #213547;
//     background-color: #ffffff;
//   }
//   a:hover {
//     color: #747bff;
//   }
//   button {
//     background-color: #f9f9f9;
//   }
// }
// })
