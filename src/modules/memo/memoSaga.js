import {
  getMemoListAsync,
  getMemoAsync,
  addMemoAsync,
  updateMemoAsync,
  deleteMemoAsync,
  error,
  resetError,
  pending,
} from './memoReducer';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import memoAPI from '../../api/memo';

export const selectMemoList = state => state.memo.memoList;

export function* getMemoListSaga() {}

export function* getMemoSaga() {}

export function* addMemoSaga() {}

export function* updateMemoSaga() {}

export function* deleteMemoSaga() {}

export function* memoSaga() {
  yield takeLatest(getMemoListAsync.type, getMemoListSaga);
  yield takeLatest(getMemoAsync.type, getMemoSaga);
  yield takeLatest(addMemoAsync.type, addMemoSaga);
  yield takeLatest(updateMemoAsync.type, updateMemoSaga);
  yield takeLatest(deleteMemoAsync.type, deleteMemoSaga);
}
