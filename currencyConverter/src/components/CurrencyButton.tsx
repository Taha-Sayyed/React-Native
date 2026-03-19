import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps=PropsWithChildren<{
    name:string,
    flag:string
}>

const CurrencyButton = (props:CurrencyButtonProps) => {
  return (
    <View>
      <Text>{props.flag}</Text>
      <Text>{props.name}</Text>
    </View>
  )
}

export default CurrencyButton