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
  Pressable,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { categories, places, searchPlaces } from '../../data/places';
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
 
    if (query.trim() === '') {
      // If search is empty, revert to the initial state (all or category-filtered)
      const baseList = params.category
        ? places.filter(place => place.category === params.category)
        : places;
      setFilteredPlaces(baseList);
    } else {
      // If there is a search, search ALL places, ignoring the category param
      const searchResults = searchPlaces(query);
      setFilteredPlaces(searchResults);
    }
  };

  // Handle category press on this screen
  const handleCategoryPressOnExplore = (categoryName: string) => {
    // Set the category param to filter the view, making it consistent
    // with navigating from the home screen.
    router.setParams({ category: categoryName });
  };

  // Handle clearing the category filter
  const handleClearCategory = () => {
    // Navigate to the base explore route to clear all params
    router.push('/explore');
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

  // Render category item for the vertical list
  const renderCategory = ({ item }: { item: typeof categories[number] }) => (
    <Pressable style={styles.categoryItem} onPress={() => handleCategoryPressOnExplore(item.name)}>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <View>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </Pressable>
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

  // Determine if we should show the category list
  const showCategories = !searchQuery && !params.category;

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTopRow}>
            <Text style={styles.title}>
              {searchQuery
                ? `Results for "${searchQuery}"`
                : params.category ? `${params.category} Destinations` : 'Explore Places'}
            </Text>
            {params.category && !searchQuery && (
              <Pressable onPress={handleClearCategory}>
                <Text style={styles.clearButtonText}>Show All</Text>
              </Pressable>
            )}
          </View>
          <Text style={styles.subtitle}>
            {filteredPlaces.length} {filteredPlaces.length === 1 ? 'place' : 'places'} found
          </Text>
        </View>

        {/* Search Bar */}
        <SearchBar
          placeholder="Search destinations or categories..."
          onSearch={handleSearch}
          value={searchQuery}
        />

        {/* Conditional Rendering: Show Categories or Places */}
        {showCategories ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Browse Categories</Text>
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <FlatList
            data={filteredPlaces}
            renderItem={renderPlace}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={renderEmptyState}
          />
        )}
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
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
  },
  subtitle: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  section: {
    paddingHorizontal: 24,
    paddingTop: 16,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 12,
    // Shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C3E50',
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
  clearButtonText: {
    fontSize: 14,
    color: '#2E86C1',
    fontWeight: '600',
  },
});