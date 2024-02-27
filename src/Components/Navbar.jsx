import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  

  // const active={
  //   textDecoration: "none",
  // }

  const active={
    textDecoration: "none"
  }
    return ( 
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand >My events</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         
          <Nav.Link
           as={NavLink}
           to="/events"
           style={({ isActive }) => (!isActive ? active : undefined)}
           > events
            </Nav.Link> 
          
        </Nav>
        {/* style={(isActive)=>({color:isActive ?"red": "grey"})} */}
      </Navbar.Collapse>
    </Container>
  </Navbar> );
}

export default NavigationBar;