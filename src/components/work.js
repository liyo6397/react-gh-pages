import React from 'react';

import {Card, Col, Container, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import AboutCard from "./about";
import Research from "./research";

function Work(){
    return(
        <Container>
            <Row >
                <Col className='mt-5 h1 text-center'>
                    <h1>Work Experience</h1>
                </Col>
            </Row>
            <hr/>

            <article>
                <h4 className="h6 font-weight-bold">Software Engineer</h4>
                <h4 className="h6 font-weight-light">National Oceanic and Atmospheric Administration, April.2021-present</h4>

                <li> Developed the Backend modules for predicting magnetic value in C/C++.  </li>
                <li> Deploying the machine learning model to forecast disturbance-storm-time index in production level </li>
                <li> Developed the Java based Web API for sending the magnetic field value to user without needing the software installed.</li>
                <li> Developed the Java web application on Google App Engine and Google Compute Engine. </li>
            </article>
            <br/>
            <article>
                <h4 className="h6 font-weight-bold">Full Stack Developer</h4>
                <h4 className="h6 font-weight-light">Main StreetExchange, June.2016-June.2018</h4>

                <li> Implemented scripting tools and virtual server environments to troubleshoot real-time system issues. </li>
                <li>  Developed major functionality on the website's portal including third-party app integration and database management. </li>


            </article>
            <br/>
            <article>
                <h4 className="h6 font-weight-bold">Machine Learning Engineer</h4>
                <h4 className="h6 font-weight-light">TopicTechnology, Jan. 2016-May. 2016</h4>
                <li> Built software tools for extracting unstructured sentimental information from social media for training machine learning model.</li>

            </article>
            <br/>
            <article>
                <h4 className="h6 font-weight-bold">Software Engineer Intern</h4>
                <h4 className="h6 font-weight-light">Millennium Engineering & Integration, Summer 2014</h4>
                <li> Built the support vector machine(svm) application on time series prediction with C++.</li>
            </article>
            <br/>
            <br/>
        </Container>

    );

}
export default Work;