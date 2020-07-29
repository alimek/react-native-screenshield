import * as React from 'react';
import {
  Image,
  Platform,
  requireNativeComponent,
  NativeModules,
  ImageProps,
} from 'react-native';

const { Screenshield } = NativeModules;
const RCTSSKProtectedImageView: any = requireNativeComponent(
  'RCTSSKProtectedImageView'
);

import { isInitialized } from '../config';

export interface ProtectedViewProps extends ImageProps {
  onSettingFlagFailed?: (error: Error) => void;
}

const ProtectedView: React.FunctionComponent<ProtectedViewProps> = ({
  source,
  onSettingFlagFailed,
  ...others
}) => {
  const initialized = isInitialized();
  const isAndroid = Platform.OS === 'android';

  React.useEffect(() => {
    (async () => {
      if (initialized && isAndroid) {
        try {
          await Screenshield.enableSecureFlag();
        } catch (error) {
          if (onSettingFlagFailed) {
            onSettingFlagFailed(error);
          }
        }
      }

      return async () => {
        if (initialized && isAndroid) {
          try {
            await Screenshield.disableSecureFlag();
          } catch (error) {
            if (onSettingFlagFailed) {
              onSettingFlagFailed(error);
            }
          }
        }
      };
    })();
  }, [initialized, isAndroid, onSettingFlagFailed]);

  if (!initialized) {
    return <Image source={source} {...others} />;
  }

  return Platform.select({
    ios: <RCTSSKProtectedImageView image={source} {...others} />,
    default: <Image source={source} {...others} />,
  });
};

export default ProtectedView;
