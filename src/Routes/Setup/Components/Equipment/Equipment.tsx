import React, { useState } from 'react';
import './Equipment.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  StreamingEquipment,
  GamingPC,
  StreamPC,
  StreamRoom,
} from './SetupItems';

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
    <div className='Equipment'>
      <div className='toggle-btns'>
        <button type='button' onClick={() => stateUpdater('equipmentUpdater')}>
          {equipment === 'hidden' ? (
            <i className='far fa-circle'></i>
          ) : (
            <i className='far fa-dot-circle'></i>
          )}
        </button>
        <button type='button' onClick={() => stateUpdater('gamingUpdater')}>
          {gaming === 'hidden' ? (
            <i className='far fa-circle'></i>
          ) : (
            <i className='far fa-dot-circle'></i>
          )}
        </button>
        <button type='button' onClick={() => stateUpdater('streamingUpdater')}>
          {streaming === 'hidden' ? (
            <i className='far fa-circle'></i>
          ) : (
            <i className='far fa-dot-circle'></i>
          )}
        </button>
        <button type='button' onClick={() => stateUpdater('roomUpdater')}>
          {room === 'hidden' ? (
            <i className='far fa-circle'></i>
          ) : (
            <i className='far fa-dot-circle'></i>
          )}
        </button>
      </div>
      <ScrollAnimation animateIn='fadeIn' duration={2.5} delay={2}>
        <div className='Heading'>
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
                <h6>{item.heading}</h6>
                <p>{item.name}</p>
                <a href={item.link} target='blank_'>
                  <svg width='24' height='24'>
                    <rect width='24' height='24' fill='none' rx='0' ry='0' />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M3.99762 9.80127H5.62762C5.95762 9.80127 6.22762 10.0713 6.22762 10.4013C6.22762 10.7313 5.95762 11.0013 5.62762 11.0013H3.99762C3.44762 11.0013 2.99762 11.4513 2.99762 12.0013C2.99762 12.5513 3.44762 13.0013 3.99762 13.0013H10.2076C10.5376 13.0013 10.8076 13.2713 10.8076 13.6013C10.8076 13.9313 10.5376 14.2013 10.2076 14.2013H3.99762C2.78762 14.2013 1.79762 13.2113 1.79762 12.0013C1.79762 10.7913 2.78762 9.80127 3.99762 9.80127Z'
                      fill='#ffffff'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M14.6776 14.2012H12.9075C12.5775 14.2012 12.3075 13.9312 12.3075 13.6012C12.3075 13.2712 12.5775 13.0012 12.9075 13.0012H16.0734C16.2448 12.9857 16.4232 13.0424 16.5576 13.1712C16.6362 13.2465 16.688 13.3379 16.714 13.4352C16.7293 13.488 16.7375 13.5437 16.7375 13.6012C16.7375 13.7948 16.6447 13.9677 16.5013 14.0776L13.2876 17.2912C12.8976 17.6812 12.8976 18.3112 13.2876 18.7012C13.6676 19.0812 14.3276 19.0812 14.7076 18.7012L20.7076 12.7012C20.7476 12.6612 20.7976 12.6112 20.8276 12.5412C20.8276 12.5312 20.8776 12.4512 20.8876 12.4412L20.9276 12.3412C20.9276 12.3362 20.9376 12.3037 20.9476 12.2712C20.9576 12.2387 20.9676 12.2062 20.9676 12.2012C21.0076 12.0712 21.0076 11.9312 20.9676 11.7812C20.9676 11.7762 20.9576 11.7462 20.9476 11.7162C20.9376 11.6862 20.9276 11.6562 20.9276 11.6512L20.8876 11.5512L20.8276 11.4412C20.8076 11.4079 20.7787 11.3745 20.7499 11.3412C20.7354 11.3245 20.721 11.3079 20.7076 11.2912L14.7076 5.29122C14.3176 4.90122 13.6776 4.90122 13.2876 5.29122C13.0976 5.48122 12.9976 5.73122 12.9976 6.00122C12.9976 6.27122 13.0976 6.52122 13.2876 6.71122L16.5576 9.97122C16.6865 10.1001 16.7462 10.2693 16.7367 10.4339C16.7195 10.7489 16.4566 11.0013 16.1375 11.0013H8.32754C7.99754 11.0013 7.72754 10.7313 7.72754 10.4013C7.72754 10.0713 7.99754 9.80127 8.32754 9.80127H14.6877L12.4376 7.55122C12.0176 7.13122 11.7976 6.58122 11.7976 5.99122C11.7976 5.40122 12.0276 4.85122 12.4376 4.43122C13.2676 3.60122 14.7176 3.60122 15.5476 4.43122L21.5476 10.4312C21.6476 10.5312 21.7376 10.6412 21.8276 10.7712C21.8462 10.7959 21.8609 10.8245 21.8812 10.8639C21.8938 10.8883 21.9085 10.9168 21.9276 10.9512C21.9676 11.0112 21.9976 11.0712 22.0276 11.1512C22.0498 11.2028 22.061 11.2436 22.0814 11.3176C22.0887 11.3439 22.0971 11.3745 22.1076 11.4112C22.1141 11.4242 22.1291 11.4751 22.1415 11.5174C22.1482 11.5403 22.1541 11.5607 22.1576 11.5712C22.2176 11.8612 22.2176 12.1412 22.1576 12.4312C22.1515 12.4683 22.1415 12.5016 22.1276 12.5475C22.1191 12.5759 22.1091 12.6092 22.0976 12.6512C22.0776 12.7212 22.0576 12.7812 22.0276 12.8412C21.9976 12.9112 21.9676 12.9712 21.9076 13.0812C21.9011 13.1009 21.873 13.1464 21.8516 13.181C21.8404 13.1992 21.8311 13.2143 21.8276 13.2212C21.7476 13.3412 21.6576 13.4512 21.5576 13.5512L15.5576 19.5512C15.1376 19.9712 14.5876 20.1912 14.0076 20.1912C13.4176 20.1912 12.8676 19.9612 12.4476 19.5512C12.0276 19.1312 11.8076 18.5812 11.8076 17.9912C11.8076 17.4012 12.0376 16.8512 12.4476 16.4312L14.6776 14.2012Z'
                      fill='#d79d00'
                    />
                  </svg>
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
                <h6>{item.heading}</h6>
                <p>{item.name}</p>
                <a href={item.link} target='blank_'>
                  <svg width='24' height='24'>
                    <rect width='24' height='24' fill='none' rx='0' ry='0' />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M3.99762 9.80127H5.62762C5.95762 9.80127 6.22762 10.0713 6.22762 10.4013C6.22762 10.7313 5.95762 11.0013 5.62762 11.0013H3.99762C3.44762 11.0013 2.99762 11.4513 2.99762 12.0013C2.99762 12.5513 3.44762 13.0013 3.99762 13.0013H10.2076C10.5376 13.0013 10.8076 13.2713 10.8076 13.6013C10.8076 13.9313 10.5376 14.2013 10.2076 14.2013H3.99762C2.78762 14.2013 1.79762 13.2113 1.79762 12.0013C1.79762 10.7913 2.78762 9.80127 3.99762 9.80127Z'
                      fill='#ffffff'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M14.6776 14.2012H12.9075C12.5775 14.2012 12.3075 13.9312 12.3075 13.6012C12.3075 13.2712 12.5775 13.0012 12.9075 13.0012H16.0734C16.2448 12.9857 16.4232 13.0424 16.5576 13.1712C16.6362 13.2465 16.688 13.3379 16.714 13.4352C16.7293 13.488 16.7375 13.5437 16.7375 13.6012C16.7375 13.7948 16.6447 13.9677 16.5013 14.0776L13.2876 17.2912C12.8976 17.6812 12.8976 18.3112 13.2876 18.7012C13.6676 19.0812 14.3276 19.0812 14.7076 18.7012L20.7076 12.7012C20.7476 12.6612 20.7976 12.6112 20.8276 12.5412C20.8276 12.5312 20.8776 12.4512 20.8876 12.4412L20.9276 12.3412C20.9276 12.3362 20.9376 12.3037 20.9476 12.2712C20.9576 12.2387 20.9676 12.2062 20.9676 12.2012C21.0076 12.0712 21.0076 11.9312 20.9676 11.7812C20.9676 11.7762 20.9576 11.7462 20.9476 11.7162C20.9376 11.6862 20.9276 11.6562 20.9276 11.6512L20.8876 11.5512L20.8276 11.4412C20.8076 11.4079 20.7787 11.3745 20.7499 11.3412C20.7354 11.3245 20.721 11.3079 20.7076 11.2912L14.7076 5.29122C14.3176 4.90122 13.6776 4.90122 13.2876 5.29122C13.0976 5.48122 12.9976 5.73122 12.9976 6.00122C12.9976 6.27122 13.0976 6.52122 13.2876 6.71122L16.5576 9.97122C16.6865 10.1001 16.7462 10.2693 16.7367 10.4339C16.7195 10.7489 16.4566 11.0013 16.1375 11.0013H8.32754C7.99754 11.0013 7.72754 10.7313 7.72754 10.4013C7.72754 10.0713 7.99754 9.80127 8.32754 9.80127H14.6877L12.4376 7.55122C12.0176 7.13122 11.7976 6.58122 11.7976 5.99122C11.7976 5.40122 12.0276 4.85122 12.4376 4.43122C13.2676 3.60122 14.7176 3.60122 15.5476 4.43122L21.5476 10.4312C21.6476 10.5312 21.7376 10.6412 21.8276 10.7712C21.8462 10.7959 21.8609 10.8245 21.8812 10.8639C21.8938 10.8883 21.9085 10.9168 21.9276 10.9512C21.9676 11.0112 21.9976 11.0712 22.0276 11.1512C22.0498 11.2028 22.061 11.2436 22.0814 11.3176C22.0887 11.3439 22.0971 11.3745 22.1076 11.4112C22.1141 11.4242 22.1291 11.4751 22.1415 11.5174C22.1482 11.5403 22.1541 11.5607 22.1576 11.5712C22.2176 11.8612 22.2176 12.1412 22.1576 12.4312C22.1515 12.4683 22.1415 12.5016 22.1276 12.5475C22.1191 12.5759 22.1091 12.6092 22.0976 12.6512C22.0776 12.7212 22.0576 12.7812 22.0276 12.8412C21.9976 12.9112 21.9676 12.9712 21.9076 13.0812C21.9011 13.1009 21.873 13.1464 21.8516 13.181C21.8404 13.1992 21.8311 13.2143 21.8276 13.2212C21.7476 13.3412 21.6576 13.4512 21.5576 13.5512L15.5576 19.5512C15.1376 19.9712 14.5876 20.1912 14.0076 20.1912C13.4176 20.1912 12.8676 19.9612 12.4476 19.5512C12.0276 19.1312 11.8076 18.5812 11.8076 17.9912C11.8076 17.4012 12.0376 16.8512 12.4476 16.4312L14.6776 14.2012Z'
                      fill='#d79d00'
                    />
                  </svg>
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
                <h6>{item.heading}</h6>
                <p>{item.name}</p>
                <a href={item.link} target='blank_'>
                  <svg width='24' height='24'>
                    <rect width='24' height='24' fill='none' rx='0' ry='0' />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M3.99762 9.80127H5.62762C5.95762 9.80127 6.22762 10.0713 6.22762 10.4013C6.22762 10.7313 5.95762 11.0013 5.62762 11.0013H3.99762C3.44762 11.0013 2.99762 11.4513 2.99762 12.0013C2.99762 12.5513 3.44762 13.0013 3.99762 13.0013H10.2076C10.5376 13.0013 10.8076 13.2713 10.8076 13.6013C10.8076 13.9313 10.5376 14.2013 10.2076 14.2013H3.99762C2.78762 14.2013 1.79762 13.2113 1.79762 12.0013C1.79762 10.7913 2.78762 9.80127 3.99762 9.80127Z'
                      fill='#ffffff'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M14.6776 14.2012H12.9075C12.5775 14.2012 12.3075 13.9312 12.3075 13.6012C12.3075 13.2712 12.5775 13.0012 12.9075 13.0012H16.0734C16.2448 12.9857 16.4232 13.0424 16.5576 13.1712C16.6362 13.2465 16.688 13.3379 16.714 13.4352C16.7293 13.488 16.7375 13.5437 16.7375 13.6012C16.7375 13.7948 16.6447 13.9677 16.5013 14.0776L13.2876 17.2912C12.8976 17.6812 12.8976 18.3112 13.2876 18.7012C13.6676 19.0812 14.3276 19.0812 14.7076 18.7012L20.7076 12.7012C20.7476 12.6612 20.7976 12.6112 20.8276 12.5412C20.8276 12.5312 20.8776 12.4512 20.8876 12.4412L20.9276 12.3412C20.9276 12.3362 20.9376 12.3037 20.9476 12.2712C20.9576 12.2387 20.9676 12.2062 20.9676 12.2012C21.0076 12.0712 21.0076 11.9312 20.9676 11.7812C20.9676 11.7762 20.9576 11.7462 20.9476 11.7162C20.9376 11.6862 20.9276 11.6562 20.9276 11.6512L20.8876 11.5512L20.8276 11.4412C20.8076 11.4079 20.7787 11.3745 20.7499 11.3412C20.7354 11.3245 20.721 11.3079 20.7076 11.2912L14.7076 5.29122C14.3176 4.90122 13.6776 4.90122 13.2876 5.29122C13.0976 5.48122 12.9976 5.73122 12.9976 6.00122C12.9976 6.27122 13.0976 6.52122 13.2876 6.71122L16.5576 9.97122C16.6865 10.1001 16.7462 10.2693 16.7367 10.4339C16.7195 10.7489 16.4566 11.0013 16.1375 11.0013H8.32754C7.99754 11.0013 7.72754 10.7313 7.72754 10.4013C7.72754 10.0713 7.99754 9.80127 8.32754 9.80127H14.6877L12.4376 7.55122C12.0176 7.13122 11.7976 6.58122 11.7976 5.99122C11.7976 5.40122 12.0276 4.85122 12.4376 4.43122C13.2676 3.60122 14.7176 3.60122 15.5476 4.43122L21.5476 10.4312C21.6476 10.5312 21.7376 10.6412 21.8276 10.7712C21.8462 10.7959 21.8609 10.8245 21.8812 10.8639C21.8938 10.8883 21.9085 10.9168 21.9276 10.9512C21.9676 11.0112 21.9976 11.0712 22.0276 11.1512C22.0498 11.2028 22.061 11.2436 22.0814 11.3176C22.0887 11.3439 22.0971 11.3745 22.1076 11.4112C22.1141 11.4242 22.1291 11.4751 22.1415 11.5174C22.1482 11.5403 22.1541 11.5607 22.1576 11.5712C22.2176 11.8612 22.2176 12.1412 22.1576 12.4312C22.1515 12.4683 22.1415 12.5016 22.1276 12.5475C22.1191 12.5759 22.1091 12.6092 22.0976 12.6512C22.0776 12.7212 22.0576 12.7812 22.0276 12.8412C21.9976 12.9112 21.9676 12.9712 21.9076 13.0812C21.9011 13.1009 21.873 13.1464 21.8516 13.181C21.8404 13.1992 21.8311 13.2143 21.8276 13.2212C21.7476 13.3412 21.6576 13.4512 21.5576 13.5512L15.5576 19.5512C15.1376 19.9712 14.5876 20.1912 14.0076 20.1912C13.4176 20.1912 12.8676 19.9612 12.4476 19.5512C12.0276 19.1312 11.8076 18.5812 11.8076 17.9912C11.8076 17.4012 12.0376 16.8512 12.4476 16.4312L14.6776 14.2012Z'
                      fill='#d79d00'
                    />
                  </svg>
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
                <h6>{item.heading}:</h6>
                <p>{item.name}</p>
                <a href={item.link} target='blank_'>
                  <svg width='24' height='24'>
                    <rect width='24' height='24' fill='none' rx='0' ry='0' />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M3.99762 9.80127H5.62762C5.95762 9.80127 6.22762 10.0713 6.22762 10.4013C6.22762 10.7313 5.95762 11.0013 5.62762 11.0013H3.99762C3.44762 11.0013 2.99762 11.4513 2.99762 12.0013C2.99762 12.5513 3.44762 13.0013 3.99762 13.0013H10.2076C10.5376 13.0013 10.8076 13.2713 10.8076 13.6013C10.8076 13.9313 10.5376 14.2013 10.2076 14.2013H3.99762C2.78762 14.2013 1.79762 13.2113 1.79762 12.0013C1.79762 10.7913 2.78762 9.80127 3.99762 9.80127Z'
                      fill='#ffffff'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M14.6776 14.2012H12.9075C12.5775 14.2012 12.3075 13.9312 12.3075 13.6012C12.3075 13.2712 12.5775 13.0012 12.9075 13.0012H16.0734C16.2448 12.9857 16.4232 13.0424 16.5576 13.1712C16.6362 13.2465 16.688 13.3379 16.714 13.4352C16.7293 13.488 16.7375 13.5437 16.7375 13.6012C16.7375 13.7948 16.6447 13.9677 16.5013 14.0776L13.2876 17.2912C12.8976 17.6812 12.8976 18.3112 13.2876 18.7012C13.6676 19.0812 14.3276 19.0812 14.7076 18.7012L20.7076 12.7012C20.7476 12.6612 20.7976 12.6112 20.8276 12.5412C20.8276 12.5312 20.8776 12.4512 20.8876 12.4412L20.9276 12.3412C20.9276 12.3362 20.9376 12.3037 20.9476 12.2712C20.9576 12.2387 20.9676 12.2062 20.9676 12.2012C21.0076 12.0712 21.0076 11.9312 20.9676 11.7812C20.9676 11.7762 20.9576 11.7462 20.9476 11.7162C20.9376 11.6862 20.9276 11.6562 20.9276 11.6512L20.8876 11.5512L20.8276 11.4412C20.8076 11.4079 20.7787 11.3745 20.7499 11.3412C20.7354 11.3245 20.721 11.3079 20.7076 11.2912L14.7076 5.29122C14.3176 4.90122 13.6776 4.90122 13.2876 5.29122C13.0976 5.48122 12.9976 5.73122 12.9976 6.00122C12.9976 6.27122 13.0976 6.52122 13.2876 6.71122L16.5576 9.97122C16.6865 10.1001 16.7462 10.2693 16.7367 10.4339C16.7195 10.7489 16.4566 11.0013 16.1375 11.0013H8.32754C7.99754 11.0013 7.72754 10.7313 7.72754 10.4013C7.72754 10.0713 7.99754 9.80127 8.32754 9.80127H14.6877L12.4376 7.55122C12.0176 7.13122 11.7976 6.58122 11.7976 5.99122C11.7976 5.40122 12.0276 4.85122 12.4376 4.43122C13.2676 3.60122 14.7176 3.60122 15.5476 4.43122L21.5476 10.4312C21.6476 10.5312 21.7376 10.6412 21.8276 10.7712C21.8462 10.7959 21.8609 10.8245 21.8812 10.8639C21.8938 10.8883 21.9085 10.9168 21.9276 10.9512C21.9676 11.0112 21.9976 11.0712 22.0276 11.1512C22.0498 11.2028 22.061 11.2436 22.0814 11.3176C22.0887 11.3439 22.0971 11.3745 22.1076 11.4112C22.1141 11.4242 22.1291 11.4751 22.1415 11.5174C22.1482 11.5403 22.1541 11.5607 22.1576 11.5712C22.2176 11.8612 22.2176 12.1412 22.1576 12.4312C22.1515 12.4683 22.1415 12.5016 22.1276 12.5475C22.1191 12.5759 22.1091 12.6092 22.0976 12.6512C22.0776 12.7212 22.0576 12.7812 22.0276 12.8412C21.9976 12.9112 21.9676 12.9712 21.9076 13.0812C21.9011 13.1009 21.873 13.1464 21.8516 13.181C21.8404 13.1992 21.8311 13.2143 21.8276 13.2212C21.7476 13.3412 21.6576 13.4512 21.5576 13.5512L15.5576 19.5512C15.1376 19.9712 14.5876 20.1912 14.0076 20.1912C13.4176 20.1912 12.8676 19.9612 12.4476 19.5512C12.0276 19.1312 11.8076 18.5812 11.8076 17.9912C11.8076 17.4012 12.0376 16.8512 12.4476 16.4312L14.6776 14.2012Z'
                      fill='#d79d00'
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Equipment;
