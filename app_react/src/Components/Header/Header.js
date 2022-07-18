import React, { Component } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Activity from '../../Pages/Activity/Activity'
import Map from '../../Pages/Map/Map'
import Time from '../../Pages/Time/Time'

import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar bg="light" variant="light" className='frame_34'>
                        <Container>
                            <Nav>
                                <Nav.Link as={Link} to='/'
                                    className='frame_9'>Activity</Nav.Link>
                                <Nav.Link as={Link} to='/map'
                                    className='frame_12'>Map</Nav.Link>
                                <Nav.Link as={Link} to='/time'
                                    className='frame_13'>Time</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route exact path="/" element={<Activity />} />
                        <Route exact path="/map" element={<Map />} />
                        <Route exact path="/time" element={<Time />} />
                    </Routes>
                </Router>
            </>
        )
    }
}
