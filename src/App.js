import React from 'react';
import logo from './logo.png';
import YouTube from 'react-youtube';
import './App.css';

function App() {
  const containerStyle = {
    marginTop: '10px',
    width: '100%',
    maxWidth: '600px', // Adjust the maximum width as needed
  };

  const logoStyle = {
    width: '50px',
    height: 'auto',
    marginRight: '10px',
  };

  const opts = {
    width: '100%',
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logo} alt="Static Logo" style={logoStyle} />
          <h1 style={{ textAlign: 'center', fontSize: '20px' }}>Guardians of Uranus</h1>
        </div>
        <div style={containerStyle}>
          <YouTube videoId="AejnPiw30lw" opts={opts} />
        </div>
      </header>
    </div>
  );
}

export default App;

