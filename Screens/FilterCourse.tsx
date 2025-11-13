import{View,Text,ScrollView,TouchableOpacity,FlatList,}from'react-native';
import styles from '../Stylesheets/styles';
import {Alert} from 'react-native';
import React,{useState} from 'react';
interface Meal {
  id: number;
  name: string;
  description: string;
  category: "Starter" | "Main" | "Dessert";
  price: number;
}

interface Props {
  navigation: any;
  meals: Meal[];
}


export default function FilterCourse({ navigation, meals }: Props) {
const [selectedCategory, setSelectedCategory] = useState<
    "Starter" | "Main" | "Dessert" | "All"
  >("All");

  // Filter meals based on category
  const filteredMeals =
    selectedCategory === "All"
      ? meals
      : meals.filter((meal) => meal.category === selectedCategory);

  const renderMeal = ({ item }: { item: Meal }) => (
    <View style={styles.card}>
      <Text style={styles.mealName}>{item.name}</Text>
      <Text style={styles.mealDescription}>{item.description}</Text>
      <Text style={styles.mealCategory}>{item.category}</Text>
      <Text style={styles.mealPrice}>R{item.price}</Text>
    </View>
  );
    return(    
    <ScrollView style={styles.container}>
     <View style={styles.container}>
      <Text style={styles.header}>🍽️ Filter Meals by Course</Text>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {["All", "Starter", "Main", "Dessert"].map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() =>
              setSelectedCategory(category as "Starter" | "Main" | "Dessert" | "All")
            }
            style={[
              styles.filterButton,
              selectedCategory === category && styles.selectedButton,
            ]}
          >
            <Text
              style={[
              styles.filterText,
                selectedCategory === category && styles.selectedText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Meal List */}
      {filteredMeals.length > 0 ? (
        <FlatList
          data={filteredMeals}
          renderItem={renderMeal}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.noMealsText}>No meals found in this category.</Text>
      )}
    </View>
    </ScrollView>
  );
}
