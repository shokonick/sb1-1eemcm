import React, { useState, useEffect } from 'react';

export default function LastUpdated() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setLastUpdated(new Date().toLocaleString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-600 p-3 rounded-md border border-gray-500 shadow-inner flex justify-between items-center">
      <span className="text-green-400">
        Visitors: <span className="bg-green-600 text-black px-2 py-1 rounded-md shadow-inner">{1337}</span>
      </span>
      <span id="last-updated" className="text-green-300">
        Last updated: {lastUpdated}
      </span>
    </div>
  );
}