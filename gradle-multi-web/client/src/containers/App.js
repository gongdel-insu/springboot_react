import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Title from './Title';
import Container from '../components/commons/Container';
class App extends Component {
	render() {
		return (
			<div>
				<Container Title={Title} LeftContent={'1'} RightContent={'2'} />
			</div>
		);
	}
}

export default hot(module)(App);
