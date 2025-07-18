import React, { useState, useEffect } from 'react';

const Stats: React.FC = () => {
  const [networkValue, setNetworkValue] = useState<string>('TBA');
  const [activeUsers, setActiveUsers] = useState<string>('TBA');
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch network value
  const fetchNetworkValue = async () => {
    try {
      const response = await fetch('https://api.dexscreener.com/latest/dex/tokens/CPG7gjcjcdZGHE5EJ6LoAL4xqZtNFeWEXXmtkYjAoVaF');
      const data = await response.json();
      
      // DexScreener returns pairs array, get the first pair's market cap
      if (data.pairs && data.pairs.length > 0) {
        const marketCap = data.pairs[0].marketCap;
        if (marketCap) {
          const formattedValue = marketCap > 1000000 
            ? `$${(marketCap / 1000000).toFixed(1)}M` 
            : `$${(marketCap / 1000).toFixed(0)}K`;
          setNetworkValue(formattedValue);
        } else {
          setNetworkValue('TBA');
        }
      } else {
        setNetworkValue('TBA');
      }
    } catch (error) {
      console.error('Error fetching network value:', error);
      setNetworkValue('TBA');
    }
  };

  // Function to fetch active users (holder count)
  const fetchActiveUsers = async () => {
    try {
      const response = await fetch('https://public-api.solscan.io/token/holders?tokenAddress=CPG7gjcjcdZGHE5EJ6LoAL4xqZtNFeWEXXmtkYjAoVaF&offset=0&limit=1');
      const data = await response.json();
      
      // Solscan returns total count in the response
      if (data.total) {
        const formattedUsers = data.total > 1000 
          ? `${(data.total / 1000).toFixed(1)}K` 
          : data.total.toString();
        setActiveUsers(formattedUsers);
      } else {
        setActiveUsers('TBA');
      }
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