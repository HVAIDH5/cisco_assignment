// src/App.js
import React from 'react';
import './App.css';
import Banner from './components/Banner.js';
import Exhibit from './components/Exhibit.js';
import PublicIP from './components/PublicIp.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="Public IPv4">
        <PublicIP version="v4" />
      </Exhibit>
      <Exhibit heading="Public IPv6">
        <PublicIP version="v6" />
      </Exhibit>
      <Exhibit heading="Latency">
        <p>Your latency metrics will be displayed here.</p>
      </Exhibit>
    </div>
  );
}

export default App;
