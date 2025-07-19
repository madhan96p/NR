import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { MotiView } from 'moti';

export default function CustomTabBar({ state, descriptors, navigation }) {
    const router = useRouter();

    return (
        <LinearGradient
            colors={['#ffffff', '#f3f4f6']}
            style={styles.tabBarContainer}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.title !== undefined ? options.title : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <Pressable
                        key={route.key}
                        onPress={onPress}
                        style={styles.tabItem}
                    >
                        <MotiView
                            from={{ scale: 1 }}
                            animate={{ scale: isFocused ? 1.2 : 1 }}
                            transition={{ type: 'timing', duration: 200 }}
                        >
                            {options.tabBarIcon &&
                                options.tabBarIcon({ size: 24, color: isFocused ? '#2E86C1' : '#7F8C8D' })}
                        </MotiView>
                        <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>
                            {label}
                        </Text>
                    </Pressable>
                );
            })}

            {/* Floating Book Button */}
            {/* <View style={styles.floatingButtonWrapper}>
                <Pressable
                    style={styles.floatingButton}
                    onPress={() => router.push('/booking')}
                >
                    <Text style={styles.floatingButtonText}>+</Text>
                </Pressable>
            </View> */}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 70,
        borderTopWidth: 1,
        borderTopColor: '#E9ECEF',
        elevation: 8,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tabLabel: {
        fontSize: 12,
        color: '#7F8C8D',
        marginTop: 4,
    },
    tabLabelActive: {
        color: '#2E86C1',
        fontWeight: '600',
    },
    floatingButtonWrapper: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
    },
    floatingButton: {
        backgroundColor: '#2E86C1',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
    },
    floatingButtonText: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '700',
    },
});
