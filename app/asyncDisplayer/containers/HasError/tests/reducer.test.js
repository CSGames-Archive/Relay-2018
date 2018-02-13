import errorReducer from '../reducer';
import { errorAction, successAction, resetAction } from '../../actions';

describe('hasErrorReducer', () => {
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
    expect(errorReducer(prospectOptions)(undefined, {})).toEqual(false);
  });
  it('should return false by default', () => {
    expect(errorReducer(prospectOptions)(state, { type: ACTION })).toEqual(false);
  });
  it('should return error when error action', () => {
    expect(errorReducer(prospectOptions)(state, errorAction(ACTION, errorMsg))).toEqual(errorMsg);
  });
  it('should return false after reset', () => {
    expect(errorReducer(prospectOptions)(true, resetAction(ACTION))).toEqual(false);
  });
  it('should return false after success', () => {
    expect(errorReducer(prospectOptions)(true, successAction(ACTION, {}))).toEqual(false);
  });
});
