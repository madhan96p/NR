// Home screen - Main landing page showing categories and featured places
// Displays travel categories and highlighted destinations

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Linking,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { categories, getFeaturedPlaces } from '../../data/places';
import CategoryCard from '../../components/CategoryCard';
import PlaceCard from '../../components/PlaceCard';

// Helper function to shuffle an array (Fisher-Yates shuffle)
// This ensures the "Featured Places" list is different on each app load, but stable during the session.
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function HomeScreen() {
  const [featuredPlaces] = useState(() => shuffleArray(getFeaturedPlaces()));

  // Navigate to explore screen with category filter
  const handleCategoryPress = (category: Category) => {
    router.push({
      pathname: '/explore',
      params: { category: category.name }
    });
  };

  // Navigate to place details
  const handlePlacePress = (place: { id: string }) => {
    router.push({
      pathname: '/place-details',
      params: { placeId: place.id }
    });
  };

  // Define the Category type (adjust fields as needed)
  type Category = {
    id: string;
    name: string;
    // add other fields if present in your data
  };

  // Render category item for horizontal scroll
  const renderCategory = ({ item }: { item: Category }) => (
    <CategoryCard
      category={item}
      onPress={handleCategoryPress}
    />
  );

  // Define the Place type (adjust fields as needed)
  type Place = {
    id: string;
    // add other fields if present in your data
  };

  // Render featured place item
  const renderFeaturedPlace = ({ item }: { item: Place }) => (
    <PlaceCard
      place={item}
      onPress={() => handlePlacePress(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Header Section */}
      <ImageBackground
        source={{ uri: 'https://tse3.mm.bing.net/th/id/OIP.9-H1u3-h7BtMsf75V76idQAAAA?auto=compress&pid=ImgDet' }}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image
                source={require('../../assets/images/icon.png')}
                style={styles.logo}
              />
              <View>
                <Text style={styles.title}>Discover</Text>
                <Text style={styles.subtitle}>Amazing places around the world</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Featured Places Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Places</Text>
            <Pressable onPress={() => router.push('/explore')}>
              <Text style={styles.seeAllText}>See All</Text>
            </Pressable>
          </View>

          <FlatList
            data={featuredPlaces}
            renderItem={renderFeaturedPlace}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false} // Disable scroll since it's inside ScrollView
          />

        </View>
      </ScrollView>

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  // ...existing code...
    headerBackground: {
      width: '100%',
      height: 160, // Slightly taller for more impact
    },
    headerOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      justifyContent: 'flex-end',
    },
    header: {
      paddingVertical: 32,
      paddingHorizontal: 24,
      width: '100%',
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    logo: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginRight: 16,
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0.7)',
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: '#FFF',
    },
    subtitle: {
      fontSize: 16,
      color: '#EAEAEA',
      fontWeight: '500',
      lineHeight: 22,
      marginTop: 4,
    },
  // ...existing code...
  section: {
    marginBottom: 24,
    paddingTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    paddingHorizontal: 24, // Use padding instead of spaces in text
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
  },
  seeAllText: {
    fontSize: 14,
    color: '#2E86C1',
    fontWeight: '500',
  },
  categoriesList: {
    paddingHorizontal: 16,
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
  bookingsButton: {
    backgroundColor: '#2E86C1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  bookingsButtonText: {
    color: '#FFF', // White text to match the theme
    fontWeight: '600',
    fontSize: 14,
  },

});