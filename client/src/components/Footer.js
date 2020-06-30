import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.scss';

export class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="container-3">
                <Row fluid style={{paddingTop: '4vh'}}>
                    <Col>
                        <strong></strong>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;