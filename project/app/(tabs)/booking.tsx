// Booking screen - Professional travel booking form
// Comprehensive form for trip bookings with validation and confirmation

import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Pressable,
    Alert,
    KeyboardAvoidingView,
    Linking,
    Modal,
    FlatList,
    Platform,
    Image,
} from 'react-native';
import { Calendar, MapPin, Users, Phone, Mail, MessageSquare } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { locations } from '../../data/locations';
import { router } from 'expo-router';

export default function BookingScreen() {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        pickupLocation: '',
        destination: '',
        travelDate: '',
        numberOfTravelers: '1',
        tripType: 'One Way',
        specialNotes: '',
    });

    type FormErrors = Partial<Record<keyof typeof formData, string>>;

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // State for new pickers
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isLocationModalVisible, setLocationModalVisible] = useState(false);
    const [editingLocationField, setEditingLocationField] = useState<'pickupLocation' | 'destination' | null>(null);
    const [locationSearch, setLocationSearch] = useState('');


    // Update form field
    const updateField = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
            newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
        }

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.pickupLocation.trim()) {
            newErrors.pickupLocation = 'Pickup location is required';
        }

        if (!formData.destination.trim()) {
            newErrors.destination = 'Destination is required';
        }

        if (!formData.travelDate.trim()) {
            newErrors.travelDate = 'Travel date is required';
        }

        const numTravelers = parseInt(formData.numberOfTravelers, 10);
        if (isNaN(numTravelers) || numTravelers < 1) {
            newErrors.numberOfTravelers = 'Please enter a valid number of travelers (at least 1)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async () => {
        if (!validateForm() || isSubmitting) {
            return; // Stop if validation fails or already submitting
        }

        setIsSubmitting(true);

        const newBooking = { ...formData, submittedAt: new Date().toISOString(), id: Date.now().toString() };

        try {
            // 1. Get existing bookings from storage
            const existingBookingsRaw = await AsyncStorage.getItem('bookings');
            const existingBookings = existingBookingsRaw ? JSON.parse(existingBookingsRaw) : [];

            // 2. Add the new booking to the list
            const updatedBookings = [...existingBookings, newBooking];

            // 3. Save the updated list back to storage
            await AsyncStorage.setItem('bookings', JSON.stringify(updatedBookings));

            // For debugging: You can log the stored data to the console
            console.log('Booking saved! Current bookings:', updatedBookings);

            Alert.alert(
                'Booking Confirmed! 🎉',
                `Thank you, ${formData.fullName}! Your request has been submitted. Our team will contact you shortly.`,
                [{
                    text: 'OK',
                    onPress: () => {
                        // Reset form
                        setFormData({
                            fullName: '', mobileNumber: '', email: '', pickupLocation: '',
                            destination: '', travelDate: '', numberOfTravelers: '1',
                            tripType: 'One Way', specialNotes: '',
                        });
                    },
                }]
            );
        } catch (error) {
            console.error('Submission Error:', error);
            Alert.alert('Storage Error', 'Could not save your booking. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- Handlers for Date and Location Pickers ---

    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setDatePickerVisible(false);

        // On Android, a "dismiss" event is fired on cancel. We ignore that.
        // On Web/iOS, we only get an event on selection.
        // This condition correctly handles all platforms.
        if (event.type !== 'dismissed' && selectedDate) {
            const formattedDate = selectedDate.toLocaleDateString('en-GB');
            updateField('travelDate', formattedDate);
        }
    };

    const showLocationModal = (field: 'pickupLocation' | 'destination') => {
        setEditingLocationField(field);
        setLocationModalVisible(true);
        setLocationSearch(''); // Reset search on open
    };

    const handleLocationSelect = (location: string) => {
        if (editingLocationField) {
            updateField(editingLocationField, location);
        }
        setLocationModalVisible(false);
    };

    const filteredLocations = locations.filter(location =>
        location.toLowerCase().includes(locationSearch.toLowerCase())
    );

    // Helper to get the date for the picker, defaulting to today
    const getPickerDate = () => {
        if (formData.travelDate) {
            const parts = formData.travelDate.split('/');
            // Note: Date constructor is month-indexed (0-11)
            if (parts.length === 3) {
                return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
            }
        }
        return new Date();
    };

    // --- End of Handlers ---

    // Trip type selector
    const TripTypeSelector = () => (
        <View style={styles.tripTypeContainer}>
            {['One Way', 'Round Trip'].map((type) => (
                <Pressable
                    key={type}
                    style={[
                        styles.tripTypeButton,
                        formData.tripType === type && styles.tripTypeButtonActive
                    ]}
                    onPress={() => updateField('tripType', type)}
                >
                    <Text style={[
                        styles.tripTypeText,
                        formData.tripType === type && styles.tripTypeTextActive
                    ]}>
                        {type}
                    </Text>
                </Pressable>
            ))}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >

                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerTopRow}>
                        <Image
                            source={require('../../assets/images/icon.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.title}>Book Your Trip</Text>
                    </View>
                    <Text style={styles.subtitle}>
                        Fill in the details below to book your journey
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>

                    {/* Form */}
                    <View style={styles.form}>
                        {/* Full Name */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Full Name *</Text>
                            <View style={[styles.inputContainer, errors.fullName && styles.inputError]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChangeText={(text) => updateField('fullName', text)}
                                    autoCapitalize="words"
                                />
                            </View>
                            {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}
                        </View>

                        {/* Mobile Number */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Mobile Number *</Text>
                            <View style={[styles.inputContainer, errors.mobileNumber && styles.inputError]}>
                                <Phone size={20} color="#7F8C8D" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your mobile number"
                                    value={formData.mobileNumber}
                                    onChangeText={(text) => updateField('mobileNumber', text)}
                                    keyboardType="phone-pad"
                                    maxLength={15}
                                />
                            </View>
                            {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}
                        </View>

                        {/* Email (Optional) */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email (Optional)</Text>
                            <View style={[styles.inputContainer, errors.email && styles.inputError]}>
                                <Mail size={20} color="#7F8C8D" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChangeText={(text) => updateField('email', text)}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                        </View>

                        {/* Pickup Location */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Pickup Location *</Text>
                            <Pressable onPress={() => showLocationModal('pickupLocation')}>
                                <View style={[styles.inputContainer, errors.pickupLocation && styles.inputError]}>
                                    <MapPin size={20} color="#7F8C8D" style={styles.inputIcon} />
                                    <Text style={[styles.input, !formData.pickupLocation && styles.placeholderText]}>
                                        {formData.pickupLocation || 'Select pickup location'}
                                    </Text>
                                </View>
                            </Pressable>
                            {errors.pickupLocation && <Text style={styles.errorText}>{errors.pickupLocation}</Text>}
                        </View>

                        {/* Destination */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Destination *</Text>
                            <Pressable onPress={() => showLocationModal('destination')}>
                                <View style={[styles.inputContainer, errors.destination && styles.inputError]}>
                                    <MapPin size={20} color="#7F8C8D" style={styles.inputIcon} />
                                    <Text style={[styles.input, !formData.destination && styles.placeholderText]}>
                                        {formData.destination || 'Select destination'}
                                    </Text>
                                </View>
                            </Pressable>
                            {errors.destination && <Text style={styles.errorText}>{errors.destination}</Text>}
                        </View>

                        {/* Travel Date */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Travel Date *</Text>
                            <Pressable onPress={() => setDatePickerVisible(true)}>
                                <View style={[styles.inputContainer, errors.travelDate && styles.inputError]}>
                                    <Calendar size={20} color="#7F8C8D" style={styles.inputIcon} />
                                    <TextInput
                                        style={[styles.input, !formData.travelDate && styles.placeholderText]}
                                        value={formData.travelDate}
                                        onChangeText={(text) => updateField('travelDate', text)}
                                        keyboardType="default"
                                        editable={false}
                                        placeholder="DD/MM/YYYY"
                                    />
                                </View>
                            </Pressable>
                            {errors.travelDate && <Text style={styles.errorText}>{errors.travelDate}</Text>}
                        </View>

                        {/* Number of Travelers */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Number of Travelers *</Text>
                            <View style={[styles.inputContainer, errors.numberOfTravelers && styles.inputError]}>
                                <Users size={20} color="#7F8C8D" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter number of travelers"
                                    value={formData.numberOfTravelers}
                                    onChangeText={(text) => updateField('numberOfTravelers', text)}
                                    keyboardType="numeric"
                                />
                            </View>
                            {errors.numberOfTravelers && <Text style={styles.errorText}>{errors.numberOfTravelers}</Text>}
                        </View>

                        {/* Trip Type */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Trip Type *</Text>
                            <TripTypeSelector />
                        </View>

                        {/* Special Notes */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Special Notes (Optional)</Text>
                            <View style={styles.inputContainer}>
                                <MessageSquare size={20} color="#7F8C8D" style={styles.inputIcon} />
                                <TextInput
                                    style={[styles.input, styles.textArea]}
                                    placeholder="Any special requirements or notes..."
                                    value={formData.specialNotes}
                                    onChangeText={(text) => updateField('specialNotes', text)}
                                    multiline
                                    numberOfLines={3}
                                    textAlignVertical="top"
                                />
                            </View>
                        </View>

                        {/* Submit Button */}
                        <Pressable style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]} onPress={handleSubmit} disabled={isSubmitting}>
                            <Text style={styles.submitButtonText}>
                                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                            </Text>
                        </Pressable>

                        {/* Powered by Shrish Travels */}
                        <View style={styles.brandingContainer}>
                            <Text style={styles.brandingText}>
                                Powered by <Text
                                    style={styles.brandingHighlight}
                                    onPress={() => Linking.openURL('https://shrishtravels.netlify.app')}
                                >
                                    {' '}Shrish Travels
                                </Text>
                            </Text>
                            <Text style={styles.brandingSubtext}>
                                Trusted by thousands since 2020
                            </Text>
                        </View>
                    </View>
                </ScrollView>

                {/* Date Picker */}
                {isDatePickerVisible && (
                    <DateTimePicker
                        value={getPickerDate()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                        minimumDate={new Date()} // Disables past dates
                    />
                )}

                {/* Location Picker Modal */}
                <Modal
                    visible={isLocationModalVisible}
                    animationType="slide"
                    onRequestClose={() => setLocationModalVisible(false)}
                >
                    <SafeAreaView style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Select a Location</Text>
                            <Pressable onPress={() => setLocationModalVisible(false)}>
                                <Text style={styles.modalCloseText}>Close</Text>
                            </Pressable>
                        </View>
                        <TextInput
                            style={styles.modalSearchInput}
                            placeholder="Search for a city or airport..."
                            value={locationSearch}
                            onChangeText={setLocationSearch}
                        />
                        <FlatList
                            data={filteredLocations} keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <Pressable style={styles.locationItem} onPress={() => handleLocationSelect(item)}>
                                    <Text style={styles.locationItemText}>{item}</Text>
                                </Pressable>
                            )}
                        />

                    </SafeAreaView>
                </Modal>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    keyboardView: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    logo: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.7)',
    },
    headerTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    header: {
        padding: 24,
        paddingBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#2C3E50',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: '#7F8C8D',
        lineHeight: 22,
    },
    form: {
        padding: 24,
        paddingTop: 8,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2C3E50',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E9ECEF',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    inputError: {
        borderColor: '#E74C3C',
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#2C3E50',
        paddingVertical: 0,
    },
    placeholderText: {
        color: '#AAB7B8',
        flex: 1,
    },
    textArea: {
        minHeight: 80,
        paddingTop: 12,
    },
    errorText: {
        fontSize: 14,
        color: '#E74C3C',
        marginTop: 4,
        marginLeft: 4,
    },
    tripTypeContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E9ECEF',
        overflow: 'hidden',
    },
    tripTypeButton: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    tripTypeButtonActive: {
        backgroundColor: '#2E86C1',
    },
    tripTypeText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#7F8C8D',
    },
    tripTypeTextActive: {
        color: '#FFF',
    },
    submitButton: {
        backgroundColor: '#2E86C1',
        paddingVertical: 18,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 24,
    },
    submitButtonDisabled: {
        backgroundColor: '#AAB7B8',
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFF',
    },
    brandingContainer: {
        alignItems: 'center',
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#E9ECEF',
    },
    brandingText: {
        fontSize: 14,
        color: '#7F8C8D',
        marginBottom: 4,
    },
    brandingHighlight: {
        fontWeight: '700',
        color: '#2E86C1',
    },
    brandingSubtext: {
        fontSize: 12,
        color: '#BDC3C7',
        fontStyle: 'italic',
    },
    // Modal Styles
    modalContainer: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#E9ECEF',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2C3E50',
    },
    modalCloseText: {
        fontSize: 16,
        color: '#2E86C1',
        fontWeight: '500',
    },
    modalSearchInput: {
        fontSize: 16,
        padding: 16,
        backgroundColor: '#FFF',
        margin: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E9ECEF',
    },
    locationItem: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#E9ECEF',
    },
    locationItemText: {
        fontSize: 16,
        color: '#2C3E50',
    },
});