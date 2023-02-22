import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Button, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faVk, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faUsers, faArrowRight, faLeaf, faLaptop, faPerson, faUser } from "@fortawesome/free-solid-svg-icons"
import AOS from 'aos';
import 'aos/dist/aos.css';

import PersonalTr from "./services/PersonalTr"
import Meditation from "./services/Meditation"
import OnlineTr from "./services/OnlineTr"
import GroupTr from "./services/GroupTr"

function Services() {
    AOS.init({duration: 800})

    return (
        <section className="section-padding section-connector">
            <Container >
                <Row>
                    <Col data-aos="fade-up">
                    <div className="section-title text-center">
                        <h1 id='services'>Услуги</h1>
                        <p>«Йога для меня – про усмирение колебаний ума. Она к лучшему изменила качество моей жизни.
                             Преподаю, так как хочу показать другим, как это может сделать каждый».</p>
                        <div className="line"></div>
                    </div>
                    </Col>
                </Row>

                <Row className="gy-4 text-center">

                    <Col lg={3} sm={6} data-aos="fade-up">
                    <div className="service py-5 py-4 border">
                        <div className="service-icon gb-5">
                        <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <h5 className="mt-3">Групповые <br/> тренировки</h5>
                        <p>Групповые занятия в йога студиях и корпоративная йога.
                            </p>

                        <GroupTr />

                    </div>
                    </Col>

                    <Col lg={3} sm={6} data-aos="fade-up" data-aos-delay="100">
                    <div className="service py-5 py-4 border">
                        <div className="service-icon gb-5">
                        <FontAwesomeIcon icon={faUser} />
                        </div>
                        <h5 className="mt-3">Персональные тренировки</h5>
                        <p>Индивидуальные занятия в удобном месте в удобное время!</p>
                        <PersonalTr />
 
                    </div>
                    </Col>

                    <Col lg={3} sm={6} data-aos="fade-up" data-aos-delay="200">
                    <div className="service py-5 py-4 border">
                        <div className="service-icon gb-5">
                        <FontAwesomeIcon icon={faLeaf} />
                        </div>
                        <h5 className="mt-3"><br/>Медитация</h5>
                        
                        <p>Техника самосозерцания и работы с дыханием и сознанием</p>
                        <Meditation />

                    </div>
                    </Col>

                    <Col lg={3} sm={6} data-aos="fade-up" data-aos-delay="300">
                    <div className="service py-5 py-4 border">
                        <div className="service-icon gb-5">
                        <FontAwesomeIcon icon={faLaptop} />
                        </div>
                        <h5 className="mt-3">Онлаин тренировки</h5>
                        <p>Из любой точки Земли, не выходя из дома. Главное чтобы были коврик и желание.</p>
                        <OnlineTr />
                    </div>
                    </Col>

                </Row>

            </Container>
        </section>
    )
}

export default Services