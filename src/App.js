import React, { useState } from 'react';
import './App.css';
import Navbar from './componats/Navbar';
import TextFrom from './componats/TextFrom';


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // Set dark mode background and text color
      document.body.style.backgroundColor = '#333'; // Dark grey background
      document.body.style.color = 'white'; // Light text color
    } else {
      setMode('light');
      // Set light mode background and text color
      document.body.style.backgroundColor = 'white'; // Light background
      document.body.style.color = 'black'; // Dark text color
    }
  }

  return (
    <>
      <Navbar tital="TextUtil" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        <TextFrom Heding="Enter The Text " />
      </div>
    </>
  );
}

export default App;
