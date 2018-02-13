import loadingReducer from '../reducer';
import { errorAction, resetAction, successAction } from '../../actions';

describe('isLoadingReducer', () => {
  let state;
  const RESET = 'reset';
  const ACTION = 'action';
  const SUCCESS = 'success';
  const ERROR = 'error';
  const errorMsg = 'errorMsg';
  const prospectOptions = {
    action: ACTION,
    reset: RESET,
    success: SUCCESS,
    error: ERROR,
  };
  beforeEach(() => {
    state = false;
  });
  it('should return false by default', () => {
    expect(loadingReducer(prospectOptions)(undefined, {})).toEqual(false);
  });
  it('should return error when error action', () => {
    expect(loadingReducer(prospectOptions)(state, errorAction(ACTION, errorMsg))).toEqual(false);
  });
  it('should return false after reset', () => {
    expect(loadingReducer(prospectOptions)(state, resetAction(ACTION))).toEqual(false);
  });
  it('should return false after success', () => {
    expect(loadingReducer(prospectOptions)(state, successAction(ACTION, {}))).toEqual(false);
  });
});
