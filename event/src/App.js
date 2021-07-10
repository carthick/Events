import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      height: '',
      area:0
    };
  }
  triangleArea = () => {
    console.log(this.state.base)
    console.log(this.state.height)
    const area = 1/2*(this.state.base*this.state.height)
    console.log(area)
    this.setState({
      area: area
    });
  }

  render() {
    return (
      <div>
        <h1>
         Area Of Triangle
        </h1>
        <p>
          Enter the value of Base
          <input type="number" onChange={e => this.setState({ base:e.target.value })}/>
        </p>
        <p>
          Enter the value of Height 
          <input type="number" onChange={e => this.setState({ height:e.target.value })}/>
        </p>
        <h3>{this.state.area}</h3>
        <button onClick={this.triangleArea}>Get area</button>
      </div>
    );
  }
}

export default App;
