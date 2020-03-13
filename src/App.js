import React, { Component } from 'react';
import './App.css';
import { Contador } from './componentes/Contador';
import { Placar } from './componentes/Placar';
import { Times } from './utils/Times';

const dados = {
  partida: {
    estadio: 'Maracanã',
    data: '12/03/2020',
    horario: '21:30'
  },
  casa: Times.FLAMENGO,
  visitante: Times.BARCELONA
};

class App extends Component {

  render() {
    return (
      <div>
        |<h1>Estudo React Básico</h1>
        <Contador />
        <Placar {...dados} />
      </div>
    );
  }
}

export default App;
