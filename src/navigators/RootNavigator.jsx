import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddContactScreen from '../screens/AddContactScreen';
import UpdateContactScreen from '../screens/UpdateContactScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Kişilerim',
        }}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContactScreen}
        options={{
          title: 'Kişi Ekle',
        }}
      />
      <Stack.Screen
        name="UpdateContact"
        component={UpdateContactScreen}
        options={{
          title: 'Kişi Güncelle',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
