// Explore screen - Searchable list of all places
// Includes search functionality and filtering by categories

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Linking,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { places, searchPlaces } from '../../data/places';
import SearchBar from '../../components/SearchBar';
import PlaceCard from '../../components/PlaceCard';

export default function ExploreScreen() {
  const params = useLocalSearchParams();
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle initial category filter from navigation params
  useEffect(() => {
    if (params.category) {
      const categoryPlaces = places.filter(place => place.category === params.category);
      setFilteredPlaces(categoryPlaces);
    } else {
      setFilteredPlaces(places);
    }
  }, [params.category]);

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    let results = searchPlaces(query);
    
    // Apply category filter if it exists
    if (params.category && query === '') {
      results = results.filter(place => place.category === params.category);
    }
    
    setFilteredPlaces(results);
  };

  // Navigate to place details
  const handlePlacePress = (place: typeof places[number]) => {
    router.push({
      pathname: '/place-details',
      params: { placeId: place.id }
    });
  };

  // Render place item
  const renderPlace = ({ item }: { item: typeof places[number] }) => (
    <PlaceCard
      place={item}
      onPress={() => handlePlacePress(item)}
    />
  );

  // Empty state component
  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateTitle}>No places found</Text>
      <Text style={styles.emptyStateText}>
        Try adjusting your search criteria or browse all destinations
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {params.category ? `${params.category} Destinations` : 'Explore Places'}
          </Text>
          <Text style={styles.subtitle}>
            {filteredPlaces.length} {filteredPlaces.length === 1 ? 'place' : 'places'} found
          </Text>
        </View>

        {/* Search Bar */}
        <SearchBar
          placeholder="Search destinations..."
          onSearch={handleSearch}
        />

        {/* Places List */}
        <FlatList
          data={filteredPlaces}
          renderItem={renderPlace}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 24,
    paddingBottom: 8,
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
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 64,
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