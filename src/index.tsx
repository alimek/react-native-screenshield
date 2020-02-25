import ProtectedView, { ProtectedViewProps } from './ProtectedView';
import { init, isInitialized } from './config';

const module = {
  init,
  isInitialized,
};

export { module as default, ProtectedView, ProtectedViewProps };
