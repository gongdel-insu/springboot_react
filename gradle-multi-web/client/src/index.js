import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './containers/App';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
const rootElement = document.getElementById('root');

const render = (param) => {
	const Main = hot(module)(param);
	ReactDOM.render(<Main />, rootElement);
};

render(App);
