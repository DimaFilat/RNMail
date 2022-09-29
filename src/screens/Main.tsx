import React, {useState, useCallback, useRef} from 'react'
import {CompositeScreenProps} from '@react-navigation/native'
import {DrawerScreenProps} from '@react-navigation/drawer'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import FeatherIcon from '@/components/Icon'
import HeaderBar from '@/components/Headerbar'
import MoveNoteSheet from '@/components/MoveNoteSheet'
import NoteList from '@/components/NoteList'
import {Box, Container, TouchableOpacity, Text} from '@/atoms'
import {HomeDrawerParamList, RootStackParamList} from '@/Navs'
import useStickyHeader from '@/hooks/useStickyHeader'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

const MainScreen = ({navigation}: Props) => {
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null)
  const {handleNoteListLayout, handleScroll, headerBarStyle, headerBarHeight} =
    useStickyHeader()
  const [, setConcealNotelistItem] = useState<(() => void) | null>(null)
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])
  const handleNoteListItemPress = useCallback((_noteId: string) => {}, [])
  const handleNoteListItemSwipeLeft = useCallback(
    (_noteId: string, conceal: () => void) => {
      const {current: menu} = refMoveNoteSheet
      menu?.show()
      setConcealNotelistItem(conceal)
    },
    []
  )
  const handleMoveNotesSheetClose = useCallback(() => {
    setConcealNotelistItem(item => {
      item?.()
      return null
    })
  }, [])
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList
        contentInsetTop={headerBarHeight}
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
        onScroll={handleScroll}
      />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
        <TouchableOpacity
          m="xs"
          onPress={handleSidebarToggle}
          p="xs"
          rippleBorderless>
          <FeatherIcon name="menu" size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems="center">
          <Text fontWeight="bold">All notes</Text>
        </Box>
        <TouchableOpacity m="xs" p="xs" rippleBorderless>
          <FeatherIcon name="more-vertical" size={22} />
        </TouchableOpacity>
      </HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNotesSheetClose}
      />
    </Container>
  )
}

export default MainScreen
