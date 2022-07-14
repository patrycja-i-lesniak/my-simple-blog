import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'react-bootstrap';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider
				breakpoints={[ 'xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs' ]}
				minBreakpoint="xxs"
			>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
