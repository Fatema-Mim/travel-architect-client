import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row, Button, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const PackageOrder = () => {
    const { packageId } = useParams();
    const { user } = useAuth();
    const [orderPackages, setOrderPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const nameRef = useRef();
    const emailRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const statusRef = useRef();
    const addressRef = useRef();
    const history = useHistory();
    const redirect_uri = '/userOrder';
    useEffect(() => {
        fetch('https://shielded-scrubland-27688.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setOrderPackages(data))
            .finally(() => setIsLoading(false));

    }, [])
    const selectOrder = orderPackages.find(orderPackage => orderPackage._id == packageId)
    const handleUserOrder = e => {

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const status = statusRef.current.value;
        const address = addressRef.current.value;

        const newOrder = { name, email, title, price,address, status };
        console.log(newOrder);

        fetch('https://shielded-scrubland-27688.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Confirm');
                    history.push(redirect_uri);
                }
            });
        e.preventDefault();


    }
    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="grow" variant="warning" />
        </div>
    }

    return (
        <>
            <Container className="mt-5 mb-5">
                <Form onSubmit={handleUserOrder}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Client Name:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={nameRef} type="text" value={user?.displayName || ''} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Client Email:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={emailRef} type="email" value={user?.email} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Client Address:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={addressRef} type="text" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Package Title:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={titleRef} type="text" value={selectOrder?.title} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Package Price:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={priceRef} type="number" value={selectOrder?.price} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>

                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={statusRef} type="text" value="pending" hidden />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="warning" type="submit">Booked</Button>
                        </Col>
                    </Form.Group>


                </Form>
            </Container>

        </>
    );
};

export default PackageOrder;