import React from 'react'
import logo from '../logo/Spotify_Logo.png';
import '../components/Sidebar.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavLink from 'react-bootstrap';


export default function Sidebar() {
  return (
    <div className="col-2" id='sidebar'>
            <Navbar className="fixed-left" >
                <div className="nav-container d-flex justify-content-between align-items-center flex-column mx-1">
                    <Navbar.Brand className="me-5" as={Link} to="/">
                        <img src={logo} alt="Spotify_Logo" width={131} height={40} className="m-0" />
                    </Navbar.Brand>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <Navbar className="navbar-nav" >
                            <ul className='ps-0'>
                                <li className='ps-3'>
                                    <Link className="nav-item nav-link" as={Link} to="/">
                                        <i className="fas fa-home fa-lg" /> Home </Link>
                                </li>
                                <li className='ps-3'>
                                    <Link className="nav-item nav-link" as={Link} to="/library">
                                        <i className="fas fa-book-open fa-lg" /> Your Library </Link>
                                </li>
                                <InputGroup className="input-group mt-3 px-3">
                                    <input type="text" className="form-control mb-2" id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                                    <div style={{ marginBottom: "4%" }}>
                                        <button className="btn btn-outline-secondary btn-sm h-100" type="button"> GO </button>
                                    </div>
                                </InputGroup>
                            </ul>
                        </Navbar>
                    </div>
                </div>
                <div className="nav-btn">
                    <button className="signup-btn" type="button">
                        Sign Up
                    </button>
                    <button className="login-btn" type="button">
                        Login
                    </button>
                    <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
                </div>
            </Navbar>
        </div>
  )
}
