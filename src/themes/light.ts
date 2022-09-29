import {StatusBarStyle} from 'react-native'
import {createTheme} from '@shopify/restyle'

// Palette
const p = {
  black: '#000',
  blue70: '#2185d0',
  blue: 'blue',
  navy20: '#171a21',
  navy90: '#b9babc',
  paper00: '#ffffff',
  paper10: '#f5f5f4',
  paper20: '#e6e6e6',
  paper30: '#767577',
  paper90: '#202020',
  red: '#ff0000',
  white: '#ffffff',
  yellow: 'yellow'
}

const theme = createTheme({
  spacing: {
    '0': 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  colors: {
    black: p.black,
    red: p.red,
    blue: p.blue,
    yellow: p.yellow,
    white: p.white,

    background: p.paper10,
    foreground: p.paper90,
    primary: p.blue70,
    sidebarBackground: p.navy20,
    sidebarForeground: p.navy90,
    sidebarSeparator: p.paper00 + '00',
    windowBackground: '#f0f0f0',
    headerBarBackground: p.paper20
  },
  borderRadii: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    hg: 128
  },
  statusBar: {
    barStyle: 'dark-content' as StatusBarStyle
  },
  barVariants: {
    headerBar: {
      bg: 'headerBarBackground',
      borderRadius: 'hg'
    }
  },
  textVariants: {
    defaults: {
      color: 'foreground',
      fontSize: 16
    },
    sidebar: {
      color: 'sidebarForeground'
    }
  }
})

export default theme
