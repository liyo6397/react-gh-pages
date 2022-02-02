import React from 'react';

import {Card, Col, Container, Nav, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import AboutCard from "./about";
import ganBm from './docs/gan_bm.pdf'
import arhmm from './docs/arhmm.pdf'
import nnPde from './docs/nn_pde.pdf'

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

                <h3 className="h6">Li-Yin Young <a  href="https://www.semanticscholar.org/paper/The-Effect-of-Moderator-Bots-on-Abus
                ive-Language-Young/03a3aea97fd2013c4c8b8225f555d7f68aee36b8" >[Full Paper]</a></h3>
                <h2 className="h6">2018. Proceedings of the International Conference
                    on Pattern Recognition and Artificial Intelligence. ACM, New York, NY, USA.</h2>
            </article>
        </Row>
            <br/>
            <Row>
                <h2 className="h4 font-weight-bold">Projects</h2>
            </Row>
            <br/>
            <Row>
                <article>
                    <h4 className="h6 font-weight-bold">1. Generation of Financial Time Series by GANs</h4>

                    <h3 className="h6 font-weight-light">Co-Author: Dr. Yu-Jui Huang</h3>
                    <h2 className="h6 font-weight-light">2019-2020</h2>
                    <br/>
                    <li>Developed machine learning architecture by Tensorflow and Keras to approximating a realistic asset price for financial trading strategies.
                    The Root Mean Square Error(RMSE) of the model is 0.1%.</li>
                    <li>This work involved developing the architecture of generative adversarial networks (GANs) algorithm
                        and writing highly optimized programs for investigating multidimensional data.  </li>
                    <li> Released python open source library <a className="font-weight-bold" href="https://pypi.org/project/HighDim/" target="_blank"> HighDim</a> for
                        recognizing feature in multidimensional objects.
                        The computational time is 50% less than Monte Carlo method.  </li>
                    <li>  Implemented the unit test from data collection to machine learning algorithm to
                    achieve maximum coverage for data pipeline to infrastructure of neural network. </li>
                    <br/>
                    <a className="font-weight-bold" href="https://github.com/liyo6397/GAN-BM" > Code</a>
                    <br/>
                    <a className="font-weight-bold" href={ganBm} > Paper</a>



                </article>
            </Row>
            <br/>
            <Row>
                <article>
                    <h4 className="h6 font-weight-bold">2. Stock price prediction using Hidden Markov Models</h4>

                    <h3 className="h6 font-weight-light">Co-Author: Professor Yu-Jui Huang</h3>
                    <h2 className="h6 font-weight-light">2017-2019</h2>
                    <br/>
                    <li>  Transformed the machine learning model into Web app by utilizing React, Node.js and Flask. </li>
                    <li>Processed the signals emitted from daily trading data to detect hidden state for daily stock. </li>
                    <li>Built time series model with HMM and machine learning classifier to forecast stock price.
                        The RMSE of the future stock price is 0.3%.</li>
                    <li>Formulated daily stock price as Markov process under asymmetric Laplace distribution improve the accuracy of 30%</li>

                    <br/>
                    <a className="font-weight-bold" href="https://github.com/liyo6397/HMM_Stock" > Code</a>
                    <br/>
                    <a className="font-weight-bold" href={arhmm} > Paper</a>


                </article>
            </Row>
                <br/>
            <Row>
                <article>
                    <h4 className="h6 font-weight-bold">3. Detect the hidden pattern using machine learning</h4>

                    <h3 className="h6 font-weight-light">Co-Author: Professor. Xiaochuan Cai and Professor. Daniel Appelo</h3>
                    <h2 className="h6 font-weight-light">2018-2020</h2>
                    <br/>
                    <li>Extracted patterns' information on any kind of geometric surface by finding
                        the solutions of PDE using machine learning algorithm. </li>
                    <li> Built a data-efficient deep learning algorithm using only 10% of data to achieve 95% accuracy.</li>
                    <li> Distributed training across multiple nodes with MPI in Docker in Azure.
                        The total time successfully drop down 88% after that. </li>

                    <br/>
                    <a className="font-weight-bold" href="https://github.com/liyo6397/NN_PDE" > Code</a>
                    <br/>
                    <a className="font-weight-bold" href={nnPde} > Paper</a>


                </article>
            </Row>
            <br/>
            <br/>
            <br/>
        </Container>

    );
}

export default Research;
