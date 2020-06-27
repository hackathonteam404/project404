import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.scss';
import SimpleMap from './SimpleMap';

export class HomeLowerContainer extends React.Component {
    render() {
        return (
            <Container fluid className="container-2">
                <Row>
                    <Col><SimpleMap center={this.props.center}/></Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default HomeLowerContainer;