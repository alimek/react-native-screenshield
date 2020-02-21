import ProtectedView, { ProtectedViewProps } from './ProtectedView';
import { init, isInitialized } from './config';

type ScreenShieldType = {
  init: (key?: string) => void;
  isInitialized: () => boolean;
};

const module: ScreenShieldType = {
  init,
  isInitialized,
};

export { module as default, ProtectedView, ProtectedViewProps };
