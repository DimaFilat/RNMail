import React, {useCallback, FC} from 'react'
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'
import {createBox} from '@shopify/restyle'
import Animated, {AnimateProps} from 'react-native-reanimated'

import Notes from '@/fixtures/notes'
import {Note} from '@/models'
import {Theme} from '@/themes'
import {Box} from '@/atoms'
import NoteListItem from './NoteListItem'

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList
)

interface Props {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (noteId: string) => void
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void
}

const NoteList: FC<Props> = ({
  contentInsetTop,
  onScroll,
  onItemPress,
  onItemSwipeLeft
}: Props) => {
  const renderItem = useCallback(
    ({item}) => {
      return (
        <NoteListItem
          {...item}
          onPress={onItemPress}
          onSwipeLeft={onItemSwipeLeft}
        />
      )
    },
    [onItemPress, onItemSwipeLeft]
  )

  const listHeaderComponent = <Box width="100%" height={contentInsetTop} />

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={Notes}
      keyExtractor={item => item.id}
      onScroll={onScroll}
      renderItem={renderItem}
      scrollEventThrottle={16}
      width="100%"
      ListHeaderComponent={listHeaderComponent}
    />
  )
}

export default NoteList
