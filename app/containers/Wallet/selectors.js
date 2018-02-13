import { createSelector } from 'reselect';

const selectWallets = (state) => state.get('wallets');

const makeSelectWallets = () => createSelector(
  selectWallets,
  (state) => state.getIn(['entity', 'wallets']).toJS()
);

export {
  selectWallets,
  makeSelectWallets,
};
