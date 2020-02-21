import { NativeModules, Platform } from 'react-native';

const { Screenshield } = NativeModules;

let initialized: boolean = false;

export const isInitialized = (): boolean => initialized;

export const init = (key?: string): void => {
  if (Platform.OS === 'ios' && key) {
    if (!key) {
      throw new Error('You must specify license key for ScreenShieldKit');
    }

    Screenshield.init(key);
  }

  initialized = true;
};
