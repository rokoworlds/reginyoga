import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GroupTr() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-brand" onClick={handleShow}>
        Подробнее
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Груповые тренировки</Modal.Title>
        </Modal.Header>
        <Modal.Body className='service--card'>
            <p>Груповые тренировки проводятся в Йога студиях по расписанию. </p>
            <p>Расписание занятий:</p>
            <p>ДЖИВАМУКТИ ЙОГА: SPIRITUAL WARRIOR</p>
            <ul>
                <li>ПН: 8:30 - 9:45 <a href="https://www.holiyoga.ru/timetable" target="_blank" className='custom-link'>Студия HOLI Yoga</a> </li>
                <li>СБ: 10:15 - 11:30 <a href="http://nym-yoga.com/practice/" target="_blank" className='custom-link'>Студия NYM Yoga</a> </li>
                <li>СБ: 13:00 - 14:15 <a href="https://www.holiyoga.ru/timetable" target="_blank" className='custom-link'>Студия HOLI Yoga</a> </li>
            </ul>
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