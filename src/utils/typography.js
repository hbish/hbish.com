import Typography from 'typography'

const typography = new Typography({
  title: 'Minimal',
  baseFontSize: '18px',
  baseLineHeight: 1.36,
  scaleRatio: 3.157,
  headerFontFamily: ['Bitter', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  headerWeight: 500,
  googleFonts: [
    {
      name: 'Bitter',
      styles: ['700'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
