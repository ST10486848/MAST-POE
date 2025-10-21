import{View,Text,TextInput,ScrollView,TouchableOpacity,Image,Button,StyleSheet}from'react-native';
import React from 'react';

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
  const meal= [
  {
    id: 1,
    name: "Butternut Soup",
    description: "Smooth roasted butternut with cream and nutmeg.",
    price: 45,
  },
  {
    id: 2,
    name: "Grilled Ostrich Steak",
    description: "Tender ostrich steak with mash and mushroom sauce.",
    price: 160,
  },
  {
    id: 3,
    name: "Malva Pudding",
    description: "Warm sponge pudding with caramel sauce and ice cream.",
    price: 65,
  },
  {
    id: 4,
    name: "Pad Thai",
    description: "Noodles with shrimp, egg, and peanuts in tamarind sauce.",
    price: 140,
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Coffee-flavored dessert layered with mascarpone cream.",
    price: 75,
  },
];
 const toggleSelect = (meal: Meal) => {
    const alreadySelected = selectedMeals.some((m) => m.id === meal.id);
    if (alreadySelected) {
      setSelectedMeals(selectedMeals.filter((m) => m.id !== meal.id));
    } else {
      setSelectedMeals([...selectedMeals, meal]);
    }
  };
    return(
        <View>
        <Text>Christoffel's app</Text>
        <Button
        title='Add Item'
        onPress={() => navigation.navigate('AddItem')}
        /> 
        <Button
        title='Selected Items'
        onPress={() => navigation.navigate('SelectedItem')}
        />
        </View>
    )
}