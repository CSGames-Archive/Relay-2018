import { fromJS } from 'immutable';
import { makeSelectLoading } from '../selectors';

describe('makeSelectLoading', () => {
  it('should select isLoading', () => {
    const mockedState = fromJS({ isLoading: false });
    const selector = makeSelectLoading((state) => (state));
    expect(selector(mockedState)).toEqual(false);
  });
});
