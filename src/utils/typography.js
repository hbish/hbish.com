import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

fairyGatesTheme.baseFontSize = '18px'
fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => {
  const linkColor = '#103FEA'

  return {
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(1 / 5),
      marginBottom: rhythm(2 / 5),
    },
    a: {
      color: linkColor,
      textShadow: 'none',
      backgroundImage: 'none',
    },
    li: {
      marginBottom: rhythm(1 / 6),
    },
    nav: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 'fit-content',
    },
    blockquote: {
      borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
      },
    },
  }
}

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
