import React, {FC} from 'react'
import {BoxProps} from '@shopify/restyle'

import Box from './Box'
import {Theme} from '@/themes'

const Container: FC<BoxProps<Theme>> = ({children, ...props}) => (
  <Box flex={1} backgroundColor="background" {...props}>
    {children}
  </Box>
)

export default Container
