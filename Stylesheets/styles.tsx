import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },

  mealCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  mealName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  mealDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  mealCategory: {
    marginTop: 5,
    fontStyle: "italic",
  },
  mealPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E8B57",
    marginBottom: 8,
  },

  button: {
    backgroundColor: "#2E8B57",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  noItemsText: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
    marginTop: 20,
  },

  header:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    textAlign:'left'
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    elevation: 2,
  },
 filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#555",
  },
  selectedButton: {
    backgroundColor: "#007BFF",
  },
  filterText: {
    color: "#333",
    fontWeight: "bold",
  },
  selectedText: {
    color: "#fff",
  },
  noMealsText: {
    textAlign: "center",
    color: "#777",
    marginTop: 20,
  },
})

export default styles;