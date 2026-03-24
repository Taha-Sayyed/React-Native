import { View, Text } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//screens
import Home from './screens/Home'
import Details from './screens/Details'

export type RootStackParamList={
    Home:{HomeId?:string}|undefined; 
    Details:{productId:string} //dynamic possible because of params
};

const Stack=createNativeStackNavigator<RootStackParamList>();

const App= () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={Home}
                options={{
                    title:'Trending products'
                }}
            />
            
            <Stack.Screen
                name='Details'
                component={Details}
                options={{
                    title:'Products Details'
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App