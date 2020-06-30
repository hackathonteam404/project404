import React from 'react';
import { Card } from 'react-bootstrap';
import '../index.scss';

export class StoreInfoCard extends React.Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {this.props.addressLineOne}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        {this.props.addressLineTwo}
                    </Card.Subtitle>
                    <Card.Text style={{color: this.props.color}}>
                        Estimated Waiting Time: {this.props.time} minutes
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
 
export default StoreInfoCard;