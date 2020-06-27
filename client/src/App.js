import React from 'react';
import NavigationBar from './components/NavigationBar';
import HomeUpperContainer from './components/HomeUpperContainer';
import HomeLowerContainer from './components/HomeLowerContainer';
import Footer from './components/Footer';
import './index.scss';

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

  testAPI = async (zip) => {
    const response = await fetch('http://localhost:8080/test?zip=' + zip);
    const body = await response.json();
    this.setState({center: body.results[0].geometry.location});
  }

  componentDidMount() {
    this.getGreeting();
  }

  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <HomeUpperContainer test={this.testAPI}/>
        <HomeLowerContainer center={this.state.center}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
