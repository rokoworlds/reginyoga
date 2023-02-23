import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PersonalTr() {
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
          <Modal.Title>Персональные тренировки</Modal.Title>
        </Modal.Header>
        <Modal.Body className='service--card'>
          <p>Индивидуальные занятия позволяют разобрать мельчайшие аспекты Вашей практики и построить тренировку основываясь на том что нужно именно Вам!</p>
          <p>Тренировки проводяться по направлениям Хатха Йога и Дживамукти Йога: SPIRITUAL WARRIOR на русском или английском языке.</p>
          <p>Записаться на занятие или получить всю необходимую информацию можно в <a href="https://t.me/ReginYogaChat" target="_blank" className='custom-link'>телеграм канале</a>.</p>
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

export default PersonalTr