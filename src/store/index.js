import { createStore, combineReducers, applyMiddleware, compose, } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import serviceListReducer from '../reducers/serviceList';
import activeServiceReducer from "../reducers/activeService";
import { fetchActiveServiceEpic, fetchServicesEpic } from '../epics';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  activeService: activeServiceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  fetchServicesEpic,
  fetchActiveServiceEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;