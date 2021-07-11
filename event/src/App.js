import React, { Component } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      height: '',
      divisor:'',
      dividend:'',
      hours:'',
      reminder:0,
      seconds:0,
      minutes:0,
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

  convertSecondstoMinutes = () => {
    console.log(this.state.seconds)
    const minutes = this.state.seconds / 60
    this.setState({
      minutes:minutes
    });
  }

  getReminder = () => {
    console.log(this.state.divisor,this.state.dividend);
    const reminder = this.state.divisor % this.state.dividend
    this.setState({
      reminder:reminder
    })
  }

  render() {
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Card>
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
              <Button onClick={this.triangleArea}>Get area</Button>
            </Card>
          </Col>
          <Col>
            <Card>
              <h1>
                convert Seconds To Minutes
              </h1>
              <p>
                Enter Seconds
                <input type="number" onChange={e => this.setState({ seconds:e.target.value })}/>
              </p>
              <h3>{this.state.minutes}</h3>
              <Button onClick={this.convertSecondstoMinutes}>Convert Seconds to Minutes</Button>
            </Card>
          </Col>
          <Col>
            <Card>
              <h1>
                Rmeinder of two numbers
              </h1>
              <p>
                Enter First Number
                <input type="number" onChange={e => this.setState({ divisor:e.target.value })}/>
              </p>
              <p>
                Enter Second Number
                <input type="number" onChange={e => this.setState({ dividend:e.target.value })}/>
              </p>
              <h3>{this.state.reminder}</h3>
              <Button onClick={this.getReminder}>Reminder of two Numbers</Button>
            </Card>
          </Col>
          <Col>
            <Card>
              <h1>
                Convert Hours into seconds
              </h1>
              <p>
                Enter Hours
                <input type="number" onChange={e => this.setState({ hours:e.target.value })}/>
              </p>
              <h3>{this.state.reminder}</h3>
              <Button onClick={this.getReminder}>Reminder of two Numbers</Button>
            </Card>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default App;
