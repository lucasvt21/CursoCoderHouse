import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand><Link to ="/">Barrera SA</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <CartWidget />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                            <Link to="/category/Monitor"><NavDropdown.Item>
                                Monitores
                            </NavDropdown.Item>
                            </Link>

                            <Link to="/category/Notebook"><NavDropdown.Item>
                                Notebook
                            </NavDropdown.Item>
                            </Link>
                            <Link to="/category/Perisfericos"><NavDropdown.Item>
                                Perisfericos
                            </NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="search"
                        />
                        <Button variant="primary">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavBar;