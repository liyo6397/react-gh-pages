import React from 'react';
import './App.css';

import {Col, Container, Row} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Document, Page } from 'react-pdf';

import AboutCard from './components/about'
import Research from './components/research'
import Work from './components/work'
import CV from './components/cv'



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import cv from "./CV.pdf";

function App() {
    return (
        <Container>
            <Router>
                <Row className="justify-content-md-center">

                    <Col md={{span: 2.5}}>
                        <Navbar bg="light" expand="lg" className='mt-5'>

                        <Nav defaultActiveKey="/" className="flex-sm-column">
                            <Nav.Link href="/about">Li-Yin Young</Nav.Link>
                            <Nav.Link href="/research">Research</Nav.Link>
                            <Nav.Link href="/work">Work Experience</Nav.Link>
                            <Nav.Link href={cv} target="_blank">CV</Nav.Link>
                            <Nav.Link href="https://github.com/liyo6397" target="_blank">GitHub</Nav.Link>
                        </Nav>
                        </Navbar>
                    </Col>

                    <Col md={{span: 7}}>
                        <Switch>
                            <Route exact activeClassName="active" path="/" >
                            <AboutCard className='mt-5'/>
                            </Route>
                            <Route path="/about">
                                <AboutCard className='mt-5'/>
                            </Route>
                            <Route path="/research">
                                <Research />
                            </Route>
                            <Route path="/work">
                                <Work />
                            </Route>
                        </Switch>
                    </Col>

                </Row>
            </Router>
        </Container>
    );
}

export default App;
