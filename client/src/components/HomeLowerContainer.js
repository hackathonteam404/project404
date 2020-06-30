import React from 'react';
import Map from './Map';
import StoreInfoCard from './StoreInfoCard';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import '../index.scss';

export class HomeLowerContainer extends React.Component {
    render() {
        const stores = []
        for (let i = 0; i < 8; i++) {
            stores.push(
                <ListGroup.Item>
                    <StoreInfoCard name={"Chipotle"}
                            addressLineOne={"1234 Rocky Rd"}
                            addressLineTwo={"New York City, New York 56789"}
                            time={"2"}
                            color={"green"}/>
                </ListGroup.Item>
            );
        }
        return (
            <Container fluid className="container-2">
                <Row>
                    <Col>
                        <Map center={this.props.center}/>
                    </Col>
                    <Col>
                    <ListGroup style={{overflow: 'scroll', overflowX: 'hidden', maxHeight: '100vh'}}>
                        {stores}
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomeLowerContainer;