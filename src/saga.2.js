import {takeEvery,put,all,call} from 'redux-saga/effects';
import * as types from './store/action-types';
const delay= ms => new Promise(function (resolve,reject) {
	setTimeout(function () {
		resolve();	
	},ms);
});
function* add(dispatch,action) {
	//call表示告诉saga,请帮我执行一下delay函数，并传入1000作为参数
	yield call(delay,1000);
	//就是指挥saga中间件向仓库派发一个动作
	yield put({type:types.ADD});
}

function* watchAdd() {
	//监听派发给仓库的动作,如果动作类型匹配的话，会执行对应的监听生成器
	yield takeEvery(types.ADD_ASYNC,add);
}

export function* rootSaga() {
	yield watchAdd();
}