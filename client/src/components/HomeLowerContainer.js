import React from 'react';
import MapComponent from './MapComponent';
import StoreInfoCard from './StoreInfoCard';
import { Container, Row, Col, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import '../index.scss';

export class HomeLowerContainer extends React.Component {
    render() {
        const stores = []
        for (let i = 0; i < this.props.storeInfo.length; i++) {
            const store = this.props.storeInfo[i];
            const time = Math.floor(Math.random() * 7);
            let color = "green";
            if (time > 3 && time <= 6) {
                color = "orange";
            }
            stores.push(
                <ListGroup.Item>
                    <StoreInfoCard name={store.visaMerchantName}
                            addressLineOne={store.merchantStreetAddress}
                            addressLineTwo={store.merchantCity + ", " + store.merchantState + " " + store.merchantPostalCode}
                            time={time}
                            color={color}/>
                </ListGroup.Item>
            );
        }
        return (
            <Container fluid className="container-2">
                <Row>
                    <Col>
                        <MapComponent center={this.props.center} storeInfo={this.props.storeInfo}/>
                    </Col>
                    <Col>
                    <DropdownButton id="dropdown-basic-button" title={this.props.category}>
                        <Dropdown.Item onClick={() => this.props.changeCategory('Restaurants')}>Restaurants</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.changeCategory('Grocery Stores')}>Grocery Stores</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.changeCategory('Pharmacies')}>Pharmacies</Dropdown.Item>
                    </DropdownButton>
                    <ListGroup style={{overflowX: 'hidden', maxHeight: '95vh', borderRadius: '0rem'}}>
                        {stores}
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomeLowerContainer;