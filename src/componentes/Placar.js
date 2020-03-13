import React, { Component } from 'react';
import { Partida } from './Partida';
import { Time } from './Time';

export class Placar extends Component {
  constructor() {
    super();
    this.state = {
      golsCasa: 0,
      golsVisitante: 0
    };
  }

  marcarGolCasa() {
    this.setState({ golsCasa: this.state.golsCasa + 1 })
  }

  marcarGolVisitante() {
    this.setState({ golsVisitante: this.state.golsVisitante + 1 })
  }

  render() {
    const { partida, casa, visitante } = this.props;
    const estilo = { float: "left", "marginLeft": "20px" };
    console.log(casa, visitante);
    return (
      <div>
        <h1>Placar</h1>
        <div style={estilo}>
          <h3>Casa</h3>
          <Time time={casa} gols={this.state.golsCasa} marcarGol={this.marcarGolCasa.bind(this)}/>
        </div>
        <div style={estilo}>
          <Partida {...partida} />
        </div>
        <div style={estilo}>
          <h3>Visitante</h3>
          <Time time={visitante} gols={this.state.golsVisitante} marcarGol={this.marcarGolVisitante.bind(this)} />
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    )
  }
}