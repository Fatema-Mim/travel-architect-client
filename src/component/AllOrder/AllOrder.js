import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const AllOrder = () => {
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        fetch('https://shielded-scrubland-27688.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    const handleDeletOrder = id => {
        const proceed = window.confirm('Are you sure');
        if(proceed){
            const url = `https://shielded-scrubland-27688.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfullly ');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    }
    return (
        <Container className="mt-5 mb-5">
            <h1 className="text-center mb-5"> All <span className="text-warning"> Orders</span> </h1>

            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Package Title</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map(order => <tr>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.title}</td>
                            <td>{order.price}</td>
                            <td>
                                <Button variant="success">Pending</Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleDeletOrder(order._id)}>Delete</Button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default AllOrder;