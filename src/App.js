import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import AboutCard from './components/about'
import Research from './components/research'
import Work from './components/work'
import CV from './components/cv'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    IndexRoute,
    HashRouter,
} from "react-router-dom";

import cv from "./CV.pdf";

function App() {
    return (
        <Container>
            <Router basename="/react-gh-pages">

                <Row className="justify-content-md-center">

                    <Col md={{span: 2.5}}>
                        <Navbar bg="light" expand="lg" className='mt-5'>

                        <Nav defaultActiveKey="/" className="flex-sm-column">
                            <LinkContainer to="/about">
                                <Nav.Link>Li-Yin Young</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/research">
                                <Nav.Link>Research</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/work">
                                <Nav.Link>Work Experience</Nav.Link>
                            </LinkContainer>

                            <Nav.Link href={cv} target="_blank">CV</Nav.Link>
                            <Nav.Link href="https://github.com/liyo6397" target="_blank">GitHub</Nav.Link>
                        </Nav>
                        </Navbar>
                    </Col>


                    <Col md={{span: 7}}>
                        <Switch>
                            <Route exact path="/" className="flex-sm-column">
                                <AboutCard className='mt-5'/>
                            </Route>

                            <Route exact path="/about">
                                <AboutCard className='mt-5'/>
                            </Route>
                            <Route exact path="/research">
                                <Research />
                            </Route>
                            <Route exact path="/work">
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
