import React, { Component } from 'react';

export class BotaoGol extends Component {
  gol(event) {
    event.preventDefault();
    this.props.marcarGol();
  }

  render() {
    return (
      <div>
        <button onClick={this.gol.bind(this)}>Gol</button>
      </div>
    )
  }  
}