// Place Details screen - Shows comprehensive information about a specific place
// Includes image, description, highlights, rating, and Google Maps integration

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Heart, MapPin, Star, ExternalLink, Calendar } from 'lucide-react-native';
import { places } from '../data/places';
import { useFavorites } from '../contexts/FavoritesContext';

export default function PlaceDetailsScreen() {
  const params = useLocalSearchParams();
  const { isFavorited, toggleFavorite } = useFavorites();
  
  // Find the place by ID
  const place = places.find(p => p.id === params.placeId);
  
  if (!place) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Place not found</Text>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const favorited = isFavorited(place.id);

  // Open Google Maps with place coordinates
  const openGoogleMaps = () => {
    const { latitude, longitude } = place.coordinates;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Cannot open Google Maps');
        }
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to open Google Maps');
      });
  };

  // Handle favorite toggle
  const handleFavoritePress = () => {
    toggleFavorite(place.id);
  };

  // Render highlight item
  const renderHighlight = (highlight: string, index: number) => (
    <View key={index} style={styles.highlightItem}>
      <Text style={styles.highlightBullet}>•</Text>
      <Text style={styles.highlightText}>{highlight}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image Section */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: place.image }} style={styles.heroImage} />
          
          {/* Back Button */}
          <Pressable style={styles.backBtn} onPress={() => router.back()}>
            <ArrowLeft size={24} color="#FFF" />
          </Pressable>
          
          {/* Favorite Button */}
          <Pressable style={styles.favoriteBtn} onPress={handleFavoritePress}>
            <Heart
              size={24}
              color={favorited ? '#E74C3C' : '#FFF'}
              fill={favorited ? '#E74C3C' : 'transparent'}
            />
          </Pressable>
        </View>

        {/* Place Information */}
        <View style={styles.content}>
          {/* Place Header */}
          <View style={styles.header}>
            <Text style={styles.placeName}>{place.name}</Text>
            <Text style={styles.category}>{place.category}</Text>
          </View>

          {/* Rating and Price Row */}
          <View style={styles.detailsRow}>
            <View style={styles.ratingContainer}>
              <Star size={16} color="#F39C12" fill="#F39C12" />
              <Text style={styles.ratingText}>{place.rating}</Text>
            </View>
            <Text style={styles.price}>{place.price}</Text>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>{place.description}</Text>
          </View>

          {/* Highlights */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Highlights</Text>
            <View style={styles.highlightsList}>
              {place.highlights.map((highlight, index) => 
                renderHighlight(highlight, index)
              )}
            </View>
          </View>

          {/* Map Button */}
          <Pressable style={styles.mapButton} onPress={openGoogleMaps}>
            <MapPin size={20} color="#FFF" />
            <Text style={styles.mapButtonText}>View on Google Maps</Text>
            <ExternalLink size={16} color="#FFF" />
          </Pressable>

          {/* Book This Trip Button */}
          <Pressable 
            style={styles.bookButton} 
            onPress={() => router.push('/booking')}
          >
            <Calendar size={20} color="#FFF" />
            <Text style={styles.bookButtonText}>Book This Trip</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 24,
  },
  header: {
    marginBottom: 16,
  },
  placeName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 4,
  },
  category: {
    fontSize: 16,
    color: '#7F8C8D',
    fontWeight: '500',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F39C12',
    marginLeft: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#27AE60',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#34495E',
    lineHeight: 24,
  },
  highlightsList: {
    marginTop: 8,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  highlightBullet: {
    fontSize: 16,
    color: '#2E86C1',
    fontWeight: '700',
    marginRight: 12,
    marginTop: 2,
  },
  highlightText: {
    fontSize: 16,
    color: '#34495E',
    flex: 1,
    lineHeight: 22,
  },
  mapButton: {
    backgroundColor: '#2E86C1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 8,
  },
  mapButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    marginHorizontal: 8,
  },
  bookButton: {
    backgroundColor: '#27AE60',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 12,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    marginHorizontal: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 18,
    color: '#E74C3C',
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: '#2E86C1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});