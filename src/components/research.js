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
            <h2 className="h4 font-weight-bold">Publication</h2>
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
                <h2 className="h4 font-weight-bold">Project</h2>
            </Row>
            <br/>
            <Row>
                <article>
                    <h4 className="h6 font-weight-bold">1. Using Wassersein GAN to approximate stochastic process</h4>

                    <h3 className="h7 font-weight-light">Co-Author: Dr. Yu-Jui Huang</h3>
                    <h3 className="h7 font-weight-light">2020</h3>
                    <br/>
                    <p>Develop probabilities to model and predict randomness in real-life phenomena. </p>
                    <li>Proposed the machine learning approach based on generative adversarial Networks(GANs) to
                        predict the patteren of stochastic process such as geometric brownian motion and
                        Ornstein-Uhlenbeck(OU) process. </li>
                    <li>Proposed the novel optimizing method for GAN to converge to an equilibriumin in minimax game.</li>

                </article>
            </Row>
            <br/>
            <Row>
                <article>
                    <h4 className="h6 font-weight-bold">2. Deep learning for partial differential equations</h4>

                    <h3 className="h7 font-weight-light">Co-Author: Dr. Xiaochuan Cai and Dr. Daniel Appelo</h3>
                    <h3 className="h7 font-weight-light">2018-2019</h3>
                    <br/>
                    <p className="h7">Devise an algorithm capable of achieving human proficiency in transforming
                        observed data into predictive mathematical models of the physical world. </p>
                    <li>Developed deep learning algorithm to leverage the  governing equations by
                        extracting patterns from high-dimensional data generated. </li>
                    <li>Applied deep learning approach to find the solutions of partial differential equation and
                        non-linear dynamics problems. </li>
                    <li>Design the loss function to force the optimized process converge in Sobolev space. </li>
                </article>
            </Row>
                <br/>
            <Row>
                <article>
                    <h4 className="h6 font-weight-bold">3. Analysis of Markov regime switching model to Stochastic Differential Equation</h4>

                    <h3 className="h7 font-weight-light">Co-Author: Dr. Yu-Jui Huang</h3>
                    <h3 className="h7 font-weight-light">2017-2019</h3>
                    <br/>
                    <p className="h7">Formulated daily observations of stock price as Autoregressive
                        hidden Markov model to predict stock price and regime switching.</p>
                    <li> Generalized the algorithm that allowing Stochastic differential equation (SDE) to adjust
                        parameters based on Markovian process in high dimensions. </li>
                    <li>Developed an EM algorithm for estimating parameters for  discrete-valued Markov process
                        under an asymmetric Laplace distribution</li>
                </article>
            </Row>
            <br/>
            <br/>
            <br/>
        </Container>

    );
}

export default Research;
