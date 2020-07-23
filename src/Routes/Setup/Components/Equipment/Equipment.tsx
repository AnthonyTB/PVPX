import React, { useState } from 'react';
import './Equipment.css';

const Equipment: React.FC<any> = () => {
  const [equipment, equipmentUpdater] = useState('visible');
  const [gaming, gamingUpdater] = useState('hidden');
  const [streaming, streamingUpdater] = useState('hidden');
  const [room, roomUpdater] = useState('hidden');

  const changeHandler = (ev: any) => {
    ev.preventDefault();
    stateUpdater(ev.target.value);
  };

  const stateUpdater = (value: any) => {
    equipmentUpdater('hidden');
    gamingUpdater('hidden');
    streamingUpdater('hidden');
    roomUpdater('hidden');
    eval(value)('visible');
  };

  return (
    <section className='Setup'>
      <div className='toggle-btns'>
        <select onChange={changeHandler}>
          <option value='equipmentUpdater' selected>
            Equipment
          </option>
          <option value='gamingUpdater'>Gaming PC</option>
          <option value='streamingUpdater'>Stream PC</option>
          <option value='roomUpdater'>Stream Room</option>
        </select>
      </div>
      <div className={`Equipment ${equipment}`}>
        <h5>Streaming Equipment</h5>
        <ul>
          <li>
            <h6>Monitor 1:</h6>
            <p>Viewsonic XG2560 25"</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Monitor 2:</h6>
            <p>OMEN by HP 25"</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Headset:</h6>
            <p>HyperX Cloud Alpha</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Mouse:</h6>
            <p>HyperX Pulsefire FPS Pro</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Mouse-Pad:</h6>
            <p>HyperX FURY S</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Keyboard:</h6>
            <p>HyperX Alloy FPS Pro</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Webcam:</h6>
            <p>Sony Alpha a6300</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Camera Converter:</h6>
            <p>Elgato Cam Link</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Studio Microphone:</h6>
            <p>AT2020</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Studio Mic Mixer:</h6>
            <p>GoXLR</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Microphone Arm Mount:</h6>
            <p>RODE PSA1</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Monitor Arm Mount:</h6>
            <p>ErGear Monitor Desk Mount</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Stream Deck:</h6>
            <p>Elgato Stream Deck</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Surge Protector:</h6>
            <p>CyberPower 1350VA/810W</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
        </ul>
      </div>
      <div className={`Gaming-PC ${gaming}`}>
        <h5>Gaming PC's Specs</h5>
        <ul>
          <li>
            <h6>Motherboard:</h6>
            <p>ASUS Z270-K</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>GPU:</h6>
            <p>EVGA GeForce GTX 1080 ti</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>CPU:</h6>
            <p>i7-7700K</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>RAM:</h6>
            <p>Corsair Vengeance 3200MHz 16GB</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>SSD:</h6>
            <p>SanDisk SSD 240GB</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
        </ul>
      </div>
      <div className={`Stream-PC ${streaming}`}>
        <h5>Stream PC's Specs</h5>
        <ul>
          <li>
            <h6>Motherboard:</h6>
            <p>MSI - B350 PC MATE</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>GPU:</h6>
            <p>EVGA GeForce GTX 1070</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>CPU:</h6>
            <p>AMD Ryzen 7 1800X</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>RAM:</h6>
            <p>Corsair Vengeance 3000MHz 16GB</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>SSD:</h6>
            <p>Samsung 850 EVO 500GB</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Capture Card:</h6>
            <p>Elgato Game Capture 4K60 Pro</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
        </ul>
      </div>
      <div className={`Stream-Room ${room}`}>
        <h5>Stream Room</h5>
        <ul>
          <li>
            <h6>Couch:</h6>
            <p>Mainstays Memory Foam Futon</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Amazon Echo Dot:</h6>
            <p>Echo Dot 3rd Gen</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Smart Plugs:</h6>
            <p>Smart Plug GoSund</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Flood Lights:</h6>
            <p>Onforu 4 Pack 20W RGB</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Light Strips:</h6>
            <p>Nexlux LED</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Studio Lights:</h6>
            <p>Linco Studio Lights</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Power Strip:</h6>
            <p>Poweradd Power Strip</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
          <li>
            <h6>Twitch Pillow:</h6>
            <p>Twitch Glitch Pillow</p>
            <a href='#' target='blank_'>
              Buy
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Equipment;
