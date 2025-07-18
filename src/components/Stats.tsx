import React, { useState, useEffect } from 'react';

const Stats: React.FC = () => {
  const [networkValue, setNetworkValue] = useState<string>('TBA');
  const [activeUsers, setActiveUsers] = useState<string>('TBA');
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch network value
  const fetchNetworkValue = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.dexscreener.com/tokens/v1/solana/CPG7gjcjcdZGHE5EJ6LoAL4xqZtNFeWEXXmtkYjAoVaF');
      const data = await response.json();
      
      // Format the value as needed (e.g., add $ sign, format numbers)
      const formattedValue = `$${(data.value / 1000000).toFixed(1)}M`;
      setNetworkValue(formattedValue);
    } catch (error) {
      console.error('Error fetching network value:', error);
      setNetworkValue('TBA');
    }
  };

  // Function to fetch active users
  const fetchActiveUsers = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.example.com/active-users');
      const data = await response.json();
      
      // Format the number (e.g., 1500 becomes 1.5K)
      const formattedUsers = data.count > 1000 
        ? `${(data.count / 1000).toFixed(1)}K` 
        : data.count.toString();
      setActiveUsers(formattedUsers);
    } catch (error) {
      console.error('Error fetching active users:', error);
      setActiveUsers('TBA');
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        fetchNetworkValue(),
        fetchActiveUsers()
      ]);
      setLoading(false);
    };

    fetchData();

    // Optional: Set up interval to refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      number: loading ? '...' : networkValue, 
      label: 'NETWORK_VALUE',
      isLoading: loading 
    },
    { 
      number: loading ? '...' : activeUsers, 
      label: 'ACTIVE_USERS',
      isLoading: loading 
    },
    { 
      number: '100%', 
      label: 'DECENTRALIZED',
      isLoading: false 
    },
    { 
      number: 'WLFI', 
      label: 'DIGITAL_NATIVE',
      isLoading: false 
    }
  ];

  return (
    <section id="tokenomics" className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-20 text-center px-4 relative z-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-black/80 border border-green-500/30 p-8 rounded-xl backdrop-blur-md hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300"
        >
          <span className={`text-3xl md:text-4xl font-bold block font-mono ${
            stat.isLoading ? 'text-green-300 animate-pulse' : 'text-green-400'
          }`}>
            {stat.number}
          </span>
          <span className="text-sm text-green-300 mt-2 block font-mono">
            {stat.label}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Stats;