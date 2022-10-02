import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

export default function Navigation() {
  return (


    <Navbar className="nav">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="site-title">
            Forus-lounas
          </Link>
        </Navbar.Brand>
        <Link className="nav-link" to="/">Arvonta</Link>
        <Link className="nav-link" to="/map">Selaa kartalla</Link>
        <Link className="nav-link" to="/about">Info</Link>
      </Container>
    </Navbar>
  )
}