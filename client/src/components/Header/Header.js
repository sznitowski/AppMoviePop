import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className='header-container'>
            <Navbar expand="lg" variant="dark">
                <Container className='text-white'>
                    <Nav.Link>
                        <Link to='/'>
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/posts'>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Link>
                    </Nav.Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <NavDropdown title="" id="nav-dropdown">

                            <Nav.Link href="/users">
                                <i class="fa fa-users" aria-hidden="true"></i>


                            </Nav.Link>
                            <Nav.Link onClick={() => {
                                localStorage.removeItem('userInfo');
                                navigate("/")
                            }}>
                                <i class="fa fa-sign-out" aria-hidden="true"></i>


                            </Nav.Link>

                        </NavDropdown>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header