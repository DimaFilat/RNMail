import React, {forwardRef, useRef, useImperativeHandle, useMemo} from 'react'
import RNBottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet'

import {Box, Text} from '@/atoms'
import BottomSheet from './BottomSheet'

interface Props {
  onClose?: () => void
}

interface MoveNoteSheetHandle {
  show: () => void
}

const MoveNoteSheet = forwardRef<MoveNoteSheetHandle, Props>(
  ({onClose}, ref) => {
    const refBottomSheet = useRef<RNBottomSheet>(null)
    const snapPoints = useMemo(() => ['60%', '90%'], [])
    useImperativeHandle(ref, () => ({
      show: () => {
        const {current: bottomSheet} = refBottomSheet
        bottomSheet?.snapToIndex(0)
      }
    }))

    return (
      <BottomSheet
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
        bottomInset={46}
        detached
        enablePanDownToClose
        index={-1}
        onClose={onClose}
        ref={refBottomSheet}
        snapPoints={snapPoints}
        style={{marginHorizontal: 12}}>
        <Box justifyContent={'center'} alignItems={'center'}>
          <Text fontWeight={'bold'}>Move</Text>
        </Box>
      </BottomSheet>
    )
  }
)

type MoveNoteSheet = MoveNoteSheetHandle

export default MoveNoteSheet
