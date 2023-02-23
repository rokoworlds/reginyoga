import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Button, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Quote() {
    AOS.init({duration: 800})

    return (
        <section className="section-padding">
            <Container >
                <Row>
                    <Col data-aos="fade-up">
                    <div className="section-title text-center">
                        <h5>«Йога для меня – про усмирение колебаний ума. Она к лучшему изменила качество моей жизни.
                             Преподаю, так как хочу показать другим, как это может сделать каждый».</h5>
                        <div className="line"></div>
                    </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Quote