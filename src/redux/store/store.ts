import {createStore, applyMiddleware, Middleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from "../reducers";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleWare = createSagaMiddleware();
const middleware: any[] = [sagaMiddleWare];
if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}
export const store = createStore(reducers, {}, applyMiddleware(...middleware));
sagaMiddleWare.run(rootSaga);