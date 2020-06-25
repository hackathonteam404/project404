import React from 'react';

import './index.scss';

import { Container, Row, Col, Image } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import image from './resources/image.svg';

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
        <NavigationBar />
        <Container fluid className="container-home-1">
          <Row>
            <Col></Col>
            <Col>
              <Image fluid src={image} className="image-1"/>
            </Col>
          </Row>
        </Container>
        <Container fluid className="container-home-2">
          <Row></Row>
        </Container>
        <Container fluid className="container-home-3">
          <Row></Row>
        </Container>
      </div>
    );
  }
}

export default App;
