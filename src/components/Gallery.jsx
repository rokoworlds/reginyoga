import React from "react"
import Fancybox from "./Fancybox"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Button, Row, Image } from 'react-bootstrap'
import gal1 from '../assets/gal-1.jpg'
import gal2 from '../assets/gal-2.jpg'
import gal3 from '../assets/gal-3.jpg'
import gal4 from '../assets/gal-4.jpg'
import gal5 from '../assets/gal-5.jpg'
import gal6 from '../assets/gal-8.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Gallery() {
    AOS.init({duration: 800})
    return (
        <section className="section-padding section-connector" id="about">
            <Container fluid>
            <Row>
                    <Col data-aos="fade-up">
                    <div className="section-title text-center">
                        <h1>Обо мне</h1>
                        <p> На своём пути в мире йоги очень важно найти преподавателя с которым тебе будет комфортно работать, 
                            кому ты сможешь довериться во время практики и с кем будешь чувствовать себя уверенно и спокойно.
                            Возможно, именно для Вас таким преподавателем могу стать я. 
                        </p>
                            <p> Познакомимся поближе. </p>
                            <p> Я сертифицированный преподаватель хатха и дживамукти йоги. 
                            Член Международного альянса йоги (YAI). Преподаю йогу с 2019 года. 
                            На практиках уделяю особое внимание травмобезопасности и эффективности занятий.</p>
                        <div className="line"></div>
                    </div>
                        <Row className="g-2">
                            <Col lg={4} sm={6} data-aos="fade-up">
                                <div className="project">
                                    <img src={gal1} alt="" />
                                    <div className="content">
                                    <Fancybox options={{ infinite: false }} >
                                    <button data-src={gal1} data-fancybox="gallery" className="btn btn-outline-light">Посмотреть</button>
                                    </Fancybox>
                                    </div>

                                </div>
                            </Col>

                            <Col lg={4} sm={6} data-aos="fade-up" data-aos-delay="100">
                                <div className="project">
                                    <img src={gal2} alt="" />
                                    <div className="content">
                                    <Fancybox options={{ infinite: false }} >
                                    <button data-src={gal2} data-fancybox="gallery" className="btn btn-outline-light">Посмотреть</button>
                                    </Fancybox>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} sm={6} data-aos="fade-up" data-aos-delay="200">
                                <div className="project">
                                    <img src={gal3} alt="" />
                                    <div className="content">
                                    <Fancybox options={{ infinite: false }} >
                                    <button data-src={gal3} data-fancybox="gallery" className="btn btn-outline-light">Посмотреть</button>
                                    </Fancybox>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} sm={6} data-aos="fade-up" data-aos-delay="300">
                                <div className="project">
                                    <img src={gal4} alt="" />
                                    <div className="content">
                                    <Fancybox options={{ infinite: false }} >
                                    <button data-src={gal4} data-fancybox="gallery" className="btn btn-outline-light">Посмотреть</button>
                                    </Fancybox>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} sm={6} data-aos="fade-up" data-aos-delay="400">
                                <div className="project">
                                    <img src={gal5} alt="" />
                                    <div className="content">
                                    <Fancybox options={{ infinite: false }} >
                                    <button data-src={gal5} data-fancybox="gallery" className="btn btn-outline-light">Посмотреть</button>
                                    </Fancybox>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} sm={6} data-aos="fade-up" data-aos-delay="500">
                                <div className="project">
                                    <img src={gal6} alt="" />
                                    <div className="content">
                                    <Fancybox options={{ infinite: false }} >
                                    <button data-src={gal6} data-fancybox="gallery" className="btn btn-outline-light">Посмотреть</button>
                                    </Fancybox>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Col>
            </Row>



            </Container>

        </section>
    )
}

export default Gallery