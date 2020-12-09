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
                <h2 className="h5 font-weight-bold">Full Stack Developer</h2>
                <h3 className="h7 font-weight-light">Main StreetExchange, June.2016-June.2018</h3>

                <li> Maintained 5 onsite databases and increased its admin effectiveness by 20%. </li>
                <li> Integrated database functionality into websites for automating document and capitalization</li>
                <li className=" font-weight-bold"> tools: SQL, php, javascript</li>

            </article>
            <br/>
            <article>
                <h2 className="h5 font-weight-bold">Machine Learning Engineer</h2>
                <h3 className="h7 font-weight-light">TopicTechnology, Jan. 2016-May. 2016</h3>
                <li>  Built topic model to identify the market and competitive landscape with up to 95% fidelity. </li>
                <li>  Filtered and cleaned unstructured company and market information, improved the classification
                    accuracy 30%.  </li>
                <li className="font-weight-bold"> tools: python, nltk</li>
            </article>
            <br/>
            <article>
                <h2 className="h5 font-weight-bold">Machine Learning Engineer Intern</h2>
                <h3 className="h7 font-weight-light">Millennium Engineering & Integration, Summer 2014</h3>
                <li> Apply support vector machine(svm) on time series data to forecast customers’
                    daily purchasing temptations.</li>
                <li>Optimized the code and reduce the data retrieval time by 40%.</li>
                <li className="font-weight-bold">tools: c++</li>
            </article>
        </Container>

    );

}
export default Work;