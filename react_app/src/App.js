import React, { Component } from 'react';
import './App.css';

class App extends Component {
  input = '';

  msgStyle = {
    fontSize: "20px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
  }
  inputStyle = {
    fontSize: "12pt",
    padding: "5px"
  }
  constructor(props) {
    super(props);
    this.state = {
      message: "type your name:"
    };
    this.doChange = this.doChange.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: "Hello," + this.input
    });
    event.preventDefault();
  }

  render() {
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <form onSubmit={this.doSubmit}>
        <label>
          <span style={this.inputStyle}></span>Message:
          <input type="text" style={this.inputStyle} onChange={this.doChange} />
        </label>
        <input type="submit" style={this.inputStyle} value="Click" />
      </form>
    </div>;
  }
}

class List extends Component {
  number = 1;

  title = {
    fontSize: "20pt",
    fontWeight: "bold",
    color: "blue"
  };

  render() {
    let data = this.props.data;
    return (
      <div>
        <p style={this.title}>{this.props.title}</p>
        <ul>
          {data.map((item) =>
            <Item number={this.number++} value={item} key={this.number} />
          )}
        </ul>
      </div>
    );
  }
}

class Item extends Component {
  li = {
    listStyleType: "square",
    fontSize: "16pt",
    color: "#06",
    margin: "0px",
    padding: "0px"
  }
  num = {
    fontWeight: "bold",
    color: "red"
  }

  render() {
    return (
      <li style={this.li}>
        <span style={this.num}>「{this.props.number}」</span>
        {this.props.value}
      </li>
    );
  }
}
export default App;
