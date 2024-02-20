import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import CommentList from './chapter5/CommentList';
import NotificationList from './chapter6/NotificationList';
import Accomodate from './chapter7/Accomodate';
import ConfirmButtonclassver from './chapter8/ConfirmButtonclassver';
import ConfirmButtonfuncver from './chapter8/ConfirmButtonfuncver';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfirmButtonfuncver />
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
