import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const HeaderBar = () => {
    return (
        <Navbar className="py-3" bg="light">
            <Container className="mx-5 mw-100">
                <Navbar.Brand className="fs-2 fw-bold" href="#home">DocksAway</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="fs-5">
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderBar;