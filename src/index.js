import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createMiddleWareSage from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer } from "./redux/reducer";
import rootSaga from "./redux/saga/rootSaga";
import { Provider } from "react-redux";
import { reducerLogin } from "./redux/reducerLogin";
import { reducerDetail } from "./redux/reducerDetail";
import { reducerAdmin } from "./redux/reducerAdmin";
import { reducerUserInfo } from "./redux/reducerUserInfo";
import { reducerAddImage } from "./redux/reducerAddImage";
import { reducerSearchImg } from "./redux/reducerSearchImg";
import { reducerSpinner } from "./redux/reducerSpinner";

const middleWareSaga = createMiddleWareSage();

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootReducer = combineReducers({
  reducer,
  reducerLogin,
  reducerDetail,
  reducerAddImage,
  reducerAdmin,
  reducerUserInfo,
  reducerSearchImg,
  reducerSpinner,
});

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default store;
