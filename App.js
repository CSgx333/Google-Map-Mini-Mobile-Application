import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import home from './screens/Home'
import detail from './screens/Detail'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={home}
          options={{ title: 'Home' }}
          action="bell"
        />
        <Stack.Screen
          name="detail"
          component={detail}
          options={{ title: 'Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})