import React, { Component } from 'react';
import { BotaoGol } from './BotaoGol'
import { Escalacao } from './Escalacao';

export class Time extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.time.nome}</h1>
        <h2>{this.props.gols}</h2>
        <BotaoGol marcarGol={this.props.marcarGol}/>
        <Escalacao jogadores={this.props.time.jogadores} />
      </div>
    )
  }  
}