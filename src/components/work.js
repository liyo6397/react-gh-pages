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
                <h2 className="h5">Web Developer</h2>
                <h3 className="h7">Main StreetExchange, June.2016-June.2018</h3>
                <p> Develop agile website for enterprise commerce applications to processing warehoused data.
                    I was responsible for maintaining the query performance and user interface design.</p>
            </article>
            <br/>
            <article>
                <h2 className="h5">Machine Learning Engineer</h2>
                <h3 className="h7">TopicTechnology, Jan. 2016-May. 2016</h3>
                <p> Building topic model to analyzes unstructured text about companies and products
                    in order to better understand the market and competitive landscape.</p>
            </article>
            <br/>
            <article>
                <h2 className="h5">Machine Learning Engineer Intern</h2>
                <h3 className="h7">Millennium Engineering & Integration, Summer 2014</h3>
                <p> Exploring the temptation of purchasing of customers by building the model combined
                    with support vector machine(svm) and autoregressive model to track user's preference.</p>
            </article>
        </Container>

    );

}
export default Work;