# Fixed Expo to APK Deployment Guide

## Method 1: Using EAS CLI (Correct Package Name)

### Step 1: Install EAS CLI (Correct Command)
```bash
# The correct package name is:
npm install -g eas-cli

# OR if that doesn't work, try:
npm install -g @expo/eas-cli@latest

# OR install locally in your project:
npm install eas-cli
npx eas-cli --version
```

### Step 2: Login to Expo
```bash
npx eas login
# OR if installed globally:
eas login
```

### Step 3: Configure EAS Build
```bash
npx eas build:configure
```

### Step 4: Build APK
```bash
# For production APK
npx eas build --platform android --profile production

# For development APK
npx eas build --platform android --profile development
```

## Method 2: Using Expo Development Build (Alternative)

### Step 1: Install Expo CLI
```bash
npm install -g @expo/cli
```

### Step 2: Create Development Build
```bash
cd project
npx expo install expo-dev-client
npx expo run:android
```

## Method 3: Using Expo Export + Capacitor (Web-to-APK)

### Step 1: Export for Web
```bash
cd project
npx expo export --platform web
```

### Step 2: Install Capacitor
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Travel Guide" "com.travelguide.app"
```

### Step 3: Add Android Platform
```bash
npx cap add android
npx cap copy
npx cap sync
```

### Step 4: Open in Android Studio
```bash
npx cap open android
```

## Method 4: Direct APK Build (Using Your Existing Setup)

Since your project already has Android configuration:

### Step 1: Install Dependencies
```bash
cd project
npm install
```

### Step 2: Build APK Directly
```bash
# Development APK
npx expo run:android --variant debug

# Release APK (requires signing setup)
npx expo run:android --variant release
```

## Method 5: Using Turtle CLI (Legacy but Works)

### Step 1: Install Turtle CLI
```bash
npm install -g turtle-cli
```

### Step 2: Build APK
```bash
turtle build:android --keystore-path ./android/app/debug.keystore --keystore-alias androiddebugkey --type apk
```

## Troubleshooting Common Issues

### Issue 1: EAS CLI Installation Problems
```bash
# Clear npm cache
npm cache clean --force

# Try different registry
npm config set registry https://registry.npmjs.org/

# Install with specific version
npm install -g eas-cli@latest
```

### Issue 2: Network/Registry Issues
```bash
# Use yarn instead of npm
npm install -g yarn
yarn global add eas-cli
```

### Issue 3: Permission Issues (Windows)
```bash
# Run PowerShell as Administrator
# OR use npx instead of global installation
npx eas-cli --version
```

## Quick Alternative: Online APK Builders

### Option 1: Expo Snack + Download
1. Upload your code to Expo Snack
2. Use the download feature
3. Get APK directly

### Option 2: GitHub Actions (Automated)
1. Push code to GitHub
2. Use Expo GitHub Action
3. Download from releases

## Recommended Approach for Your Case

Given the installation issues, I recommend **Method 4** (Direct APK Build):

```bash
cd project
npm install
npx expo prebuild --platform android
npx expo run:android --variant release
```

This will create an APK in:
`project/android/app/build/outputs/apk/release/app-release.apk`

## Web Deployment After APK Creation

1. Upload APK to your web server
2. Create download page (HTML provided)
3. Share download link with users

## Security Note

For production APKs, you'll need to:
1. Generate a proper signing key
2. Configure release signing
3. Enable Proguard/R8 obfuscation