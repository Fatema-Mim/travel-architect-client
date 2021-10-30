import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import tour1 from '../../Image/upTo/tour1.png';
import tour4 from '../../Image/upTo/tour4.png';
import tour3 from '../../Image/upTo/tour3.png';


const UpTOEvent = () => {

    return (
        <Container className="mt-5 mb-5">
            <h1 className="text-center p-5">Get Ready For <span className="text-warning">Next Tour</span></h1>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row >
                <Col xs={12} md={4} lg={3} style={{ 
                    backgroundImage: `url(${tour4})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                 }} >
                    <div className="text-center p-5">
                        <h1 className="p-5 text-dark text-size-one">Soviena</h1>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={6} style={{
                    backgroundImage: `url(${tour1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className="text-center p-5">
                        <h1 className="p-5 text-light text-size-one">Beijing</h1>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3} style={{
                    backgroundImage: `url(${tour3})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className="text-center p-5">
                        <h1 className="p-5 text-dark text-size-one">Turki</h1>
                    </div>
                </Col>
            </Row>
            

        </Container>
    );
};

export default UpTOEvent;