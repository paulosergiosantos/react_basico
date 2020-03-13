import React, { Component } from 'react';

export class Escalacao extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.jogadores.map(jogador => <li key={jogador.numero}>{jogador.numero} - {jogador.nome}</li>)}
        </ul>
      </div>
    )
  }
}