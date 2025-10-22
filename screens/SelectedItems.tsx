import{View,Text,TextInput,ScrollView,TouchableOpacity,Image,Button,StyleSheet,FlatList}from'react-native';
import React from 'react';
import styles from '../Stylesheets/styles';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Meal } from './HomePage';

type Props = NativeStackScreenProps<RootStackParamList, "Selected"> & {
  selectedMeals: Meal[];
};
export default function SelectedItem({navigation, selectedMeals,  }: Props) {
    return(
         <View style={styles.container}>
      <Text style={styles.header}>🧾 Your Selected Dishes</Text>

      {selectedMeals.length === 0 ? (
        <Text>No dishes selected yet.</Text>
      ) : (
        <FlatList
          data={selectedMeals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text >{item.name}</Text>
              <Text>{item.description}</Text>
              <Text >R{item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
