import { take, put, call, select } from 'redux-saga/effects';
import * as constants from '../constants';
import * as actions from '../actions';
import request from '../utils/request';

export default function* saga() {
  while (true) {
    yield take(constants.GET_RESULT);
    yield put(actions.result.request());

    const value = yield select((state) => state.value);
    const profile = yield select((state) => state.profile);
    const limit = yield select((state) => state.limit);
    const params = [
      'action=opensearch',
      'format=json',
      'origin=*',
      `search=${value}`,
      `profile=${profile}`,
      `limit=${limit}`,
    ];

    const url = `https://en.wikipedia.org/w/api.php?${params.join('&')}`;

    const requestResult = yield call(request, url, {
      mode: 'corse',
    });

    if (requestResult.err === undefined || requestResult.err === null) {
      yield put(actions.result.success(requestResult.data));
    } else {
      yield put(actions.result.error(
        requestResult.err.response.status,
        requestResult.err.response.statusText,
        requestResult.err.response.url
      ));
    }
  }
}
