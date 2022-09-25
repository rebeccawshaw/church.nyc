import * as React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const GlobalNav = () => {
    return (
        <NavbarWrapper>
            <Navbar className='nav' bg="dark" expand="lg">
                <Navbar.Brand href="#home">CHURCH OF THE CITY NEW YORK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container>
                        <Nav className="me-auto nav-content">
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Beliefs</NavDropdown.Item>
                                <NavDropdown.Item href="#">Staff</NavDropdown.Item>
                                <NavDropdown.Item href="#">Contact</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Connect" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Services</NavDropdown.Item>
                                <NavDropdown.Item href="#">Prayer Room</NavDropdown.Item>
                                <NavDropdown.Item href="#">Community Groups</NavDropdown.Item>
                                <NavDropdown.Item href="#">Events</NavDropdown.Item>
                                <NavDropdown.Item href="#">Serving Teams</NavDropdown.Item>
                                <NavDropdown.Item href="#">Courses</NavDropdown.Item>
                                <NavDropdown.Item href="#">Care Team</NavDropdown.Item>
                                <NavDropdown.Item href="#">Connections</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Ministries" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Alpha</NavDropdown.Item>
                                <NavDropdown.Item href="#">Prayer</NavDropdown.Item>
                                <NavDropdown.Item href="#">Outreach</NavDropdown.Item>
                                <NavDropdown.Item href="#">Marriage</NavDropdown.Item>
                                <NavDropdown.Item href="#">Kids</NavDropdown.Item>
                                <NavDropdown.Item href="#">Youth</NavDropdown.Item>
                                <NavDropdown.Item href="#">Connections</NavDropdown.Item>
                                <NavDropdown.Item href="#">Worship</NavDropdown.Item>
                                <NavDropdown.Item href="#">Production</NavDropdown.Item>
                                <NavDropdown.Item href="#">Arts</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Resources" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Sermons</NavDropdown.Item>
                                <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="#">Bookstore</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Give</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </NavbarWrapper>
    )
}

export default GlobalNav

const NavbarWrapper = styled.div`

.nav-content {
    justify-content: flex-end;
}
`