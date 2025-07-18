// Reusable PlaceCard component for displaying place information
// Used across multiple screens with consistent styling

import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Heart } from 'lucide-react-native';
import { useFavorites } from '../contexts/FavoritesContext';

const PlaceCard = ({ place, onPress, showFavorite = true }) => {
  const { isFavorited, toggleFavorite } = useFavorites();
  const favorited = isFavorited(place.id);

  // Handle favorite button press
  const handleFavoritePress = (e) => {
    e.stopPropagation(); // Prevent triggering onPress
    toggleFavorite(place.id);
  };

  // Generate star rating display
  const renderStars = (rating) => {
    return '⭐'.repeat(Math.floor(rating));
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
      onPress={onPress}
    >
      {/* Place Image */}
      <Image source={{ uri: place.image }} style={styles.image} />
      
      {/* Favorite Button Overlay */}
      {showFavorite && (
        <Pressable
          style={styles.favoriteButton}
          onPress={handleFavoritePress}
        >
          <Heart
            size={20}
            color={favorited ? '#E74C3C' : '#FFF'}
            fill={favorited ? '#E74C3C' : 'transparent'}
          />
        </Pressable>
      )}

      {/* Place Information */}
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>{place.name}</Text>
        <Text style={styles.category}>{place.category}</Text>
        
        {/* Rating and Price Row */}
        <View style={styles.details}>
          <Text style={styles.rating}>
            {renderStars(place.rating)} {place.rating}
          </Text>
          <Text style={styles.price}>{place.price}</Text>
        </View>
        
        {/* Description */}
        <Text style={styles.description} numberOfLines={2}>
          {place.description}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.95,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 8,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    color: '#F39C12',
    fontWeight: '500',
  },
  price: {
    fontSize: 14,
    color: '#27AE60',
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    color: '#7F8C8D',
    lineHeight: 18,
  },
});

export default PlaceCard;