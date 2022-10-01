import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {

  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Forus-lounas</Navbar.Brand>
          <a src="/favicon.ico"></a>
          <Nav className="me-auto">
            <Nav.Link href="new-restaurant">Uusi lounaspaikka</Nav.Link>
            <Nav.Link href="map">Kartta</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;