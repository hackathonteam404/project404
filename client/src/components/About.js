import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.scss';

export class About extends React.Component {
    render() {
        return (
            <div>
                <Container fluid className="container-4">
                    <Row>
                        <Col>
                        <h1 style={{paddingTop: '8vh'}}><strong>Your Health Matters</strong></h1>
                        <p style={{paddingLeft: '40vh', paddingRight: '40vh', textAlign: 'left'}}>
                            Merchant Queue Times was created to enable consumers to shop safely by providing estimated wait times at nearby grocery stores and restaurants. This promotes social distancing by encouraging consumers to avoid visiting stores during busy times while relieving pressure on overcrowded stores.
                        </p>
                        <p style={{paddingLeft: '40vh', paddingRight: '40vh', textAlign: 'left'}}>
                            As a company that connects people everyday through innovative payment solutions, Visa is dedicated to supporting both individuals and businesses during these uncertain times. Currently, information about nearby stores and restaurants is provided by Visa. However, we see Merchant Queue Times as a target application for the Visa Queue Insights API, which could simultaneously provide trustworthy predictions as well as receive reliable feedback from users.
                        </p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="container-5">
                    <Row>
                    <Col>
                        <h1 style={{paddingTop: '4vh', paddingBottom: '2vh'}}><strong>Team Members</strong></h1>
                        <p style={{paddingLeft: '40vh', paddingRight: '40vh'}}>Alex Szymanski</p>
                        <p style={{paddingLeft: '40vh', paddingRight: '40vh'}}>Alice Han</p>
                        <p style={{paddingLeft: '40vh', paddingRight: '40vh'}}>Andrew Luwaga</p>
                        <p style={{paddingLeft: '40vh', paddingRight: '40vh'}}>Hannah Bi</p>
                        <p style={{paddingLeft: '40vh', paddingRight: '40vh'}}>Vietfu Tang</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;