import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Button, Row, Image, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faVk, faInstagram } from "@fortawesome/free-brands-svg-icons"
import devlogo from '../assets/dev-logo-2.png'


function Footer() {
    return (
    <footer>
        <div className="footer-top" id='contacts'>
            <Container>
                <Row className="gy-5">
                    <Col md={4}>
                        <h4><a href="#" className="text-white">Regin Yoga</a></h4>
                        <p>Остались вопросы, Вы хотите записаться на тренировку или Вам просто
                             интересен проект ReginYoga следите за нами в социальных сетях и 
                             вступайте в наши группы. </p>
                             <p>Ждём Вас!</p>
                            
                    </Col>

                    <Col className="ms-auto" md={3}>
                        <ul>
                            <li><a href="#services">Услуги</a></li>
                            <li><a href="#about">Обо мне</a></li>
                            <li><a href="#edu">Обучение и Курсы</a></li>
                            <li><a href="#partners">Партнеры</a></li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h4>Контакты</h4>
                        <ul>
                            <li>Email: regina.koropat@gmail.com</li>
                            <Nav className="flex-row footer--social-icon" > 
                                <Nav.Link href="https://www.instagram.com/regina.koropat/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                                <Nav.Link href="https://t.me/ReginYoga" target="_blank" ><FontAwesomeIcon icon={faTelegram} /></Nav.Link>
                                <Nav.Link href="https://vk.com/yoganavdnh" target="_blank"><FontAwesomeIcon icon={faVk} /></Nav.Link>
                            </Nav>

                        </ul>
                    </Col>

                </ Row>
            </Container>
        </div>
        <div className="footer-bottom">
            <Container>
                <Row className="justify-content-between">
                    <Col className="auto">
                        <p className="mb-0">© 2023 ROKO</p>
                    </Col>

                    <Col className="auto dev-logo">
                       <a href="https://rokoworlds.github.io/roko-portfolio/" target="_blank"><img src={devlogo} alt="" /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
    )
}

export default Footer