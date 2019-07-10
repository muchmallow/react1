import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import storeContext from "./storeContext";

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<storeContext.Provider value={store}>
				<App state={state}/>
			</storeContext.Provider>
		</BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state)
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
