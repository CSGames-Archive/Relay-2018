import { fromJS } from 'immutable';
import { makeSelectError } from '../selectors';

describe('makeSelectError', () => {
  it('should select hasError', () => {
    const mockedState = fromJS({ hasError: false });
    const selector = makeSelectError((state) => (state));
    expect(selector(mockedState)).toEqual(false);
  });
});
