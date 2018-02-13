import { errorAction, resetAction, successAction } from '../actions';

describe('given errorAction', () => {
  it('should', () => {
    const type = 'TYPE';
    const expectedType = 'TYPE_ERROR';
    const error = 'errorMsg';
    const expected = {
      type: expectedType,
      error,
    };
    expect(errorAction(type, error)).toEqual(expected);
  });
});

describe('given successAction', () => {
  it('should', () => {
    const type = 'TYPE';
    const expectedType = 'TYPE_SUCCESS';
    const entity = {};
    const expected = {
      type: expectedType,
      entity,
    };
    expect(successAction(type, entity)).toEqual(expected);
  });
});

describe('given resetAction', () => {
  it('should', () => {
    const type = 'TYPE';
    const expectedType = 'TYPE_RESET';
    const expected = {
      type: expectedType,
    };
    expect(resetAction(type)).toEqual(expected);
  });
});

