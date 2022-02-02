import React, {Component, PureComponent} from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import PDFViewer from 'pdf-viewer-reactjs'
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button'

import cv from '../CV.pdf'

class CV extends Component {

    render() {

        return (
            <div className = "App">
                <a href = {cv} >Download Pdf</a>

            </div>
        );
    }
}

export default CV;