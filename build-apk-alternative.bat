@echo off
echo 🚀 Alternative APK Build Script for Windows
echo.

echo 📦 Installing dependencies...
npm install

echo.
echo 🔧 Checking Expo CLI...
where expo >nul 2>nul
if %errorlevel% neq 0 (
    echo Installing Expo CLI...
    npm install -g @expo/cli
)

echo.
echo 🏗️ Preparing Android build...
npx expo prebuild --platform android --clear

echo.
echo 🔨 Building APK...
echo Choose build type:
echo 1) Debug APK (for testing)
echo 2) Release APK (for production)
set /p choice="Enter choice (1 or 2): "

if "%choice%"=="1" (
    echo Building debug APK...
    npx expo run:android --variant debug --no-install
) else if "%choice%"=="2" (
    echo Building release APK...
    npx expo run:android --variant release --no-install
) else (
    echo Invalid choice. Building debug APK...
    npx expo run:android --variant debug --no-install
)

echo.
echo ✅ Build completed!
echo 📱 APK location: android\app\build\outputs\apk\
echo.
pause