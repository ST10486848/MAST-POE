import{View,Text,TextInput,ScrollView,TouchableOpacity,Image,Button,StyleSheet,FlatList}from'react-native';
import React from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import styles from '../Stylesheets/styles';
export type Meal = {
  id: number;
  name: string;
  description: string;
  category: "Starter" | "Main" | "Dessert";
  price: number;
};

interface Props {
  navigation: any;
  meals: Meal[];
  selectedMeals: Meal[];
  setSelectedMeals: (meals: Meal[]) => void;
}


export default function HomePage({ navigation, meals, selectedMeals, setSelectedMeals }: Props) {
  // fallback sample data when `meals` prop is empty or undefined
  const sampleMeals: Meal[] = [
  {
    id: 1,
    name: "Butternut Soup",
    description: "Smooth roasted butternut with cream and nutmeg.",
    price: 45,
    category: "Starter",
  },
  {
    id: 2,
    name: "Grilled Ostrich Steak",
    description: "Tender ostrich steak with mash and mushroom sauce.",
    price: 160,
    category: "Main",
  },
  {
    id: 3,
    name: "Malva Pudding",
    description: "Warm sponge pudding with caramel sauce and ice cream.",
    price: 65,
    category: "Dessert",
  },
  {
    id: 4,
    name: "Pad Thai",
    description: "Noodles with shrimp, egg, and peanuts in tamarind sauce.",
    price: 140,
    category: "Main",
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Coffee-flavored dessert layered with mascarpone cream.",
    price: 75,
    category: "Dessert",
  },
  {
    id: 6,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: 55,
    category: "Starter",
  }
];
  const mealsToRender = meals && meals.length ? meals : sampleMeals;

  const toggleSelect = (meal: Meal) => {
    const alreadySelected = selectedMeals.some((m) => m.id === meal.id);
    if (alreadySelected) {
      setSelectedMeals(selectedMeals.filter((m) => m.id !== meal.id));
    } else {
      setSelectedMeals([...selectedMeals, meal]);
    }
  };
    return(
      <ScrollView>
      <View style={styles.container}>
      <Text>🍴 Menu</Text>

      <FlatList
        data={mealsToRender}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const selected = selectedMeals.some((m) => m.id === item.id);
          return (
            <TouchableOpacity
              onPress={() => toggleSelect(item)}
            >
              <Text>{item.name}</Text>
              <Text>{item.category}</Text>
              <Text>{item.description}</Text>
              <Text>R{item.price}</Text>
               <Text>{selected ? "✅ Selected" : ""}</Text>
            </TouchableOpacity>
          );
        }}
      />
       <Button
        title='Add Item'
        onPress={() => navigation.navigate('AddItem')}
        /> 
        <Button
        title='Selected Items'
        onPress={() => navigation.navigate('SelectedItem')}
        />
    </View>
    </ScrollView>
  );
}