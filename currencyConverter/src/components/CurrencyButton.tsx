import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps=PropsWithChildren<{
    name:string,
    flag:string
}>

const CurrencyButton = ({name,flag}:CurrencyButtonProps) => {
  return (
    <View>
      <Text>{flag}</Text>
      <Text>{name}</Text>
    </View>
  )
}

export default CurrencyButton