import { NativeModules, Platform } from 'react-native';

const { Screenshield } = NativeModules;

let initialized: boolean = false;

export const isInitialized = (): boolean => initialized;

export const init = (key?: string | null): void => {
  if (Platform.OS === 'ios') {
    if (!key) {
      return;
    }

    Screenshield.init(key);
  }

  initialized = true;
};
