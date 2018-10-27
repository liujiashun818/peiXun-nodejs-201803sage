import {take,put,takeEvery,call} from './redux-saga/effects';
import * as types from './store/action-types';
// react-router-redux + saga 用户注册登录
// mobx
// dva
/**
export function* rootSaga() {
	//表示等待一个动作发生
	// yield {type:'take',acionType:ADD_ASYNC}
	while(true){
		let action=yield take(types.ADD_ASYNC);
		yield put({type: types.ADD});
	}
}
 */
const delay=ms => new Promise(function (resolve,reject) {
	setTimeout(function () {
		resolve();
	},ms);
});
function* add() {
	yield call(delay,1000);
	yield put({type:types.ADD});
}
export function* rootSaga() {
	yield takeEvery(types.ADD_ASYNC,add);
	console.log('after TakerEvery ');
}