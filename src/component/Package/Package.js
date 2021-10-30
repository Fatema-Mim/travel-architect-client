import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const {_id,title, price, location,image,discription} = props.allPackage;
    return (
        <Col>
            <Card className="custom-card">
                <Card.Img variant="top" src={image} className="img-border-set" />
                <Card.Body className="text-center">
                    <Card.Title className="supports-Name ">
                        <h2 className="card-title">{title}</h2>
                    </Card.Title>
                    <Card.Text>
                        <small>Price : {price}</small>
                        <small>Location : {location}</small>
                        <p className="card-text p-3">{discription}</p>
                        <Link to={`/packages/${_id}`} style={{ textDecoration: 'none' }} >
                            <div className="d-grid gap-2">
                                <button className="btn btn-warning" type="button">Book Now</button>
                            </div>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;