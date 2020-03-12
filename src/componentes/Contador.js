import React, { Component } from 'react';

export class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 0 };
  }

  incrementar() {
    this.setState({ contador: this.state.contador + 1 })
  }

  decrementar() {
    this.setState({ contador: this.state.contador - 1 })
  }

  render() {
    return (
      <div>
        <h1>
          Contador: {this.state.contador}
        </h1>
        <div>
          <button onClick={this.incrementar.bind(this)}>+</button>
          <button onClick={this.decrementar.bind(this)}>-</button>
        </div>
      </div>
    )
  }
}
