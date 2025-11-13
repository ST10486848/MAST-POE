import{View,Text,TextInput,ScrollView,Button}from'react-native';
import styles from '../Stylesheets/styles';
import {Alert} from 'react-native';
import React,{useState} from 'react';

interface Props {
  navigation: any;
  meals: any[];
  setMeals: (meals: any[]) => void;
}

export default function AddItems({ navigation, meals, setMeals }: Props) {
    const [name, setName] = useState("");
      const [description, setDescription] = useState("");
      const [category, setCategory] = useState<string>("Starter");
      const [price, setPrice] = useState("");
      const handleAdd = () => {
        if (!name || !description || !price || !category) {
          Alert.alert('Error', 'Please fill all fields.');
          return;
        }
    
        const newMeal = {
          id: meals.length + 1,
          name,
          description,
          category,
          price: Number(price),
        };
    
        // Add new meal to the shared state
        setMeals([...meals, newMeal]);
    
        Alert.alert('Success', `${name} has been added!`);
        navigation.goBack(); // Return to HomePage
      };
    return(    
        <ScrollView style={styles.container}>
       <View style={styles.container}>
      <Text style={styles.header}>Add a New Meal</Text>
      <TextInput
        placeholder="Name"
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
        onChangeText={setCategory}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />
      <Button title="Add Meal" onPress={handleAdd} />
    </View>
    </ScrollView>
    );
}