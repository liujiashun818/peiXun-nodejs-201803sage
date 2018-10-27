import {takeEvery,put,all} from 'redux-saga/effects';
import * as types from './store/action-types';
function* add(dispatch,action) {
	//就是指挥saga中间件向仓库派发一个动作
	yield put({type:types.ADD});
}
function* logger(action) {
	console.log(action);
}
//saga分为三类 1.rootSaga 2.监听saga 3.worker干活的saga 
function* watchLogger() {
	yield takeEvery('*',logger);
}
function* watchAdd() {
	//监听派发给仓库的动作,如果动作类型匹配的话，会执行对应的监听生成器
	yield takeEvery(types.ADD_ASYNC,add);
}

export function* rootSaga() {
	yield all([watchAdd(),watchLogger()]);
}