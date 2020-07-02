import React from 'react';
import NavigationBar from './components/NavigationBar';
import HomeUpperContainer from './components/HomeUpperContainer';
import HomeLowerContainer from './components/HomeLowerContainer';
import Footer from './components/Footer';
import About from './components/About';
import { JSON1, JSON2, JSON3, JSON4, JSON5, JSON6, JSON7, JSON8, JSON9 } from './json';
import './index.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeInfo: [],
      category: 'Restaurants',
      page: 'home',
    };
  }

  changeCategory = (category) => {
    this.setState({
      category: category,
    }, () => this.processJSON());
  }

  changePage = (page) => {
    this.setState({
      page: page,
      storeInfo: [],
    });
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
    this.setState({
      center: body.results[0].geometry.location,
      zip: zip,
    }, () => this.processJSON());
  }

  processJSON = () => {
    const storeInfo = []
    let json = JSON1;
    switch (this.state.category) {
      case 'Restaurants':
        if (this.state.zip === '94127') {
          json = JSON1;
        } else if (this.state.zip === '90012') {
          json = JSON4;
        } else if (this.state.zip === '10005') {
          json = JSON7;
        }
        break;
      case 'Grocery Stores':
        if (this.state.zip === '94127') {
          json = JSON2;
        } else if (this.state.zip === '90012') {
          json = JSON5;
        } else if (this.state.zip === '10005') {
          json = JSON8;
        }
        break;
      case 'Pharmacies':
        if (this.state.zip === '94127') {
          json = JSON3;
        } else if (this.state.zip === '90012') {
          json = JSON6;
        } else if (this.state.zip === '10005') {
          json = JSON9;
        }
        break;
      default:
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
        <NavigationBar changePage={this.changePage}/>
        {this.state.page === 'home'
          ? <div>
              <HomeUpperContainer getLatLng={this.getLatLng}/>
              <HomeLowerContainer
                center={this.state.center}
                storeInfo={this.state.storeInfo}
                category={this.state.category}
                changeCategory={this.changeCategory}/>
            </div>
          : <About/>}
        <Footer/>
      </div>
    );
  }
}

export default App;
