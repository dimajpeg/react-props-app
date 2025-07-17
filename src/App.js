import React, { useState } from 'react';

function LightSwitch() { 
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <h1>{isOn ? 'Свет включен' : 'Свет выключен'}</h1>
      <button onClick={handleToggle}>
        {isOn ? 'Выключить' : 'Включить'}
      </button>
    </>
  );
}

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <LightSwitch />
    </div>
  );
}

export default App;