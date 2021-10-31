import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const {_id,title, price, location,image,discription} = props.allPackage;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} className="img-border-set" />
                <Card.Body className="pt-3 pb-3">
                    <Card.Title>
                        <h3>{title}</h3>
                    </Card.Title>
                    <Card.Text>
                        <h3 className="mt-3 mb-3">Price : <span className="text-warning">${price}</span> </h3>
                        <h5>Location : <span className="text-warning">{location}</span> </h5>
                        <p className="mt-3 mb-3">{discription}</p>
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