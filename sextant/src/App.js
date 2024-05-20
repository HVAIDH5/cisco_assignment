import React from 'react';
import './App.css';
import Banner from './components/Banner.js';
import Exhibit from './components/Exhibit.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="Public IP">
        <p>Your public IP address will be displayed here.</p>
      </Exhibit>
      <Exhibit heading="Latency">
        <p>Your latency metrics will be displayed here.</p>
      </Exhibit>
    </div>
  );
}

export default App;
