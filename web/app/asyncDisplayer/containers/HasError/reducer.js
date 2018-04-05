import { ERROR, SUCCESS, RESET } from '../constants';

const hasErrorReducer = (options) => (
  (state = false, action) => {
    switch (action.type) {
      case options.action:
        return false;
      case `${options.action}${RESET}`:
        return false;
      case `${options.action}${SUCCESS}`:
        return false;
      case `${options.action}${ERROR}`:
        return action.error;
      default:
        return state;
    }
  }
);

export default hasErrorReducer;
