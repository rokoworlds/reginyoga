import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Courses() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-courses btn-courses-width" onClick={handleShow}>
        Подробнее
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Семинары, мастер-классы и конференции</Modal.Title>
        </Modal.Header>
        <Modal.Body className='service--card'>
            <p>2022</p>
            <ul>
              <li>Онлайн-курс Основы ЗОЖ: Стрессоустойчивость, К.Шатская  – март-май 2022</li>
              <li>Семинар «Нейродинамика и йога: простые техники для регуляции боли» с Tiffany Cruikshank – 16 февраля 2022</li>
            </ul>

            <p>2021</p>
            <ul>
              <li>Семинары и МК в рамках Jivamukti Yoga Week в йога-студии «Материал» – ноябрь 2021</li>
              <li>17ая Международная Конференция Yoga Journal – 21 ноября 2021</li>
              <li>Семинар Yoga Balance Day 2021 Т. Маркеловой и М. Швецова – 13 ноября 2021</li>
              <li>Семинар «Миафасциальный релиз» с Tiffany Cruikshank – 25 августа 2021</li>
              <li>16ая Международная Конференция Yoga Journal – 5-6 июня 2021</li>
              <li>Семинар по техникам самомассажа «Сад 1», А.Титов – 22-23 мая </li>
              <li>Мастер-класс по Inside Flow – 16 марта 2021</li>
              <li>Онлайн-курс «Мышцы в йоге», К.Шатская и П.Родионов – 14 февраля 2021</li>
            </ul>

            <p>2020</p>

            <ul>
              <li>Онлайн-конференция ‘Future of Wellness’ – 13-14 ноября 2020</li>
              <li>Международная онлайн йога конференция – 8-11 октября 2020</li>
              <li>Семинар «Построение тренировочных последовательностей» Д.Демина и Г.Мазаева – 3-4 октября 2020</li>
              <li>Онлайн-курс «Травмобезопасность в асанах», К.Шатская и П.Родионов - июнь-июль 2020</li>
              <li>Мастер-класс по балансам на руках, А.Янковский – 29 июня 2021</li>
              <li>Онлайн-курс «Yoga and Mindfulness 101» от Yoga Medicine – май 2020</li>
              <li>Семинар «Биомеханика асан в йоге» А. Зенченко – 7-8 марта 2020</li>
              <li>Семинар «Культура движения, геометрия асан» И. Пантюшева – 2020</li>
              <li>Участник международной онлайн йога конференции (при поддержке JNCC) – 2020</li>
            </ul>

            <p>2019</p>

            <ul>
              <li>Семинар «Умная подготовка к нижним балансам и инверсиям» Е.Токц – октябрь 2019</li>
              <li>15ая Международная Конференция Yoga Journal – 16-17 ноября 2021</li>
              <li>Семинар «Практика асан на коврике и за его пределами» Суриндера Сингха –июль/август 2019</li>
              <li>5ый Международный день йоги –  2019</li>
              <li>Семинар по функциональной гибкости, М.Цугуй – 24 апреля 2019</li>
            </ul>


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

export default Courses