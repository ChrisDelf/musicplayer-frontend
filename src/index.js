
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import 'semantic-ui-css/semantic.min.css'
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index.js';
// Import redux persist
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
//PersistGate wrapped around root component
import { PersistGate } from 'redux-persist/integration/react';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}


//Persist combined reducers
const persistedReducer = persistReducer(persistConfig, combineReducers)
//Store now has access to persisted reducers
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  rootElement
);

reportWebVitals();
