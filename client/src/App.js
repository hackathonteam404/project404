import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getGreeting = async () => {
    const response = await fetch('http://localhost:8080/greeting');
    const body = await response.json();
    this.setState({
      id: body.id,
      content: body.content,
    });
  }

  componentDidMount() {
    this.getGreeting();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Id: {this.state.id}</p>
          <p>Content: {this.state.content}</p>
        </header>
      </div>
    );
  }
}

export default App;
