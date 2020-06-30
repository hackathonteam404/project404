import React from 'react';
import Map from './Map';
import StoreInfoCard from './StoreInfoCard';
import { Container, Row, Col, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import '../index.scss';

export class HomeLowerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Restaurants"
        }
    }
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
                    <DropdownButton id="dropdown-basic-button" title={this.state.title}>
                        <Dropdown.Item onClick={() => this.setState({title: 'Restaurants'})}>Restaurants</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({title: 'Grocery Stores'})}>Grocery Stores</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({title: 'Pharmacies'})}>Pharmacies</Dropdown.Item>
                    </DropdownButton>
                    <ListGroup style={{overflow: 'scroll', overflowX: 'hidden', maxHeight: '95vh'}}>
                        {stores}
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomeLowerContainer;