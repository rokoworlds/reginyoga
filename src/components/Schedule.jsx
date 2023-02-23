import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Button, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Schedule() {
    AOS.init({duration: 800})

    return (
        <section className="section-padding section-connector">
            <Container >
                <Row>
                    <Col data-aos="fade-up">
                    <div className="section-title text-center schedule">
                        <h1>Расписание</h1>

                            <h3 data-aos="fade-up" data-aos-delay="100">ДЖИВАМУКТИ ЙОГА: SPIRITUAL WARRIOR</h3>
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="200">ПН: 8:30 - 9:45 <a href="https://www.holiyoga.ru/timetable" target="_blank" className='custom-link'>Студия HOLI Yoga</a> </li>
                                <li data-aos="fade-up" data-aos-delay="300">СБ: 10:15 - 11:30 <a href="http://nym-yoga.com/practice/" target="_blank" className='custom-link'>Студия NYM Yoga</a> </li>
                                <li data-aos="fade-up" data-aos-delay="400">СБ: 13:00 - 14:15 <a href="https://www.holiyoga.ru/timetable" target="_blank" className='custom-link'>Студия HOLI Yoga</a> </li>
                            </ul>

                        <div className="line"></div>
                    </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Schedule