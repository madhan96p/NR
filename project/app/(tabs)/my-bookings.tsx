// Screen to display all bookings saved in AsyncStorage

import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Pressable, Alert, ActivityIndicator, Linking } from 'react-native';
import { Stack, router, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Trash2, Calendar, User, MapPin } from 'lucide-react-native';

// Define the type for a single booking
type Booking = {
    id: string;
    fullName: string;
    pickupLocation: string;
    destination: string;
    travelDate: string;
    submittedAt: string;
};

export default function MyBookingsScreen() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load bookings from AsyncStorage
    const loadBookings = useCallback(async () => {
        // Set loading to true at the start of the fetch.
        setIsLoading(true);
        try {
            const bookingsRaw = await AsyncStorage.getItem('bookings');
            // Explicitly type the parsed data for type safety.
            const storedBookings: Booking[] = bookingsRaw ? JSON.parse(bookingsRaw) : [];
            // Sort by most recent first
            storedBookings.sort((a: Booking, b: Booking) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
            setBookings(storedBookings);
        } catch (error) {
            console.error('Failed to load bookings:', error);
            Alert.alert('Error', 'Could not load your bookings.');
        } finally {
            setIsLoading(false);
        }
    }, []); // The empty dependency array is now correct as we only use setter functions.

    // useFocusEffect will re-run the loadBookings function each time the screen comes into focus
    // useFocusEffect will re-run the loadBookings function each time the screen comes into focus
    useFocusEffect(
        useCallback(() => {
            const fetchBookings = async () => {
                await loadBookings();
            };
            fetchBookings();
        }, [])
    );

    const handleDeleteBooking = (bookingId: string) => {
        Alert.alert(
            'Delete Booking',
            'Are you sure you want to delete this booking?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const updatedBookings = bookings.filter(b => b.id !== bookingId);
                            await AsyncStorage.setItem('bookings', JSON.stringify(updatedBookings));
                            setBookings(updatedBookings); // Update state to reflect deletion
                        } catch (error) {
                            console.error('Failed to delete booking:', error);
                            Alert.alert('Error', 'Could not delete the booking.');
                        }
                    },
                },
            ]
        );
    };

    const renderBookingItem = ({ item }: { item: Booking }) => (
        <View style={styles.bookingCard}>
            <View style={styles.bookingDetails}>
                <Text style={styles.bookingRoute}>{item.pickupLocation} → {item.destination}</Text>
                <View style={styles.infoRow}><User size={14} color="#7F8C8D" /><Text style={styles.bookingInfo}>{item.fullName}</Text></View>
                <View style={styles.infoRow}><Calendar size={14} color="#7F8C8D" /><Text style={styles.bookingInfo}>{item.travelDate}</Text></View>
            </View>
            <Pressable onPress={() => handleDeleteBooking(item.id)} style={styles.deleteButton}>
                <Trash2 size={20} color="#E74C3C" />
            </Pressable>
        </View>
    );

    const renderEmptyState = () => (
        <View style={styles.emptyState}>
            <MapPin size={48} color="#BDC3C7" />
            <Text style={styles.emptyStateTitle}>No Bookings Found</Text>
            <Text style={styles.emptyStateText}>You haven't made any bookings yet. Go to the "Book Trip" tab to get started!</Text>
            <Pressable style={styles.primaryButton} onPress={() => router.push('/booking')}>
                <Text style={styles.primaryButtonText}>Book a Trip</Text>
            </Pressable>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'My Bookings', headerBackTitle: 'Home' }} />
            <View style={styles.header}>
                <Text style={styles.title}>My Bookings</Text>
                <Text style={styles.subtitle}>Here are all the trips you've submitted.</Text>
            </View>
            {isLoading ? (
                <ActivityIndicator size="large" color="#2E86C1" style={{ marginTop: 32 }} />
            ) : (
                <FlatList
                    data={bookings}
                    renderItem={renderBookingItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                    ListEmptyComponent={renderEmptyState}
                />
            )}
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
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    header: { padding: 24, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#E9ECEF' },
    title: { fontSize: 28, fontWeight: '700', color: '#2C3E50', marginBottom: 4 },
    subtitle: { fontSize: 16, color: '#7F8C8D' },
    footer: { paddingVertical: 12, paddingHorizontal: 24, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#E9ECEF', alignItems: 'center', },
    footerText: { fontSize: 12, color: '#7F8C8D', },
    footerHighlight: { fontWeight: '700', color: '#2E86C1', },
    listContainer: { padding: 16, flexGrow: 1 },
    bookingCard: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 12, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
    bookingDetails: { flex: 1 },
    bookingRoute: { fontSize: 18, fontWeight: '600', color: '#2C3E50', marginBottom: 12 },
    infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
    bookingInfo: { fontSize: 14, color: '#7F8C8D', marginLeft: 8 },
    deleteButton: { padding: 8, justifyContent: 'center', alignItems: 'center' },
    emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 },
    emptyStateTitle: { fontSize: 22, fontWeight: '600', color: '#2C3E50', marginTop: 16, marginBottom: 8 },
    emptyStateText: { fontSize: 16, color: '#7F8C8D', textAlign: 'center', lineHeight: 22, marginBottom: 24 },
    primaryButton: { backgroundColor: '#2E86C1', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 12 },
    primaryButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});