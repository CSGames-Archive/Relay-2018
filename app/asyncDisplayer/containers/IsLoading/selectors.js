import { createSelector } from 'reselect';

const makeSelectLoading = (entitySelector) => createSelector(
  entitySelector,
  makeSelectLoadingFromState,
);

const makeSelectLoadingFromState = (state) => state.get('isLoading');

export {
  makeSelectLoading,
  makeSelectLoadingFromState,
};
