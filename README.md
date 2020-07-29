# react-native-screenshield

Prevent Screenshot Image, block doing screenshot dynamically in your iOS/Android app.

For iOS - using [ScreenShieldKit](https://screenshieldkit.com/)

For Android - using flag `FLAG_SECURE`

## Installation

* *STEP 0 - IMPORTANT - only for want support iOS* - put `ScreenShieldKit.framework` in ios project dir.

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

It also accepts all RN `Image` props.

Methods:

| name  |  desc |
|---|---|
|  init(key?: string): void | iOS - key is required - ScreenShieldKit License, Android - not required, not used|
| isInitialized(): boolean  | Return if module was initialized |
| onSettingFlagFailed?: (error: Error) => void | method which is failed when settings flag on android failed |


## Usage

```js
import ScreenShield, { ProtectedView } from "react-native-screenshield";

// ...
ScreenShield.init('abdc'); // config for iOS and Android
or
ScreenShield.init(); // it will just work for Android then, on iOS fallback `Image` component will be used for `ProtectedView`
// ...

<ProtectedView source={image} style={{ width: 100, height: 100 }} />
```

## License

MIT
