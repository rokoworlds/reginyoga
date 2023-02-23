import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faVk, faInstagram } from "@fortawesome/free-brands-svg-icons"


function Navigation() {

    window.onscroll = function() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
            document.getElementById('navbar').classList.add('scrolled')
        } else {
            document.getElementById('navbar').classList.remove('scrolled')
        }
    } 

    return (

        <Navbar collapseOnSelect id="navbar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="logo-text">Regin<span>Yoga</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-between">
                    <Nav className="mx-auto main-nav" id='main-nav'>
                        <Nav.Link href="#home" className="">Главная</Nav.Link>
                        <Nav.Link href="#services" >Услуги</Nav.Link>
                        <Nav.Link href="#contacts">Контакты</Nav.Link>
                    </Nav>

                    <Nav className="flex-row" > 
                        <Nav.Link href="https://www.instagram.com/regina.koropat/" target="_blank" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                        <Nav.Link href="https://t.me/ReginYoga" target="_blank" className="social-icon"><FontAwesomeIcon icon={faTelegram} /></Nav.Link>
                        <Nav.Link href="https://vk.com/yoganavdnh" target="_blank" className="social-icon"><FontAwesomeIcon icon={faVk} /></Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Navigation
