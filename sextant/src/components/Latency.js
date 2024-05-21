
import React, { useState, useEffect } from 'react';

const Latency = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:55455');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const packetTimestamp = data.timestamp;
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {latency !== null ? <p>Current latency: {latency} ms</p> : <p>Calculating latency...</p>}
    </div>
  );
};

export default Latency;
