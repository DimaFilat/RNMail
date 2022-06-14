import React from 'react'

import NoteList from '@/components/NoteList'
import {Container} from '@/atoms'

const MainScreen = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
    </Container>
  )
}

export default MainScreen
