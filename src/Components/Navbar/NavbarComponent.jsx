import { Nav, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function NavbarComponent() {
  return (
    <Navbar bg="light" variant="light" className="navbar">
      <Container>
        <Nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active_link' : 'inactive_link')}>
            <p className="activity_title">Activity</p>
          </NavLink>
          <NavLink to="/map" className={({ isActive }) => (isActive ? 'active_link' : 'inactive_link')}>
            <p className="map_title">Map</p>
          </NavLink>
          <NavLink to="/time" className={({ isActive }) => (isActive ? 'active_link' : 'inactive_link')}>
            <p className="time_title">Time</p>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
