import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './redux/userReducer.js';
import questionsReducer from './redux/questionReducer.js';
import chakraReducer from './redux/chakraReducer.js';
import poseReducer from './redux/poseReducer.js';
import adviceReducer from './redux/adviceReducer.js';


const rootReducer = combineReducers({
    currentUser: userReducer,
    allQuestions: questionsReducer,
    allChakras: chakraReducer,
    allPoses: poseReducer,
    allAdvice: adviceReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
