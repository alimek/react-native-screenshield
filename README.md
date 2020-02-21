# react-native-screenshield

Prevent Screenshot Image, block doing screenshot dynamically in your iOS/Android app.

For iOS - using [ScreenShieldKit](https://screenshieldkit.com/)

For Android - using flag `FLAG_SECURE`

## Installation

* *STEP 0 - IMPORTANT - only for want support iOS* - put `ScreenShieldKit.framework` in main project dir.

```sh
npm install react-native-screenshield
```

or

```sh
yarn add react-native-screenshield
```

## Linking

ReactNative auto-linking will do the magic for you.

## API

`ProtectedView` props:

| name  |  required | desc |
|---|---|---|
| source | yes| check RN `Image` prop |
| style | yes| check RN `Image` prop |

It also accept all RN `Image` props.

Methods:

| name  |  desc |
|---|---|
|  init(key?: string): void | iOS - key is required - ScreenShieldKit License, Android - not required, not used|
| isInitialized(): boolean  | Return if module was initialized |


## Usage

```js
import ScreenShield from "react-native-screenshield";

// ...
ScreenShield.init('abdc');
// ...

<ProtectedView source={image} style={{ width: 100, height: 100 }} />
```

## License

MIT
