import{View,Text,TextInput,ScrollView,TouchableOpacity,Image,Button,StyleSheet,FlatList,}from'react-native';
import styles from '../Stylesheets/styles';
import {Alert} from 'react-native';
import React,{useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
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
  setMeals: (meals: Meal[]) => void;
  setSelectedMeals: (meals: Meal[]) => void;
}
export default function HomePage({ navigation, meals,setMeals, selectedMeals, setSelectedMeals }: Props) {

const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<"Starter" | "Main" | "Dessert">("Starter");
  const [price, setPrice] = useState("");


  const handleAdd = () => {
    if (!name || !description || !price) { 
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newMeal: Meal = {
      id: meals.length + 1,  
      name,
      description,
      category,
      price: Number(price),
    };

    setMeals([...meals, newMeal]);
    Alert.alert("Success", `${name} has been added!`);
    navigation.goBack();
  };
  return (
   <ScrollView>
        <View style={styles.container}>
      <Text style={styles.header}>➕ Add a New Dish</Text>
      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Category (Starter, Main, Dessert)"
        value={category}
        onChangeText={(text) =>
          setCategory(text as "Starter" | "Main" | "Dessert")
        }
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />
      <Button title="Add Dish" onPress={handleAdd} />
      <Button
        title="Go to Filter Course"
        onPress={() => navigation.navigate("FilterCourse")}
      />
      <Button
        title="Go to Add Items"
        onPress={() => navigation.navigate("AddItems")}
      />
    </View>
    </ScrollView>
  );
}