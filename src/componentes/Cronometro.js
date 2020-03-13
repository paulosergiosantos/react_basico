import React, { Component } from 'react';

export class Cronometro extends Component {
  static MAX_TIME = 45 * 60;

  constructor() {
    super();
    this.state = { cron: 0 };
    this.timerId = -1;
  }

  increment() {
    if (this.state.cron < Cronometro.MAX_TIME) {
      this.setState({ cron: this.state.cron + 1 });
    } else {
      this.finish();
    }
  }

  init() {
    this.pause();
    this.timerId = setInterval(this.increment.bind(this), 1000);
  }

  start() {
    this.init();
    this.setState({ cron: 0 });
  }

  pause() {
    clearInterval(this.timerId);
  }

  continue() {
    if (this.timerId !== -1) {
      this.init();
    }
  }

  finish() {
    this.pause();
    this.timerId = -1;
  }

  formatCron() {
    const minutes = Math.floor(this.state.cron / 60).toString().padStart(2, '0');
    const seconds = (this.state.cron % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  render() {
    return (
      <div>
        <button onClick={this.start.bind(this)}>Iniciar</button>
        <button onClick={this.pause.bind(this)}>Parar</button>
        <button onClick={this.continue.bind(this)}>Continuar</button>
        <button onClick={this.finish.bind(this)}>Terminar</button>
        <span style={{ 'marginLeft': '10px' }}>{this.formatCron()}</span>
      </div>
    )
  }
}