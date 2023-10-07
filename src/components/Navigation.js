import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import { Image } from 'react-bootstrap';

export default function Navigation() {
  return (

    <Navbar className="nav">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="site-title">
          <Image
              src={'/forus_kytkinkaavio.svg'}
              className='brand-logo'
              alt='Forus'
              height='35px'
              width='35px'
            />
          </Link>
        </Navbar.Brand>
        <Link className="nav-link" to="/">Arvonta</Link>
        <Link className="nav-link" to="/map">Selaa kartalla</Link>
        <Link className="nav-link" to="/about">Info</Link>
      </Container>
    </Navbar>
  )
}