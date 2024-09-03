import React from 'react'
import { Tabs } from 'expo-router'

const Randomlayout = () => {
  return (
   <Tabs>
      <Tabs.Screen name='home' options={{headerShown: false}}/>
      <Tabs.Screen name='explore' options={{headerShown: false}}/>
      <Tabs.Screen name='profile' options={{headerShown: false}}/>
   </Tabs>
  )
}

export default Randomlayout