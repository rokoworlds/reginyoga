import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Meditation() {
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
          <Modal.Title>Медитация</Modal.Title>
        </Modal.Header>
        <Modal.Body className='service--card'>
          <p>
          Медитации проводятся в онлайн формате. 
          Как правило это практики тематического характера. 
          Например медитации с визуализацией места силы или медитации "Сканирование тела".  
          </p>
          <p>Следите за информацией о проведении медитационных сессий в моем <a href="https://t.me/ReginYogaChat" target="_blank" className='custom-link'>телеграм канале</a> и присоединяйтесь чтобы вместе помедитировать под моим руководиством. </p>    

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

export default Meditation