import * as config from '../config';
import * as constants from '../constants';

const initState = {
  value: null,
  profile: config.profiles[0],
  limit: config.limits[0],
  result: {
    loading: false,
    error: false,
    data: null,
  },
}

export default function reducer(state = initState, action) {
  if (action.type === constants.SET_VALUE) {
    const { value } = action;
    return Object.assign({}, state, { value });
  }

  if (action.type === constants.SET_PROFILE) {
    const { profile } = action;
    return Object.assign({}, state, { profile });
  }

  if (action.type === constants.SET_LIMIT) {
    const { limit } = action;
    return Object.assign({}, state, { limit });
  }

  if (action.type === constants.RESULT.REQUEST) {
    return Object.assign({}, state, { result: {
      loading: true,
      error: false,
      data: null,
    }});
  }

  if (action.type === constants.RESULT.SUCCESS) {
    const { data } = action;
    return Object.assign({}, state, { result: {
      loading: false,
      error: false,
      data,
    }});
  }

  if (action.type === constants.RESULT.ERROR) {
    const { error } = action;
    return Object.assign({}, state, { result: {
      loading: false,
      error,
      data: null,
    }});
  }

  return state;
}
