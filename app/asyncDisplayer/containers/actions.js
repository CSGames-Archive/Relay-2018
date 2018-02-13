import { ERROR, SUCCESS, RESET } from './constants';

export const errorAction = (type, error) => ({
  type: `${type}${ERROR}`,
  error,
});

export const successAction = (type, entityObject) => ({
  type: `${type}${SUCCESS}`,
  entity: entityObject,
});

export const resetAction = (type) => ({
  type: `${type}${RESET}`,
});
