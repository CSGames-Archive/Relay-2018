import { RESET, SUCCESS, ERROR } from '../constants';

const isLoadingReducer = (options) => (
  (state = false, action) => {
    switch (action.type) {
      case options.action:
        return true;
      case `${options.action}${RESET}`:
        return false;
      case `${options.action}${SUCCESS}`:
        return false;
      case `${options.action}${ERROR}`:
        return false;
      default:
        return state;
    }
  }
);

export default isLoadingReducer;
