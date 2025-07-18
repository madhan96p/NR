// Favorites screen - Shows user's saved favorite places
// Displays places saved to AsyncStorage with management options

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Linking,
} from 'react-native';
import { router } from 'expo-router';
import { places } from '../../data/places';
import { useFavorites } from '../../contexts/FavoritesContext';
import PlaceCard from '../../components/PlaceCard';


export default function FavoritesScreen() {
  const { favorites, loading } = useFavorites();

  // Get favorite places data by filtering all places
  const favoritePlaces = places.filter(place => favorites.includes(place.id));

  // Navigate to place details
  const handlePlacePress = (place: typeof places[0]) => {
    router.push({
      pathname: '/place-details',
      params: { placeId: place.id }
    });
  };

  // Render favorite place item
  const renderFavoritePlace = ({ item }: { item: typeof places[0] }) => (
    <PlaceCard
      place={item}
      onPress={() => handlePlacePress(item)}
    />
  );

  // Empty state when no favorites
  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateIcon}>💔</Text>
      <Text style={styles.emptyStateTitle}>No favorites yet</Text>
      <Text style={styles.emptyStateText}>
        Start exploring and save places you'd love to visit!
      </Text>
    </View>
  );

  // Loading state
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading favorites...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Favorites</Text>
          <Text style={styles.subtitle}>
            {favoritePlaces.length} {favoritePlaces.length === 1 ? 'place' : 'places'} saved
          </Text>
        </View>

        {/* Favorites List */}
        <FlatList
          data={favoritePlaces}
          renderItem={renderFavoritePlace}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.listContainer,
            favoritePlaces.length === 0 && styles.emptyListContainer
          ]}
          ListEmptyComponent={renderEmptyState}
        />
      </SafeAreaView>

      {/* Footer Branding */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Powered by
          <Text
            style={styles.footerHighlight}
            onPress={() => Linking.openURL('https://shrishtravels.netlify.app')}
          >
            {' '}Shrish Travels
          </Text>
        </Text>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  listContainer: {
    paddingBottom: 24,
  },
  emptyListContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: 14,
    color: '#7F8C8D',
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#7F8C8D',
  },
  footerHighlight: {
    fontWeight: '700',
    color: '#2E86C1',
  },
});