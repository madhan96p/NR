#!/bin/bash

# Build APK Script for Travel Guide App
# This script automates the APK building process

echo "🚀 Starting APK build process for Travel Guide App..."

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null; then
    echo "📦 Installing EAS CLI..."
    npm install -g @expo/eas-cli
fi

# Login check
echo "🔐 Checking Expo authentication..."
if ! eas whoami &> /dev/null; then
    echo "Please login to Expo:"
    eas login
fi

# Install dependencies
echo "📚 Installing dependencies..."
npm install

# Configure EAS if not already done
if [ ! -f "eas.json" ]; then
    echo "⚙️ Configuring EAS Build..."
    eas build:configure
fi

# Build APK
echo "🔨 Building APK..."
echo "Choose build type:"
echo "1) Development APK (for testing)"
echo "2) Production APK (for release)"
read -p "Enter choice (1 or 2): " choice

case $choice in
    1)
        echo "Building development APK..."
        eas build --platform android --profile development
        ;;
    2)
        echo "Building production APK..."
        eas build --platform android --profile production
        ;;
    *)
        echo "Invalid choice. Building development APK by default..."
        eas build --platform android --profile development
        ;;
esac

echo "✅ Build process completed!"
echo "📱 Your APK will be available for download once the build finishes."
echo "🌐 You can then upload it to your web server for user downloads."