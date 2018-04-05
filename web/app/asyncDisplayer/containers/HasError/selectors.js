import { createSelector } from 'reselect';

const makeSelectError = (entitySelector) => createSelector(
  entitySelector,
  makeSelectErrorFromState,
);

const makeSelectErrorFromState = (state) => state.get('hasError');

export {
  makeSelectError,
  makeSelectErrorFromState,
};
