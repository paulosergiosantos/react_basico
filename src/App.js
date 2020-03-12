import React, { Component } from 'react';
import './App.css';
import { Contador } from './componentes/Contador';
import { Placar } from './componentes/Placar';

const dados = {
  partida: {
    estadio: 'Maracanã',
    data: '12/03/2020',
    horario: '21:30'
  },
  casa: {
    nome: 'Flamengo'
  },
  visitante: {
    nome: 'Barcelona'
  }
};

class App extends Component {
  render() {
    return (
      <div>
        |<h1>Estudo React Básico</h1>
        <Contador />
        <Placar partida={dados.partida} casa={dados.casa} visitante={dados.visitante} />
      </div>
    );
  }
}

export default App;
