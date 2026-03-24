import { View, Text,StyleSheet, Button } from 'react-native'
import React from 'react'

//Navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'

type HomeProps=NativeStackScreenProps<RootStackParamList,'Home'>

//Here we are giving access to 'Home' component of the 'Home' screen from the Navigation blueprint

const Home = ({navigation,route}:HomeProps) => {
  const homeId=route.params?.HomeId//return object
  return (
    <View>
      <Text>HomeId: {homeId}</Text>
      <Text>Home Screen</Text>
      <Button
        title='Go to details'
        // onPress={()=>navigation.navigate('Details',{productId:"14"})}

        onPress={()=>navigation.push('Details',{productId:"86"})}
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

export default Home