import React from 'react';
import { Button , Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        Travel Architect
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {user?.email ?
                            <Nav.Link as={Link} to="/addPackage">Add Package</Nav.Link>:
                            ''
                        }
                        {user?.email ?
                            <Nav.Link as={Link} to="/allOrder">All Order</Nav.Link>:
                            ''
                        }
                        {user?.email ?
                            <Nav.Link as={Link} to="/userOrder">User Order</Nav.Link>:
                            ''
                        }
                        <Navbar.Text>
                            <h1>{user?.displayName}</h1>
                        </Navbar.Text>
                        {user?.email ?
                            <Button onClick={logOut} variant="dark">LogOut </Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;