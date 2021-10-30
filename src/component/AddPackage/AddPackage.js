import React, { useRef } from 'react';
import { Form, Container, Col, Row, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';

const AddPackage = () => {
    const titleRef = useRef();
    const locationRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const discriptionRef = useRef();
    const history = useHistory();
    const redirect_uri = '/home';
    const handleAddPackage = e =>{
        const title = titleRef.current.value;
        const location = locationRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;
        const discription = discriptionRef.current.value;
        

        const newPackage = { title, location,price,image,discription}
        console.log(newPackage);

        fetch('http://localhost:5000/package',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newPackage)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added');
                e.target.reset();
                history.push(redirect_uri);
            }
        })
        e.preventDefault();
    }
    return (
        <>
        <Container className="mt-5 mb-5">
                <h1 className="text-center"> Add <span className="text-warning"> Package</span> </h1>
                <Form onSubmit={handleAddPackage} className="mt-5">
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Package Title:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={titleRef} type="text" placeholder="Add a package title" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Location:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={locationRef } type="text" placeholder="Add a package Location" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Package Price:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={priceRef} type="number" placeholder="Add a package price" required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Package Image:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={imageRef} type="link" placeholder="Add a image url" required />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Package Discription:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" ref={discriptionRef} rows={3} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="warning" type="submit">Submit</Button>
                        </Col>
                    </Form.Group>


                </Form>
        </Container>
            
        </>
    );
};

export default AddPackage;