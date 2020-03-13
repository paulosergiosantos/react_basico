import React, { Component } from 'react';

export class Partida extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.estadio}</h2>
        <div>
          <span>{this.props.data} {this.props.horario}</span>
        </div>
      </div>
    )
  }
}