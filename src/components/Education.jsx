import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Button, Row, Image } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Courses from "./services/Courses";

function Education() {
    AOS.init({duration: 800})
    return (
        <section className="section-padding section-connector" id="edu">
        <Container>
        <Row>
                <Col data-aos="fade-up">
                <div className="section-title text-center">
                    <h1>Обучение и Курсы</h1>
                    <p>
                    Йога это движение, развитие и познание себя. 
                    И чтобы не остановливаться в этом движении, я всегда продолжаю учиться. Поэтому регулярно посещаю семинары и тренинги повышения квалификации российских и
                    зарубежных мастеров (Р.Гамментхаллер, Суриндер Сингх, А.Лунегова и др.).
                    </p>
                    <Courses />
                    <br/>
                    <p>Тут можно подробнее узнать о моем обучении</p>
                    <div className="line"></div>
                </div>
                </Col>
        </Row>
        <Row className="gy-5">
            <Col md={6}>
                <Row>
                    <Row data-aos="fade-up">
                    <div className="eduexp pt-0 p-5">
                        <h5>Хатха-Йога (YTTC 200) — Федерация Йоги России, Москва</h5>
                        <small> 2019 </small>
                        <p> Курсы преподавателей Хатха йоги </p>
                    </div>
                    </Row>
                    <Row data-aos="fade-up" data-aos-delay="100">
                    <div className="eduexp pt-0 p-5">
                        <h5>Инструктор йоги (YTTC 200) — Organic People, Москва</h5>
                        <small> 2020-2021 </small>
                        <p> Курсы преподавателей Хатха йоги </p>
                    </div>
                    </Row>
                    <Row data-aos="fade-up" data-aos-delay="200">
                    <div className="eduexp pt-0 pb-0 p-5">
                        <h5>Jivamukti Spiritual Warrior Teacher Training (JTTC 75), Barcelona</h5>
                        <small> 2021</small>
                        <p> Курсы преподавателей Дживамукти йоги </p>
                    </div>
                    </Row>
                </Row>
            </Col>
            <Col md={6}>
                <Row>
                    <Row data-aos="fade-up" >
                    <div className="eduexp pt-0 p-5">
                        <h5>"Отстройки и правки асан", Центр Йоги "Прана" </h5>
                        <small> 2021 </small>
                        <p> Курсы повышения квалификации </p>
                    </div>
                    </Row>
                    <Row data-aos="fade-up" data-aos-delay="100">
                    <div className="eduexp pt-0 p-5">
                        <h5>Онлайн-курс «Мышцы в йоге», К.Шатская и П.Родионов </h5>
                        <small> 2021 </small>
                        <p> Курсы повышения квалификации </p>
                    </div>
                    </Row>
                    <Row data-aos="fade-up" data-aos-delay="200">
                    <div className="eduexp pt-0  pb-0 p-5">
                        <h5>Семинар «Нейродинамика и йога: простые техники для регуляции боли» с Tiffany Cruikshank</h5>
                        <small> 2022 </small>
                        <p> Курсы повышения квалификации </p>
                    </div>
                    </Row>
                </Row>
            </Col>
        </Row>
        


        </Container>

    </section>
    )
}

export default Education