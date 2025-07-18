// Reusable SearchBar component with search functionality
// Provides real-time search with debouncing for better performance

import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Search, X } from 'lucide-react-native';

const SearchBar = ({ placeholder = "Search places...", onSearch, debounceMs = 300 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debounceTimer, setDebounceTimer] = useState(null);

  // Debounced search to avoid excessive API calls or filtering
  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, debounceMs);

    setDebounceTimer(timer);

    // Cleanup timer on unmount
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [searchQuery, onSearch, debounceMs]);

  // Clear search input
  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <View style={styles.container}>
      {/* Search Icon */}
      <Search size={20} color="#7F8C8D" style={styles.searchIcon} />
      
      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#BDC3C7"
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCapitalize="none"
        autoCorrect={false}
      />
      
      {/* Clear Button */}
      {searchQuery.length > 0 && (
        <Pressable style={styles.clearButton} onPress={clearSearch}>
          <X size={20} color="#7F8C8D" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#2C3E50',
    paddingVertical: 0, // Remove default padding
  },
  clearButton: {
    marginLeft: 12,
    padding: 4,
  },
});

export default SearchBar;