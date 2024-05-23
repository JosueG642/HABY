import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const categories = [
  { name: 'Ejercicio', icon: 'run', color: '#FF6347' },
  { name: 'Lectura', icon: 'book-open-variant', color: '#4682B4' },
  { name: 'Meditación', icon: 'meditation', color: '#32CD32' },
  { name: 'Nutrición', icon: 'food-apple', color: '#FFD700' },
  { name: 'Trabajo', icon: 'briefcase', color: '#FF69B4' },
  { name: 'Hobby', icon: 'palette', color: '#8A2BE2' },
  { name: 'Dejar un Mal Hábito', icon: 'cancel', color: '#DC143C' },
  { name: 'Estudio', icon: 'school', color: '#1E90FF' },
  { name: 'Deportes', icon: 'soccer', color: '#FF4500' },
  { name: 'Social', icon: 'account-group', color: '#8B008B' },
  { name: 'Finanzas', icon: 'cash', color: '#228B22' },
  { name: 'Salud', icon: 'heart', color: '#FF1493' },
  { name: 'Hogar', icon: 'home', color: '#8B4513' },
  { name: 'Aire Libre', icon: 'pine-tree', color: '#2E8B57' },
  { name: 'Otros', icon: 'dots-horizontal', color: '#696969' },
];
const HabitCategories = ({ onPressCategory }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.category}
            onPress={() => onPressCategory(category.name)}
          >
            <MaterialCommunityIcons name={category.icon} size={30} color={category.color} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexGrow: 1,
    paddingVertical: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    elevation: 2,
    width: '45%',
  },
  categoryText: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HabitCategories;
