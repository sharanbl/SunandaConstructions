import react, { Component } from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
                <Navbar bg="light" >
                    <Navbar.Brand href="#home">Sunanda Constructions</Navbar.Brand>
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Nav className="ml-auto">
                             <Nav.Link href="#home">Home</Nav.Link>
                             <Nav.Link href="#link">About Us</Nav.Link>
                             <Nav.Link href="#link">Services</Nav.Link>
                             <Nav.Link href="#link">Contact</Nav.Link>
                             <Nav.Link href="#link">Projects</Nav.Link>
                             <Nav.Link href="#link">Meet The Team</Nav.Link>
                        </Nav>
                    {/* </Navbar.Collapse> */}
                </Navbar>
        );
    }

}

export default Header;