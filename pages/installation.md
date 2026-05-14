---
title: Installation
layout: default
nav_order: 2
---

# Installation

{: .important-title}
> Try the Demo!
>
> Before installing, you can play with the [browser version](https://fortetude.github.io/app) first!

### Progressive Web App (PWA)


| - | -           |
|  Navigate to this page on your phone (or scan the QR code) and follow the platform-specific instructions below.| [qr.png](#)  |

<details id="android-install">
<summary>PWA installation on Android 🤖</summary>
```
  
```
</details>

<details id="ios-install">
<summary>PWA installation on iOS 🍎</summary>
```
  
```
</details>


### App Stores

| Google Play Store                                   | Apple App Store                                     |
| --------------------------------------------------- | --------------------------------------------------- |
| Not available at this time but maybe in the future! | Not available at this time but maybe in the future! |



<!-- open/close sections by user-agent -->
<script>
const ua = navigator.userAgent || navigator.vendor || window.opera;

const isIOS = /iPad|iPhone|iPod/.test(ua)
  || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const isAndroid = /Android/.test(ua);

const iosDetails = document.getElementById("ios-install");
const androidDetails = document.getElementById("android-install");

if (isIOS) {
  iosDetails.open = true;
  androidDetails.open = false;
} else if (isAndroid) {
  androidDetails.open = true;
  iosDetails.open = false;
} else {
  androidDetails.open = false;
  iosDetails.open = false;
}
</script>