import React from 'react';

import {Card, Col, Container, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import personal from '../personal.jpeg';
import resume from'./docs/Resume.pdf'


function AboutCard() {
    return (
        <Card className="mt-5 border-0 m-md-6" border="none" class="border-0" >

            <Card.Body>
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
                                <Row>
                                    <Card.Link href = "https://www.linkedin.com/in/li-yin-lily-young-9a1b3581/">Linkedin</Card.Link>
                                </Row>
                                <Row>
                                    <Card.Link href={resume}>Resume</Card.Link>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                            <Image
                                className="float-md-none"
                                width={200}
                                height={260}
                                src={personal}/>
                            </Container>
                        </Col>
                    </Row>
                </Card.Header>
                {/*<Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>*/}

                <Card.Text>
                    I am primary backend developer for <a href="https://www.ngdc.noaa.gov/geomag/HDGM/index.html">High Definition Geomagnetic model</a>.
                    My work focus on developing backend modules in C++ and deploying the scientific models includes machine learning model in production level.
                    I also have the experience on developing Java based Web service on Google Cloud Platform.
                    I am proficient in C++, Java and Python.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;