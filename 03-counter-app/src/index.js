import React from 'react';
import ReactDOM from 'react-dom'
import CounterApp from './CounterApp';
// import PrimeraAPP from './PrimeraApp';

import './index.css'



const divRoot = document.querySelector('#app');

// ReactDOM.render( <PrimeraAPP saludo = "Hola, Soy Goku" /> , divRoot );
ReactDOM.render( <CounterApp value = { 10 } /> , divRoot );