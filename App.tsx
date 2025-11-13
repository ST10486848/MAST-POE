import{View,Text,TextInput,ScrollView,TouchableOpacity,Image,Button,StyleSheet,FlatList,}from'react-native';

import React,{useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from './Stylesheets/styles';
import {Alert} from 'react-native';
import HomePage from './Screens/HomePage';
import FilterCourse from './Screens/FilterCourse';
import AddItems from './Screens/AddItems';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const AddItemsAny: any = AddItems;
export default function App() {
  const [meals, setMeals] = useState<any[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<any[]>([]);

  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="HomePage">
          {props => (
            <HomePage
              {...props}
              meals={meals}
              setMeals={setMeals}
              selectedMeals={selectedMeals}
              setSelectedMeals={setSelectedMeals}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddItems">
  {props => (
    <AddItemsAny
      {...props}
      meals={meals}
      setMeals={setMeals}
    />
  )}
</Stack.Screen>
     </Stack.Navigator>
     </NavigationContainer>
  );
}





