import React from 'react'

import {Note} from '@/models'
import {Box, Text} from '@/atoms'

export interface ListItemProps extends Note {}

const NoteListItem: React.FC<ListItemProps> = props => {
  return (
    <Box bg="background">
      <Box bg="background" px="lg" py="sm">
        <Text ellipsizeMode="tail" mb="xs" fontWeight="bold">
          {props.title}
        </Text>
        <Text
          ellipsizeMode="tail"
          fontSize={14}
          numberOfLines={2}
          opacity={0.7}
          >
          {props.body}
        </Text>
      </Box>
    </Box>
  )
}

export default NoteListItem
