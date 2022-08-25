/* This example requires Tailwind CSS v2.0+ */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>MiniApp</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Container>
                <a className="text-secondary fs-6" style={{ textDecoration: "none" }}>Estudiantes</a>
              </Container>
            </Link>
            <Link to="/create" style={{ textDecoration: "none" }}>
              <Container>
                <a className="text-secondary fs-6" style={{ textDecoration: "none" }}>Nuevo estudiante</a>
              </Container>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
