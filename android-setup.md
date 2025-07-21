# Android Development Setup for APK Building

## Prerequisites for Local APK Building

### 1. Install Java Development Kit (JDK)
```bash
# Download and install JDK 11 or 17
# Set JAVA_HOME environment variable
```

### 2. Install Android Studio
1. Download from: https://developer.android.com/studio
2. Install Android SDK
3. Set ANDROID_HOME environment variable

### 3. Environment Variables (Windows)
```cmd
# Add to System Environment Variables:
JAVA_HOME=C:\Program Files\Java\jdk-11.0.x
ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
ANDROID_SDK_ROOT=%ANDROID_HOME%

# Add to PATH:
%JAVA_HOME%\bin
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

### 4. Verify Installation
```bash
java -version
adb version
```

## Quick Setup Commands

### For Windows (PowerShell as Administrator):
```powershell
# Install Chocolatey (if not installed)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install JDK and Android Studio
choco install openjdk11
choco install androidstudio
```

## Alternative: Use Online Build Services

If local setup is complex, consider:

### 1. Expo EAS (Cloud Build)
- No local Android setup required
- Professional build pipeline
- Automatic signing and optimization

### 2. GitHub Actions
- Free for public repositories
- Automated builds on code push
- Download APK from releases

### 3. Bitrise
- Mobile-focused CI/CD
- Free tier available
- Easy Expo integration

## Simplified Build Process

Once Android is set up:

```bash
cd project
npm install
npm run prebuild
npm run build:apk
```

APK will be created in:
`android/app/build/outputs/apk/release/app-release.apk`