import * as Pages from './pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './styles/styles.css';

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Pages.Home />} />
		</Routes>
	);
}

export default App;
