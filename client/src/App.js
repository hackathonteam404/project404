import React from 'react';
import NavigationBar from './components/NavigationBar';
import HomeUpperContainer from './components/HomeUpperContainer';
import HomeLowerContainer from './components/HomeLowerContainer';
import Footer from './components/Footer';
import { JSON1, JSON2, JSON3 } from './json';
import './index.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeInfo: [],
      category: 'Restaurants',
    };
  }

  changeCategory = (category) => {
    this.setState({
      category: category,
    }, () => this.processJSON());
  }

  getGreeting = async () => {
    const response = await fetch('http://localhost:8080/greeting');
    const body = await response.json();
    this.setState({
      id: body.id,
      content: body.content,
    });
  }

  getLatLng = async (zip) => {
    const response = await fetch('http://localhost:8080/test?zip=' + zip);
    const body = await response.json();
    this.setState({center: body.results[0].geometry.location}, () => this.processJSON());
  }

  processJSON = () => {
    const storeInfo = []
    let json = JSON1;
    switch (this.state.category) {
      case 'Restaurants':
        json = JSON1;
        break;
      case 'Grocery Stores':
        json = JSON2;
        break;
      case 'Pharmacies':
        json = JSON3;
        break;
    }
    const array = json.merchantLocatorServiceResponse.response;
    for (let i = 0; i < array.length; i++) {
      storeInfo.push(array[i].responseValues);
    }
    this.setState({storeInfo: storeInfo});
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <HomeUpperContainer getLatLng={this.getLatLng}/>
        <HomeLowerContainer
          center={this.state.center}
          storeInfo={this.state.storeInfo}
          category={this.state.category}
          changeCategory={this.changeCategory}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
