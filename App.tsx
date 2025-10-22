import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View ,ScrollView , TouchableOpacity,Button,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"; 
import React, { useState } from 'react';
import AddMenu from './screens/AddMenu';
import HomePage from './screens/HomePage';
import SelectedItem from './screens/SelectedItems';
const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  Selected: undefined;
  Add: undefined;
};
export default function App() {
  const [meals, setMeals] = useState<any[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<any[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => (
            <HomePage
              {...props}
              meals={meals}
              selectedMeals={selectedMeals}
              setSelectedMeals={setSelectedMeals}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddItem" component={AddMenu}/>
        <Stack.Screen name="SelectedItem" component={SelectedItem}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




