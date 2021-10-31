import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages , setPackages] = useState([]);

    useEffect(()=>{
        fetch('https://shielded-scrubland-27688.herokuapp.com/package')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[])
    return (
        <Container className="mt-5 mb-5">
                <h1 className="text-center mt-5 mb-5 text-size-one ">
                Pac<span className="text-warning">kage</span>
                </h1>
                <Row xs={1} md={2} lg={4} className="g-4">

                    {
                    packages.map(allPackage => <Package
                        key={allPackage._id}
                        allPackage={allPackage}
                    ></Package>)
                    }

                </Row>
            </Container>
    );
};

export default Packages;