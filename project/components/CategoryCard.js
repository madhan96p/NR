// Reusable CategoryCard component for displaying travel categories
// Used on the home screen to show different types of destinations

import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const CategoryCard = ({ category, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: category.color },
        pressed && styles.cardPressed
      ]}
      onPress={() => onPress(category)}
    >
      {/* Background Image */}
      <Image source={{ uri: category.image }} style={styles.backgroundImage} />
      
      {/* Overlay for better text readability */}
      <View style={styles.overlay} />
      
      {/* Category Content */}
      <View style={styles.content}>
        <Text style={styles.icon}>{category.icon}</Text>
        <Text style={styles.name}>{category.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 120,
    borderRadius: 12,
    marginHorizontal: 8,
    marginVertical: 6,
    overflow: 'hidden',
    minWidth: 160,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    fontSize: 32,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default CategoryCard;