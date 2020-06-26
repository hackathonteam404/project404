import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WebMapView } from './WebMapView';
import '../index.scss';

export class HomeLowerContainer extends React.Component {
    render() {
        return (
            <Container fluid className="container-2">
                <Row>
                    <Col>
                        <WebMapView/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default HomeLowerContainer;