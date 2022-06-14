import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {ThemeProvider} from '@shopify/restyle'

import Navigations from '@/Navs'
import light from '@/themes/light'

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
