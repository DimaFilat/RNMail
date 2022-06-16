import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {ThemeProvider} from '@shopify/restyle'

import Navigations from '@/Navs'
import light from '@/themes/light'
import StatusBar from '@/components/StatusBar'

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
