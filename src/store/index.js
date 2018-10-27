import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddelware from '../redux-saga';
import {rootSaga} from '../saga';
//执行它可以得到中间件函数
let sagaMiddleware=createSagaMiddelware();
let store=applyMiddleware(sagaMiddleware)(createStore)(reducer);
//开始执行rootSaga
sagaMiddleware.run(rootSaga);
export default store;