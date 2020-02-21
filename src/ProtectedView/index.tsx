import * as React from 'react';
import {
  Image,
  Platform,
  requireNativeComponent,
  NativeModules,
  ImageProps,
} from 'react-native';

const { Screenshield } = NativeModules;
const RCTSSKProtectedImageView = requireNativeComponent(
  'RCTSSKProtectedImageView'
);

import { isInitialized } from '../config';

export interface ProtectedViewProps extends ImageProps {}

const ProtectedView: React.FunctionComponent<ProtectedViewProps> = ({
  source,
  ...others
}) => {
  const initialized = isInitialized();
  const isAndroid = Platform.OS === 'android';

  React.useEffect(() => {
    if (initialized && isAndroid) {
      Screenshield.enableSecureFlag();
    }

    return () => {
      if (initialized && isAndroid) {
        Screenshield.disableSecureFlag();
      }
    };
  }, [initialized, isAndroid]);

  if (!initialized) {
    return <Image source={source} {...others} />;
  }

  return Platform.select({
    ios: <RCTSSKProtectedImageView image={source} {...others} />,
    default: <Image source={source} {...others} />,
  });
};

export default ProtectedView;
