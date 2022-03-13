import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className='header-container'>
            <Navbar bg="info" expand="lg" variant="dark">
                <Container className='text-white'>
                    <Navbar.Brand>
                        <Link to='/'>
                            Users App
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="m-auto">
                            <Form className="d-flex m-auto" >
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </Nav>

                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/user">
                                <Link to='/user'>
                                    Users
                                </Link>

                            </Nav.Link>

                            <Nav.Link>
                                Logout
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header