import React from "react";
import { App } from './App'
import './assets/css/index.css'
import { Provider } from "./context/books";
const ReactDom = require('react-dom/client');

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(
    <Provider>
        <App />
    </Provider>
)

