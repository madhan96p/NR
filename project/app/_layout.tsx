import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { FavoritesProvider } from '../contexts/FavoritesContext';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <FavoritesProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="place-details" options={{ 
          headerShown: true,
          title: 'Place Details',
          headerStyle: { backgroundColor: '#2E86C1' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: '600' }
        }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </FavoritesProvider>
  );
}