// src/App.js
import React from 'react';
import './App.css';
import Banner from './components/Banner.js';
import Exhibit from './components/Exhibit.js';
import PublicIP from './components/PublicIp.js';
import Latency from './components/Latency.js';

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
        <Latency />
      </Exhibit>
      
    </div>
  );
}

export default App;
