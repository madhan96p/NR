// Context for managing favorites state across the app
// Provides favorites data and actions to all components

import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadFavorites, addToFavorites, removeFromFavorites } from '../utils/storage';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load favorites when the app starts
  useEffect(() => {
    const loadInitialFavorites = async () => {
      try {
        const savedFavorites = await loadFavorites();
        setFavorites(savedFavorites);
      } catch (error) {
        console.error('Error loading initial favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInitialFavorites();
  }, []);

  // Add place to favorites
  const addFavorite = async (placeId) => {
    try {
      const updatedFavorites = await addToFavorites(placeId);
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  // Remove place from favorites
  const removeFavorite = async (placeId) => {
    try {
      const updatedFavorites = await removeFromFavorites(placeId);
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  // Toggle favorite status
  const toggleFavorite = (placeId) => {
    if (favorites.includes(placeId)) {
      removeFavorite(placeId);
    } else {
      addFavorite(placeId);
    }
  };

  // Check if place is favorited
  const isFavorited = (placeId) => {
    return favorites.includes(placeId);
  };

  const value = {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorited
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};