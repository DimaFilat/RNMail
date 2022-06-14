import React, {useCallback, FC} from 'react'
import {FlatListProps, FlatList} from 'react-native'
// import {FlatList} from 'react-native-gesture-handler'
import {createBox} from '@shopify/restyle'

import Notes from '@/fixtures/notes'
import {Note} from '@/models'
import {Theme} from '@/themes'
import NoteListItem from './NoteListItem'

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList)

interface Props {}

const NoteList: FC<Props> = () => {
  const renderItem = useCallback(({item}) => {
    return <NoteListItem {...item} />
  }, [])

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={Notes}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      width="100%"
    />
  )
}

export default NoteList
