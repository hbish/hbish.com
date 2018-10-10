import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.baseFontSize = '18px'
fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    marginTop: rhythm(1 / 5),
    marginBottom: rhythm(2 / 5),
  },
  a: {
    backgroundImage: 'none',
    textShadow: 'none',
  },
  li: {
    marginBottom: rhythm(1 / 6),
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
  },
  'article ul': {
    listStyleType: 'disc',
    marginLeft: rhythm(1),
    marginBottom: rhythm(1),
  },
})

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
