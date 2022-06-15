import React, {FC} from 'react'

import AnimatedBox, {AnimatedBoxProps} from '@/atoms/AnimatedBox'
import {Bar} from '@/atoms'

const HeaderBar: FC<AnimatedBoxProps> = ({children, ...restProps}) => {
  return (
    <AnimatedBox position="absolute" top={0} left={0} right={0} {...restProps}>
      <Bar
        variant="headerBar"
        flexDirection="row"
        alignItems="center"
        mx="lg"
        my="md"
        px='sm'
        minHeight={44}>
        {children}
      </Bar>
    </AnimatedBox>
  )
}

export default HeaderBar
