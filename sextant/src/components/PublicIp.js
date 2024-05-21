// src/components/PublicIP.js
import React, { useState, useEffect } from 'react';


const PublicIP = ({ version }) => {
  const [ip, setIP] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch(
          `https://api${version === 'v6' ? '6' : ''}.ipify.org?format=json`
        );
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setIP(data.ip);
      } catch (err) {
        setError('Failed to fetch IP address');
      }
    };

    fetchIP();
  }, [version]);

  return (
    <div>
      {error ? <p>{error}</p> : <p>Your public {version === 'v6' ? 'IPv6' : 'IPv4'} address is: {ip}</p>}
    </div>
  );
};

export default PublicIP;
