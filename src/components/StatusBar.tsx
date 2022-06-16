import React, {FC} from 'react'
import {StatusBar as NativeStatusBar} from 'react-native'
import {useTheme} from '@shopify/restyle'

import {Theme} from '@/themes'

const StatusBar: FC = () => {
  const theme = useTheme<Theme>()

  return (
    <NativeStatusBar
      animated
      backgroundColor={theme.colors.windowBackground || 'white'}
      barStyle={theme.statusBar?.barStyle}
    />
  )
}

export default StatusBar
