import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { YCCRouter } from './components';
import './App.css';

function App() {

	return (
		<BrowserRouter>
			<YCCRouter />
		</BrowserRouter>
	);
}

export default App;