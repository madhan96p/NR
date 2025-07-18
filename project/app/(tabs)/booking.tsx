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
  Platform,
} from 'react-native';
import { Calendar, MapPin, Users, Phone, Mail, MessageSquare } from 'lucide-react-native';

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
  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert(
        'Booking Confirmed! 🎉',
        `Thank you ${formData.fullName}! Your trip from ${formData.pickupLocation} to ${formData.destination} has been submitted.\n\nOur team will contact you within 24 hours to confirm details.\n\nThis booking service is powered by Shrish Travels — Trusted by thousands since 2020.`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Reset form
              setFormData({
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
            }
          }
        ]
      );
    }
  };

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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Book Your Trip</Text>
            <Text style={styles.subtitle}>Fill in the details below to book your journey</Text>
          </View>

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
              <View style={[styles.inputContainer, errors.pickupLocation && styles.inputError]}>
                <MapPin size={20} color="#7F8C8D" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter pickup location"
                  value={formData.pickupLocation}
                  onChangeText={(text) => updateField('pickupLocation', text)}
                  autoCapitalize="words"
                />
              </View>
              {errors.pickupLocation && <Text style={styles.errorText}>{errors.pickupLocation}</Text>}
            </View>

            {/* Destination */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Destination *</Text>
              <View style={[styles.inputContainer, errors.destination && styles.inputError]}>
                <MapPin size={20} color="#7F8C8D" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter destination"
                  value={formData.destination}
                  onChangeText={(text) => updateField('destination', text)}
                  autoCapitalize="words"
                />
              </View>
              {errors.destination && <Text style={styles.errorText}>{errors.destination}</Text>}
            </View>

            {/* Travel Date */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Travel Date *</Text>
              <View style={[styles.inputContainer, errors.travelDate && styles.inputError]}>
                <Calendar size={20} color="#7F8C8D" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="DD/MM/YYYY"
                  value={formData.travelDate}
                  onChangeText={(text) => updateField('travelDate', text)}
                />
              </View>
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
            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit Booking Request</Text>
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
});