# Expo to APK Deployment Guide

## Method 1: Using Expo Application Services (EAS Build) - Recommended

### Step 1: Install EAS CLI
```bash
npm install -g @expo/eas-cli
```

### Step 2: Login to Expo
```bash
eas login
```

### Step 3: Configure EAS Build
```bash
eas build:configure
```

### Step 4: Build APK for Production
```bash
# For Android APK
eas build --platform android --profile production

# For development/testing APK
eas build --platform android --profile development
```

### Step 5: Download and Deploy
- Once build completes, you'll get a download link
- Upload the APK to your web server
- Users can download directly from browser

## Method 2: Using Expo Export + Capacitor

### Step 1: Export Expo Project
```bash
npx expo export --platform android
```

### Step 2: Install Capacitor
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init
```

### Step 3: Add Android Platform
```bash
npx cap add android
```

### Step 4: Build APK
```bash
npx cap open android
# Then build APK in Android Studio
```

## Method 3: Direct APK Build (Current Setup)

Since your project already has Android configuration, you can build directly:

### Step 1: Install Dependencies
```bash
cd project
npm install
```

### Step 2: Build APK
```bash
# Development APK
npx expo run:android --variant debug

# Production APK
npx expo run:android --variant release
```

## Web Deployment Options

### Option 1: Simple File Hosting
1. Upload APK to any web server
2. Create download page with direct link
3. Users click to download

### Option 2: GitHub Releases
1. Create GitHub release
2. Attach APK as asset
3. Share release URL

### Option 3: Firebase Hosting
1. Upload to Firebase Storage
2. Create download page
3. Host on Firebase Hosting

## Troubleshooting Common Issues

### Issue 1: Build Failures
- Ensure all dependencies are compatible
- Check Android SDK requirements
- Verify signing configuration

### Issue 2: APK Size Too Large
- Enable Proguard in release builds
- Remove unused dependencies
- Optimize images and assets

### Issue 3: Installation Issues
- Enable "Unknown Sources" on Android
- Check minimum SDK version compatibility
- Verify APK signing

## Security Considerations

### For Production APKs:
1. Generate proper signing key
2. Enable Proguard/R8 obfuscation
3. Remove debug information
4. Use HTTPS for download links

## Next Steps

Choose the method that best fits your needs:
- **EAS Build**: Easiest, cloud-based, recommended for production
- **Capacitor**: Good for web-to-mobile conversion
- **Direct Build**: Full control, requires local Android setup