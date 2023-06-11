import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/_App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';



//render the calculator app within the container 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <Container/>
    </Provider>
);

//check basic web vitals
reportWebVitals();
