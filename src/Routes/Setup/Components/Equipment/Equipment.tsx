import React, { useState } from 'react';
import './Equipment.css';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  StreamingEquipment,
  GamingPC,
  StreamPC,
  StreamRoom,
} from './SetupItems';
import Arrow from '../../../../Assets/arrow.svg';

const Equipment: React.FC<any> = () => {
  const [equipment, equipmentUpdater] = useState('visible');
  const [gaming, gamingUpdater] = useState('hidden');
  const [streaming, streamingUpdater] = useState('hidden');
  const [room, roomUpdater] = useState('hidden');

  const stateUpdater = (value: any) => {
    equipmentUpdater('hidden');
    gamingUpdater('hidden');
    streamingUpdater('hidden');
    roomUpdater('hidden');
    eval(value)('visible');
  };

  const heading = () => {
    if (equipment === 'visible') {
      return 'Equipment';
    } else if (gaming === 'visible') {
      return 'Gaming PC';
    } else if (streaming === 'visible') {
      return 'Streaming PC';
    } else if (room === 'visible') {
      return 'Stream Room';
    }
  };

  return (
    <>
      <div className='Equipment'>
        <div className='toggle-btns'>
          <button
            type='button'
            className={equipment === 'hidden' ? 'not-selected' : 'selected'}
            onClick={() => stateUpdater('equipmentUpdater')}
          >
            Equipment
          </button>
          <button
            type='button'
            className={gaming === 'hidden' ? 'not-selected' : 'selected'}
            onClick={() => stateUpdater('gamingUpdater')}
          >
            Gaming PC
          </button>
          <button
            type='button'
            className={streaming === 'hidden' ? 'not-selected' : 'selected'}
            onClick={() => stateUpdater('streamingUpdater')}
          >
            Streaming PC
          </button>
          <button
            type='button'
            className={room === 'hidden' ? 'not-selected' : 'selected'}
            onClick={() => stateUpdater('roomUpdater')}
          >
            Stream Room
          </button>
        </div>
        <ScrollAnimation animateIn='fadeIn' duration={2.5} delay={2}>
          <div className='Category'>
            <h3>{heading()}</h3>
          </div>
          <div
            className={`StreamEquipment ${equipment} ${
              equipment === 'visible' ? 'animate__animated animate__zoomIn' : ''
            }`}
          >
            <ul>
              {StreamingEquipment.map((item) => (
                <li>
                  <a href={item.link} target='blank_'>
                    <h6>{item.heading}</h6>
                    <p>{item.name}</p>
                    <img src={Arrow} alt='arrow svg' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`Gaming-PC ${gaming} ${
              gaming === 'visible' ? 'animate__animated animate__zoomIn' : ''
            }`}
          >
            <ul>
              {GamingPC.map((item) => (
                <li>
                  <a href={item.link} target='blank_'>
                    <h6>{item.heading}</h6>
                    <p>{item.name}</p>
                    <img src={Arrow} alt='arrow svg' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`Stream-PC ${streaming} ${
              streaming === 'visible' ? 'animate__animated animate__zoomIn' : ''
            }`}
          >
            <ul>
              {StreamPC.map((item) => (
                <li>
                  <a href={item.link} target='blank_'>
                    <h6>{item.heading}</h6>
                    <p>{item.name}</p>
                    <img src={Arrow} alt='arrow svg' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`Stream-Room ${room} ${
              room === 'visible' ? 'animate__animated animate__zoomIn' : ''
            }`}
          >
            <ul>
              {StreamRoom.map((item) => (
                <li>
                  <a href={item.link} target='blank_'>
                    <h6>{item.heading}</h6>
                    <p>{item.name}</p>
                    <img src={Arrow} alt='arrow svg' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Equipment;
