import React from 'react';

import Conversor from './components/Conversor';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>      
      </div>
      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>      
      </div>
      
    </div>
  );
}

export default App;
