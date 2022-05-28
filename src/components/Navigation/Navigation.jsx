import { display } from "@mui/system";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";

export const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 120,
        marginLeft: 100,
        marginRight: 200,
      }}
    >
      <Navbar>
        <Container style={{ fontSize: 60 }}>
          <Navbar.Brand href="#home">TWEAK PEAK</Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
