import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Hire from './components/Hire';
import Projects from './components/Projects';
import Showcase from './components/Showcase';

function App() {
	return (
		<Router>
			<Header />
			<Route path="/" exact>
				<Showcase />
			</Route>
			<Route path="/projects">
				<Projects />
			</Route>
			<Route path="/hire">
				<Hire />
			</Route>
		</Router>
	);
}

export default App;
