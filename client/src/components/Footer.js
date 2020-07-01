import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.scss';

export class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="container-3">
                <Row fluid style={{paddingTop: '3.5vh'}}>
                    <Col>
                        <strong>VISA</strong>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;