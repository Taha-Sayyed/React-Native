import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'

//navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

type DetailsProps=NativeStackScreenProps<RootStackParamList,'Details'>


const Details = ({route}:DetailsProps) => {

  const {productId}=route.params;
  const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>Details: {productId}</Text>
      <Button
        title='Go to Home'
        onPress={()=>navigation.goBack()}
      />

      <Button
        title='Go back to first screen'
        onPress={()=>navigation.popToTop()}
      />

      <Button
        title='Send data to Home Screen'
        onPress={()=>navigation.push('Home',{HomeId:"22"})}
      />

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})

export default Details