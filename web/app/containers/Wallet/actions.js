import { LOAD_WALLETS } from './constants';

export function loadWallets() {
  return {
    type: LOAD_WALLETS,
  };
}