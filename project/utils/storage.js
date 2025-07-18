// AsyncStorage utilities for managing favorites
// Handles saving, loading, and managing favorite places

import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@travel_guide_favorites';

/**
 * Save favorites to AsyncStorage
 * @param {Array} favorites - Array of place IDs
 */
export const saveFavorites = async (favorites) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};

/**
 * Load favorites from AsyncStorage
 * @returns {Promise<Array>} - Array of place IDs
 */
export const loadFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

/**
 * Add place to favorites
 * @param {string} placeId - ID of the place to add
 * @returns {Promise<Array>} - Updated favorites array
 */
export const addToFavorites = async (placeId) => {
  try {
    const favorites = await loadFavorites();
    if (!favorites.includes(placeId)) {
      const updatedFavorites = [...favorites, placeId];
      await saveFavorites(updatedFavorites);
      return updatedFavorites;
    }
    return favorites;
  } catch (error) {
    console.error('Error adding to favorites:', error);
    return [];
  }
};

/**
 * Remove place from favorites
 * @param {string} placeId - ID of the place to remove
 * @returns {Promise<Array>} - Updated favorites array
 */
export const removeFromFavorites = async (placeId) => {
  try {
    const favorites = await loadFavorites();
    const updatedFavorites = favorites.filter(id => id !== placeId);
    await saveFavorites(updatedFavorites);
    return updatedFavorites;
  } catch (error) {
    console.error('Error removing from favorites:', error);
    return [];
  }
};

/**
 * Check if place is favorited
 * @param {string} placeId - ID of the place to check
 * @param {Array} favorites - Current favorites array
 * @returns {boolean} - True if place is favorited
 */
export const isFavorited = (placeId, favorites) => {
  return favorites.includes(placeId);
};