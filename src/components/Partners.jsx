import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Row } from 'react-bootstrap'

import client1 from '../assets/logo-client-7.png'
import client2 from '../assets/logo-client-4.png'
import client3 from '../assets/logo-client-5.png'
import client4 from '../assets/logo-client-8.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Partners() {
    AOS.init({duration: 800})
    return (
        <section data-aos="fade-up" className="section-padding section-connector" id="partners">
            <Container>
                <Row>
                    <Col data-aos="fade-up">
                    <div className="section-title text-center">
                        <h1>Партнеры</h1>
                        <p>Говорят, о людях можно много сказать по их друзьм. 
                            Именно поэтому я рада что мне давелось работать с
                             такими чудесными людьми, опытными педагогами и слаженными командами.</p>
                        <div className="line"></div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} sm={6} data-aos="fade-up">
                            <img src={client3} alt="" />
                        
                    </Col>
                    <Col lg={3} sm={6} data-aos="fade-up" data-aos-delay="100">
                            <img src={client1} alt="" />

                    </Col>
                    <Col lg={3} sm={6} data-aos="fade-up" data-aos-delay="200">
                            <img src={client2} alt="" />
                    </Col>
                    <Col lg={3} sm={6} data-aos="fade-up" data-aos-delay="300">
                            <img src={client4} alt="" />

                    </Col>

                </Row>

            </Container>
        </section>
    )
}

export default Partners