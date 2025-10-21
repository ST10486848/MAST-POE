import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View ,ScrollView , TouchableOpacity,Button,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"; 
import React, { useState } from 'react';

const Stack = createNativeStackNavigator();
import AddMenu from './screens/AddMenu';
import HomePage from './screens/HomePage';
import SelectedItem from './screens/SelectedItems';

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
