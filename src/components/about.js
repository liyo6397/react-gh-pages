import React from 'react';

import {Card, Col, Container, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import personal from '../personal.jpeg';


function AboutCard() {
    return (
        <Card className="mt-5 border-0" border="none" class="border-0">
            <Card.Body >
                <Card.Header className='border-0'>
                    <Row>
                        <Col>
                            <Container>
                                <Row className="h2">
                                    Li-Yin Young
                                </Row>
                                <Row>
                                    lilyyoung1122@gmail.com
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <Image
                                className="float-right"
                                width={200}
                                height={180}
                                src={personal}/>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>

                <Card.Text>
                    My work sit in the intersection of Computer Science and Applied Mathematics.
                    A large portion of my previous and ongoing research deals with
                    the Deep Learning Framework, modeling, and simulation of brownian motion,
                    especially those that arise within the dynamical system
                    i.e. the stock market, advection-diffusion problems.
                    I also familiar with high performance computing like MPI and OpenMP.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;