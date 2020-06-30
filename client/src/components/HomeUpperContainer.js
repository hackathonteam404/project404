import React from 'react';
import { Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import image from '../resources/image.svg';
import '../index.scss';

export class HomeUpperContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.getLatLng(this.inputNode.value);
    }

    render() {
        return (
            <Container fluid className="container-1">
                <Row>
                    <Col>
                        <h1 style={{paddingTop: '10vh'}}><strong>Optimize your trips to stores</strong></h1>
                        <p>Find the safest locations to shop and minimize your risk of COVID-19.</p>
                        <Row>
                            <Col>
                                <Form inline style={{justifyContent: 'center'}}>
                                    <FormControl type="text" placeholder="Enter your location or ZIP" className="mr-sm-2" ref={node => this.inputNode = node}/>
                                    <Button variant="primary" onClick={this.handleClick}>Search</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Image fluid src={image} className="image-1"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomeUpperContainer;