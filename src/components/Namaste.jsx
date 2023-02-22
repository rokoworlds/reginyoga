import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Services() {
    AOS.init({duration: 800})

    return (
        <section className="section-padding section-connector">
            <Container >
                <Row>
                    <Col data-aos="fade-up">
                    <div className="section-title text-center">
                        <h1 id='services'>Намасте</h1>
                        <p data-aos="fade-up" data-aos-delay="100">Была рада знакомству!</p>
                        <p data-aos="fade-up" data-aos-delay="200">Надеюсь мы еще с Вами встретимся</p>
                        <p data-aos="fade-up" data-aos-delay="300">Удачи на Вашем пути!</p>
                        <div className="line"></div>
                    </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Services