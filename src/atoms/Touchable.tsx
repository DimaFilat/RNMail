import React, {FC} from 'react'
import {Platform} from 'react-native'
import {
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  BorderProps,
  OpacityProps,
  ResponsiveValue,
  backgroundColor,
  backgroundColorShorthand,
  border,
  composeRestyleFunctions,
  opacity,
  useResponsiveProp,
  useRestyle,
  useTheme
} from '@shopify/restyle'

import {Theme} from '@/themes'
import Pressable, {PressableProps} from './Pressable'

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColorShorthand,
  backgroundColor,
  opacity,
  border
])

interface Props extends PressableProps {
  pressed?: RestyleProps
  rippleColor?: ResponsiveValue<keyof Theme['colors'], Theme>
  rippleBorderless?: boolean
}

const Touchable = ({
  pressed = {},
  rippleColor = 'primary',
  rippleBorderless = false,
  style,
  ...rest
}: Props) => {
  const {style: pressedStyle = undefined} = useRestyle(
    restyleFunctions,
    pressed
  )
  const theme = useTheme<Theme>()
  const rippleColorProp = useResponsiveProp(rippleColor)
  const rippleColorValue = rippleColorProp && theme.colors[rippleColorProp]

  return (
    <Pressable
      {...rest}
      android_ripple={{color: rippleColorValue, borderless: rippleBorderless}}
      // @ts-ignore
      style={({pressed: isPressed}) =>
        isPressed ? [style, pressedStyle] : style
      }
    />
  )
}

export const TouchableOpacity: FC<Props> = props => (
  <Touchable
    {...props}
    rippleColor="foreground"
    pressed={{opacity: Platform.select({ios: 0.6})}}
  />
)

export default Touchable
