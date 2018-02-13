import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../api/request';
import { errorAction, successAction } from '../../asyncDisplayer/containers/actions';
import { LOAD_WALLETS } from './constants';

export function* fetchWallets(url, data) {
  try {
    const wallets = yield call(request, url, data);
    yield put(successAction(LOAD_WALLETS, wallets));
  } catch (err) {
    yield put(errorAction(LOAD_WALLETS, err));
  }
}

export function* getWallets(data) {
  yield fetchWallets("/api/wallets", data);
}

export default function* instrumentResultData() {
  yield takeLatest(LOAD_WALLETS, getWallets);
}