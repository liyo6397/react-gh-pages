import React from 'react';

import {Card, Col, Container, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import AboutCard from "./about";

function Research(){
    return(

        <Container>
        <Row className="mt-5 h1 text-center" >
            <Col >
                <h1 >Research</h1>
            </Col>
        </Row>

        <hr/>
        <Row>
            <h2 className="h4 font-weight-bold">Publication:</h2>
        </Row>
            <br/>
        <Row>
            <article>
                <h4 className="h6">The Effect of Moderator bots on Abusive Language Use</h4>
                <h3 className="h7">Li-Yin Young</h3>
                <h3 className="h7">2018. Proceedings of the International Conference
                    on Pattern Recognition and Artificial Intelligence. ACM, New York, NY, USA.</h3>
            </article>
        </Row>
            <br/>
            <Row>
                <h2 className="h4">Project:</h2>
            </Row>
            <br/>
            <Row>
                <article>
                    <h4 className="h6">1. Using Wassersein GAN to approximate stochastic process</h4>
                    <h3 className="h7">2020</h3>
                    <p className="h7">The project is worked with Dr. Yu-Jui Huang. We proposed
                        the method based on generative adversarial Networks(GANs)
                        to learn the stochastic process such as geometric brownian
                        motion and Ornstein-Uhlenbeck(OU) process.</p>
                </article>
            </Row>
            <br/>
            <Row>
                <article>
                    <h4 className="h6">2. Deep learning for partial differential equations</h4>
                    <h3 className="h7">2018-2019</h3>
                    <p className="h7">The project is worked with Dr. Xiaochuan Cai and Dr. Daniel Appelo
                        on designing generative adversarial nets (GAN) type deep neural network for approximating
                        advection and diffusion type PDEs. We presents the method that the curse of dimensionality
                        is lessened by establishing a connection with sparse grids.</p>
                </article>
            </Row>
                <br/>
            <Row>
                <article>
                    <h4 className="h6">3. Analysis of Markov regime switching model to Stochastic Differential Equation</h4>
                    <h3 className="h7">2017-2019</h3>
                    <p className="h7">The project is worked with Dr. Yu-Jui Huang. We generalize the algorithm
                        that allowing Stochastic differential equation (SDE) to adjust parameters
                        based on Markovian process in high dimensions. The goal of the project is to build
                        the continuous time regime switching model to estimate the data which belongs to
                        stochastic process.</p>
                </article>
            </Row>
            <br/>
            <Row>
                <article>
                    <h3 className="h6">4. Image recognition</h3>
                    <h3 className="h7">Joel Kralj Lab</h3>
                    <h3 className="h7">2015</h3>
                    <p className="h7">The goal is to find out whether cell will produce light as they touch each other.
                        Implemented image processing tool to track the number and size of punctus in time-lapse
                        movies of single human cells. After obtaining the result of tracking,
                        caculate the correlation coeficient between size of cell's pixel and light intensity.</p>
                </article>
            </Row>
        </Container>

    );
}

export default Research;
