import { Navbar, Container } from "react-bootstrap";

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
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
          <Navbar.Brand>
            <Link className="btn btn-primary" to="/login">
              Accedi
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/landing">landing</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
