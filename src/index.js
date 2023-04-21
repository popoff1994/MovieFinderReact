import './style.css';
import React from 'react';
import {createRoot} from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(<BrowserRouter><Provider store={store}>
    <App />
</Provider></BrowserRouter>);