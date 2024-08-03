import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from '../assets/Logo.jpg'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="custom-navbar fixed-top">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src={image}
                            width="200"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='ms-4 link'>Solutions</Nav.Link>
                            <Nav.Link href="#link" className='ms-4 link'>Products</Nav.Link>
                            <Nav.Link href="#home" className='ms-4 link'>Industries</Nav.Link>
                            <Nav.Link href="#link" className='ms-4 link'>AI</Nav.Link>
                            <Nav.Link href="#home" className='ms-4 link'>Pricing</Nav.Link>
                            <Nav.Link href="#link" className='ms-4 link'>Resources</Nav.Link>
                        </Nav>


                        <ButtonGroup className='custom-buttongroup mx-3'>
                            <DropdownButton as={ButtonGroup} title="Try Meet for work " id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">For small business</Dropdown.Item>
                                <Dropdown.Item eventKey="2">For enterprise</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>

                        <div>
                            <button className='btn btn-primary custom-button me-2'>Sign in</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header