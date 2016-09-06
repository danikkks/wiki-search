import * as constants from '../constants';

export const setValue = (value) => ({
  type: constants.SET_VALUE,
  value,
});
export const setProfile = (profile) => ({
  type: constants.SET_PROFILE,
  profile,
});
export const setLimit = (limit) => ({
  type: constants.SET_LIMIT,
  limit,
});

export const getResult = () => ({
  type: constants.GET_RESULT,
});

export const result = {
  request: () => ({ type: constants.RESULT.REQUEST }),
  success: (data) => ({ type: constants.RESULT.SUCCESS, data }),
  error: (error) => ({ type: constants.RESULT.ERROR, error }),
}
