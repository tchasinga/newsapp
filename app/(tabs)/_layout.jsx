import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Importing icons from @expo/vector-icons

export default function RoomerDesignerLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true, 
        tabBarActiveTintColor: '#2f95dc',
        tabBarInactiveTintColor: '#8e8e93', // Color of inactive tab icons
        tabBarStyle: {
          backgroundColor: '#fff', // Tab bar background color
          borderTopWidth: 0, // Remove the top border of the tab bar
          elevation: 10, // Add shadow for Android
          shadowColor: '#000', // Shadow color for iOS
          shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
          shadowOpacity: 0.1, // Shadow opacity for iOS
          shadowRadius: 4, // Shadow radius for iOS
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
         tabBarLabel:'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
         tabBarLabel:'Explore',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search-outline' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
         tabBarLabel:'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-outline' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
