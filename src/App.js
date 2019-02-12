import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speed: 250
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const width = canvas.width;
    const height = canvas.height;
    ctx.save();
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);
    ctx.rotate((this.state.speed * Math.PI) / 180);
    ctx.fillStyle = '#4397AC';
    ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
    ctx.restore();
  }

  componentDidUpdate() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const width = canvas.width;
    const height = canvas.height;
    ctx.save();
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);
    ctx.rotate((this.state.speed * Math.PI) / 180);
    ctx.fillStyle = '#4397AC';
    ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
    ctx.restore();
  }

  handleChange(e) {
    this.setState({
      speed: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <canvas 
              ref="canvas" 
              width={this.state.speed} 
              height={this.state.speed} 
              style={{border: '2px dashed white'}}
            />
            <p>Value: {this.state.speed}</p>
            <input 
              type="range"
              min={0}
              max={500}
              value={this.state.rotationSpeed}
              onChange={this.handleChange}
              name="speed"
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
