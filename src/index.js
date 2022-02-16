import React from 'react';
import ReactDOM from 'react-dom';
import MyRoutes from './Components/Routes';

import 'react-toastify/dist/ReactToastify.css';
//import axios from 'axios';
import store from "./reduxstore/store"

import {Provider} from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<Provider store={store}>
 <MyRoutes />
</Provider>
,document.getElementById('Jose'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
