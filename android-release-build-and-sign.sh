#!bin/bash -e
cd "$(dirname "${0}")"
ionic cordova build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name
zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk verion1.apk
