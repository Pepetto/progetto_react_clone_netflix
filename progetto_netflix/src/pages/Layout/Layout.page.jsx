import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { Outlet, Link } from "react-router-dom";
import MyNavbar from "../../components/MyNavbar/MyNavbar.component";
import mynavbar from "../../components/MyNavbar/MyNavbar.component"

const Layout = () => {
  return (
    <>
      <MyNavbar/>
      <Outlet />
    </>
  );
};

export default Layout;
{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >
      <Link to="/">
              <img
                src="https://react-bootstrap.github.io/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}