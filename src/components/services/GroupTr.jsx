import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GroupTr() {
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
          <Modal.Title>Групповые тренировки</Modal.Title>
        </Modal.Header>
        <Modal.Body className='service--card'>
            <p>Групповые тренировки проводятся в Йога студиях по расписанию. </p>
            <p>Так же возможно проведение корпоративной йоги в удобном для Вас зале. Условия проведения и подробную информацию можно уточнить в <a href="https://t.me/ReginYogaChat" target="_blank" className='custom-link'>телеграм канале</a>.</p>

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

export default GroupTr