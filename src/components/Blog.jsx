import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Col, Button, Row, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import blog1 from '../assets/blog-1.jpg'
import blog3 from '../assets/blog-3.jpg'
import blog2 from '../assets/blog-2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Blog() {
    AOS.init({duration: 800})
    return (
        <section className="section-padding section-connector">
        <Container>
        <Row>
                <Col data-aos="fade-up">
                <div className="section-title text-center">
                    <h1>Blog</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="line"></div>
                </div>
                </Col>
        </Row>
        <Row className="gy-5">
            <Col md={4} data-aos="fade-up">
                <div className="bp">
                    <img src={blog3} alt="" />
                    <div className="bp-content pt-4">
                        <h4>Daily meditation </h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, aperiam. </p>
                        <a href="#" className="custom-link"> 
                        <span>Read more</span>
                        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                         </a> 

                    </div>
                </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
                <div className="bp">
                    <img src={blog1} alt="" />
                    <div className="bp-content pt-4">
                        <h4>Magic ten!</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, aperiam. </p>
                        <a href="#" className="custom-link"> 
                        <span>Read more</span>
                        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                         </a> 

                    </div>
                </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
                <div className="bp">
                    <img src={blog2} alt="" />
                    <div className="bp-content pt-4">
                        <h4>Try this breathe techniques!</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, aperiam. </p>
                        <a href="#" className="custom-link"> 
                        <span>Read more</span>
                        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                         </a> 

                    </div>
                </div>
            </Col>
        </Row>




        </Container>

    </section>
    )
}

export default Blog