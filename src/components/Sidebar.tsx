import React, {FC} from 'react'
import {DrawerContentComponentProps} from '@react-navigation/drawer'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Box, Text} from '@/atoms'

const SideBar: FC<DrawerContentComponentProps> = ({children}) => {
  return (
    <Box flex={1} backgroundColor="sidebarBackground">
      <SafeAreaView>
        <Text variant={'sidebar'} m="lg">
          Inkdropp
        </Text>
      </SafeAreaView>
    </Box>
  )
}

export default SideBar
