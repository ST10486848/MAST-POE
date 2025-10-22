import{View,Text,TextInput,ScrollView,TouchableOpacity,Image,Button,StyleSheet}from'react-native';
import React,{useState} from 'react';
import styles from '../Stylesheets/styles';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Meal } from './HomePage';
type Props = NativeStackScreenProps<RootStackParamList, "Add"> & {
  meals: Meal[];
  setMeals: React.Dispatch<React.SetStateAction<Meal[]>>;
};
export default function AddMenu({navigation ,meals, setMeals }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<"Starter" | "Main" | "Dessert">("Starter");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !description || !price) {
      alert.alert("Error", "Please fill in all fields.");
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
    alert.alert("Success", `${name} has been added!`);
    navigation.goBack();
  };
  return (
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
    </View>
  );
}