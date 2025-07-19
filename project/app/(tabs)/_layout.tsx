// Tab navigation layout for the Travel Guide app
// Defines the main navigation structure with Home, Explore, Book Trip, My Bookings, and Favorites tabs

import { Tabs } from 'expo-router';
import { Chrome as Home, Search, Heart, Calendar, HomeIcon } from 'lucide-react-native';
import { CalendarCheck } from 'lucide-react-native';
import CustomTabBar from '../../components/CustomTabBar'; // import custom tab bar

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}  // FIX: Move tabBar here
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => <HomeIcon size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ size, color }) => <Search size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          title: 'Book Trip',
          tabBarIcon: ({ size, color }) => <Calendar size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="my-bookings"
        options={{
          title: 'My Bookings',
          tabBarIcon: ({ size, color }) => (
            <CalendarCheck size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ size, color }) => <Heart size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
