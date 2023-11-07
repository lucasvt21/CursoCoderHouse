import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartwidget/cartwidget';

function NavScrollExample() {
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Barrera SA</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <CartWidget />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Computadoras</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Notebooks
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Perisfericos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;