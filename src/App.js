import React, { useState } from 'react';
import './App.css';

function LightSwitch() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`light-switch-container ${isOn ? 'on' : 'off'}`}>
      <h1 className={isOn ? 'on' : 'off'}>
        {isOn ? '💡 Свет включен' : '💡 Свет выключен'}
      </h1>
      <button 
        onClick={handleToggle}
        className={`toggle-button ${isOn ? 'on' : 'off'}`}
      >
        {isOn ? 'Выключить' : 'Включить'}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <LightSwitch />
    </div>
  );
}

export default App;