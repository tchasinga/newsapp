import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function RoomerDesignerLayoutlayout() {
  return (
    <Tabs>
       <Tabs.Screen name='home' options={{headerShown: false}}/>
       <Tabs.Screen name='explore' options={{headerShown: false}}/>
       <Tabs.Screen name='profile' options={{headerShown: false}}/>
    </Tabs>
   )
}