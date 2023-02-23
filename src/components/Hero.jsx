import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Button } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    AOS.init({duration: 800})
    return (
        <section id="home" className="d-flex align-items-center min-vh-100">
            <Container md='6' >
                <Col >
                <h1 className="display-2 hero--title" data-aos="fade-up" > <span className="hero--second-text">Добро пожаловать! Меня зовут </span><br/><span className="hero--name">Регина Коропат</span> </h1>
                <h4 className="mt-4 mb-5 hero--subtitle" data-aos="fade-up" data-aos-delay="100">Инструктор йоги. Преподаватель медитации.</h4>
                

                </Col>
            </Container>
        </section>  
    )
}

export default Hero


