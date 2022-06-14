import React from 'react'

import NoteList from '@/components/NoteList'
import {Container} from '@/atoms'
import FeatherIcon from '@/components/Icon'
import HeaderBar from '@/components/Headerbar'

const MainScreen = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
      <HeaderBar>
        <FeatherIcon name="menu" size={22} />
        <FeatherIcon name="more-vertical" size={22} />
      </HeaderBar>
    </Container>
  )
}

export default MainScreen
