import React, {useCallback} from 'react'

import {Note} from '@/models'
import {Text, TouchableOpacity} from '@/atoms'
import NoteListItemActionView from './NoteListItemActionView'
import SwipeableView from './SwipeableView'

export interface ListItemProps extends Note {
  onPress: (noteId: string) => void
  onSwipeLeft?: (noteId: string, done: () => void) => void
}

const NoteListItem: React.FC<ListItemProps> = props => {
  const {onPress, onSwipeLeft, id} = props
  const handleOnPress = useCallback(() => {
    onPress(id)
  }, [id, onSwipeLeft])
  const handleOnSwipeLeft = useCallback(
    done => {
      onSwipeLeft?.(id, done)
    },
    [id, onSwipeLeft]
  )
  const renderBackView = useCallback(
    ({progress}) => <NoteListItemActionView progress={progress} />,
    []
  )
  return (
    <SwipeableView
      backView={renderBackView}
      bg="yellow"
      onSwipeLeft={handleOnSwipeLeft}>
      <TouchableOpacity bg="background" px="lg" py="sm" onPress={handleOnPress}>
        <Text ellipsizeMode="tail" mb="xs" fontWeight="bold">
          {props.title}
        </Text>
        <Text
          ellipsizeMode="tail"
          fontSize={14}
          numberOfLines={2}
          opacity={0.7}>
          {props.body}
        </Text>
      </TouchableOpacity>
    </SwipeableView>
  )
}

export default NoteListItem
