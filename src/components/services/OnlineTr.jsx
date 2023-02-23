import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OnlineTr() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-courses" onClick={handleShow}>
        Подробнее
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Онлайн тренировки</Modal.Title>
        </Modal.Header>
        <Modal.Body className='service--card'>
          <p>
          Онлайн-занятия удобный способ придерживаться тренировочного 
          режима и наслаждаться йогой где бы Вы не находились.
          Индивидуально или в группах, или даже с членами вашей семьи на соседнем коврике. 
          </p>

          <p>Тренировки проходят в Zoom. Узнать условия проведения и записаться на тренировку можно в моем <a href="https://t.me/ReginYogaChat" target="_blank" className='custom-link'>телеграм канале</a>.</p>
          </Modal.Body>
        <Modal.Footer>
          <Button className="btn-brand" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OnlineTr