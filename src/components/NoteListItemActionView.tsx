import React, {FC} from 'react'
import {SharedValue, useAnimatedStyle} from 'react-native-reanimated'

interface Props {
  progress: Readonly<SharedValue<number>>
}

import {AnimatedBox, Box} from '@/atoms'
import FeatherIcon from './Icon'

const NoteListItemActionView: FC<Props> = ({progress}) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: progress.value
      }
    ]
  }))
  return (
    <Box
      alignItems="center"
      bg="primary"
      flex={1}
      flexDirection="row"
      pr="xl"
      justifyContent="flex-end">
      <AnimatedBox
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        style={iconStyle}>
        <FeatherIcon name="folder" color="white" size={18} />
        <FeatherIcon name="arrow-right" color="white" size={12} />
      </AnimatedBox>
    </Box>
  )
}

export default NoteListItemActionView
