import { Nav, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavbarComponent() {
  return (
    <Navbar bg="light" variant="light" className="frame_34">
      <Container>
        <Nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active_link' : 'frame_9')}>
            <p className="activity">Activity</p>
          </NavLink>
          <NavLink to="/map" className={({ isActive }) => (isActive ? 'active_link' : 'frame_12')}>
            <p className="map">Map</p>
          </NavLink>
          <NavLink to="/time" className={({ isActive }) => (isActive ? 'active_link' : 'frame_13')}>
            <p className="time">Time</p>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
