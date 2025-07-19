// MyBookingsScreen.tsx
import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Pressable,
    Alert,
    ActivityIndicator,
    Image,
    Modal,
    Linking,
    TouchableOpacity,
} from 'react-native';
import { Stack, router, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Trash2, Calendar, User, MapPin } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import LottieView from 'lottie-react-native'; // Optional for animations

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
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    // Load bookings from AsyncStorage
    const loadBookings = useCallback(async () => {
        setIsLoading(true);
        try {
            const bookingsRaw = await AsyncStorage.getItem('bookings');
            const storedBookings: Booking[] = bookingsRaw ? JSON.parse(bookingsRaw) : [];
            storedBookings.sort((a: Booking, b: Booking) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
            setBookings(storedBookings);
        } catch (error) {
            console.error('Failed to load bookings:', error);
            Alert.alert('Error', 'Could not load your bookings.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadBookings();
        }, [])
    );

    const handleDeleteBooking = async (bookingId: string) => {
        Alert.alert('Delete Booking', 'Are you sure you want to delete this booking?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: async () => {
                    try {
                        const updatedBookings = bookings.filter(b => b.id !== bookingId);
                        await AsyncStorage.setItem('bookings', JSON.stringify(updatedBookings));
                        setBookings(updatedBookings);
                        setSelectedBooking(null);
                    } catch (error) {
                        console.error('Failed to delete booking:', error);
                        Alert.alert('Error', 'Could not delete the booking.');
                    }
                },
            },
        ]);
    };

    const renderBookingItem = ({ item }: { item: Booking }) => (
        <Pressable
            onPress={() => setSelectedBooking(item)}
            style={({ pressed }) => [
                styles.bookingCard,
                pressed && { transform: [{ scale: 0.98 }] },
            ]}
        >
            <View style={styles.bookingDetails}>
                <Text style={styles.bookingRoute}>{item.pickupLocation} → {item.destination}</Text>
                <View style={styles.infoRow}>
                    <User size={14} color="#7F8C8D" />
                    <Text style={styles.bookingInfo}>{item.fullName}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Calendar size={14} color="#7F8C8D" />
                    <Text style={styles.bookingInfo}>{item.travelDate}</Text>
                </View>
            </View>
        </Pressable>
    );

    const renderEmptyState = () => (
        <View style={styles.emptyState}>
            {/* Optional Lottie animation
            <LottieView source={require('../assets/empty.json')} autoPlay loop style={{ width: 200, height: 200 }} />
            */}
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
            <LinearGradient colors={['#2E86C1', '#1B4F72']} style={styles.header}>
                <View style={styles.headerContent}>
                    <Image
                        source={require('../../assets/images/icon.png')}
                        style={styles.logo}
                    />
                    <View>
                        <Text style={styles.title}>My Bookings</Text>
                        <Text style={styles.subtitle}>Here are all the trips you've submitted.</Text>
                    </View>
                </View>
            </LinearGradient>


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

            {/* Booking Details Modal */}
            {selectedBooking && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={!!selectedBooking}
                    onRequestClose={() => setSelectedBooking(null)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Booking Details</Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.modalLabel}>Name: </Text>{selectedBooking.fullName}
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.modalLabel}>Route: </Text>{selectedBooking.pickupLocation} → {selectedBooking.destination}
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.modalLabel}>Date: </Text>{selectedBooking.travelDate}
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.modalLabel}>Booked On: </Text>{new Date(selectedBooking.submittedAt).toLocaleString()}
                            </Text>

                            <View style={styles.modalButtons}>
                                <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDeleteBooking(selectedBooking.id)}>
                                    <Trash2 size={18} color="#FFF" />
                                    <Text style={styles.deleteBtnText}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.closeBtn} onPress={() => setSelectedBooking(null)}>
                                    <Text style={styles.closeBtnText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Powered by
                    <Text style={styles.footerHighlight} onPress={() => Linking.openURL('https://shrishtravels.netlify.app')}>
                        {' '}Shrish Travels
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    header: { padding: 24, paddingBottom: 32 },
    title: { fontSize: 28, fontWeight: '700', color: '#FFF', marginBottom: 4 },
    subtitle: { fontSize: 16, color: '#ECF0F1' },
    listContainer: { padding: 16, flexGrow: 1 },
    bookingCard: {
        flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 16, padding: 18, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 4,
    },
    logo: { width: 50, height: 50, marginRight: 12, },
    headerContent: { flexDirection: 'row', alignItems: 'center', },
    bookingDetails: { flex: 1 },
    bookingRoute: { fontSize: 18, fontWeight: '600', color: '#2C3E50', marginBottom: 12 },
    infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
    bookingInfo: { fontSize: 14, color: '#7F8C8D', marginLeft: 8 },
    emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 },
    emptyStateTitle: { fontSize: 22, fontWeight: '600', color: '#2C3E50', marginTop: 16, marginBottom: 8 },
    emptyStateText: { fontSize: 16, color: '#7F8C8D', textAlign: 'center', lineHeight: 22, marginBottom: 24 },
    primaryButton: { backgroundColor: '#2E86C1', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 12 },
    primaryButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
    footer: { paddingVertical: 12, paddingHorizontal: 24, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#E9ECEF', alignItems: 'center' },
    footerText: { fontSize: 12, color: '#7F8C8D' },
    footerHighlight: { fontWeight: '700', color: '#2E86C1' },

    // Modal Styles
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
    modalContent: { width: '85%', backgroundColor: '#FFF', borderRadius: 16, padding: 20, elevation: 5 },
    modalTitle: { fontSize: 22, fontWeight: '700', color: '#2C3E50', marginBottom: 12 },
    modalText: { fontSize: 16, color: '#34495E', marginBottom: 8 },
    modalLabel: { fontWeight: '600' },
    modalButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
    deleteBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E74C3C', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
    deleteBtnText: { color: '#FFF', fontSize: 16, marginLeft: 8, fontWeight: '600' },
    closeBtn: { backgroundColor: '#BDC3C7', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
    closeBtnText: { color: '#2C3E50', fontSize: 16, fontWeight: '600' },
});
