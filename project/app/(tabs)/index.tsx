// Home screen - Main landing page showing categories and featured places
// Displays travel categories and highlighted destinations

import React from 'react';
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

export default function HomeScreen() {
  const featuredPlaces = getFeaturedPlaces();

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
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/013/126/439/original/beautiful-retro-background-animation-with-sun-sun-and-star-moving-retro-animation-high-tech-background-sci-fi-retro-land-with-glowing-sun-80-s-landscape-loop-animation-bg-video.jpg' }}
        style={styles.headerBackground}
      >
        <View style={styles.header}>
          {/* <Image
          source={{ uri: 'project/assets/images/icon.png' }}
          style={styles.logo}
        /> */}
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.subtitle}>
            Amazing places around the world
          </Text>
        </View>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}></Text>
          <Text style={styles.sectionTitle}>    Categories</Text>
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
  headerBackground: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // logo: {
  //   width: 80,
  //   height: 80,
  //   marginBottom: 12,
  //   borderRadius: 40,
  // },
  title: {
    fontSize: 34,
    fontWeight: '400',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: '#f1f1f1',
    lineHeight: 22,
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  header: {
    padding: 24,
    paddingBottom: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
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
});