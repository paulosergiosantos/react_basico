import React, { Component } from 'react';

export class Escalacao extends Component {
  render() {
    const escalacao = this.props.jogadores.map(jogador => <li key={jogador.numero}>{jogador.numero} - {jogador.nome}</li>);
    return (
      <div>
        <ul>
          {escalacao}
        </ul>
      </div>
    )
  }
}