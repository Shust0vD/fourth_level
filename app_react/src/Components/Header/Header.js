import React, { Component } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Activity from '../../Pages/Activity/Activity'
import Map from '../../Pages/Map/Map'
import Time from '../../Pages/Time/Time'

import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar bg="light" variant="light" className='frame_34'>
                        <Container>
                            <Nav>
                                <NavLink to='/'
                                    className={({ isActive }) => (isActive ? "active_link" : "frame_9")}>
                                    <p className="activity">Activity</p>
                                </NavLink>
                                <NavLink to='/map'
                                    className={({ isActive }) => (isActive ? "active_link" : "frame_12")}>
                                    <p className="map">Map</p></NavLink>
                                <NavLink to='/time'
                                    className={({ isActive }) => (isActive ? "active_link" : "frame_13")}>
                                    <p className="time">Time</p></NavLink>
                            </Nav>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route exact path="/" element={<Activity />} />
                        <Route exact path="/map" element={<Map />} />
                        <Route exact path="/time" element={<Time />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}
