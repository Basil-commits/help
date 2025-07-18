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

  // Method 1: Try SolanaTracker API (has dedicated holder count endpoint)
  const fetchHoldersSolanaTracker = async () => {
    try {
      console.log('Trying SolanaTracker API...');
      const response = await fetch('https://api.solanatracker.io/tokens/CPG7gjcjcdZGHE5EJ6LoAL4xqZtNFeWEXXmtkYjAoVaF/holders/count', {
        headers: {
          'Accept': 'application/json',
          'X-API-Key': 'YOUR_SOLANA_TRACKER_API_KEY', // Replace with your actual API key
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      console.log('SolanaTracker response status:', response.status);
      console.log('SolanaTracker response headers:', response.headers);
      
      if (response.ok) {
        const data = await response.json();
        console.log('SolanaTracker response data:', data);
        
        const holderCount = data.holderCount || data.count || data.total || data.holders;
        console.log('Extracted holder count:', holderCount);
        
        if (holderCount) {
          const formattedUsers = holderCount > 1000 
            ? `${(holderCount / 1000).toFixed(1)}K` 
            : holderCount.toString();
          console.log('Formatted users:', formattedUsers);
          setActiveUsers(formattedUsers);
          return true;
        }
      } else {
        console.error('SolanaTracker API failed with status:', response.status);
        const errorText = await response.text();
        console.error('Error response:', errorText);
      }
      return false;
    } catch (error) {
      console.error('Error fetching from SolanaTracker:', error);
      return false;
    }
  };

  // Method 2: Try Moralis API (new Solana Token Holders API)
  const fetchHoldersMoralis = async () => {
    try {
      const response = await fetch(`https://solana-gateway.moralis.io/token/CPG7gjcjcdZGHE5EJ6LoAL4xqZtNFeWEXXmtkYjAoVaF/holders`, {
        headers: {
          'Accept': 'application/json',
          'X-API-Key': 'demo', // You'll need to get a free API key from Moralis
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Moralis response:', data);
        
        const holderCount = data.totalHolders || data.holderCount || data.total || data.result?.length;
        if (holderCount) {
          const formattedUsers = holderCount > 1000 
            ? `${(holderCount / 1000).toFixed(1)}K` 
            : holderCount.toString();
          setActiveUsers(formattedUsers);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Error fetching from Moralis:', error);
      return false;
    }
  };

  // Method 3: Try Helius API with different endpoint
  const fetchHoldersHelius = async () => {
    try {
      const response = await fetch(`https://api.helius.xyz/v0/tokens/CPG7gjcjcdZGHE5EJ6LoAL4xqZtNFeWEXXmtkYjAoVaF/holders?api-key=demo`, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Helius response:', data);
        
        const holderCount = data.totalHolders || data.holderCount || data.total || data.holders?.length;
        if (holderCount) {
          const formattedUsers = holderCount > 1000 
            ? `${(holderCount / 1000).toFixed(1)}K` 
            : holderCount.toString();
          setActiveUsers(formattedUsers);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Error fetching from Helius:', error);
      return false;
    }
  };

  // Method 4: Try Jupiter API (aggregator that might have holder data)
  const fetchHoldersJupiter = async () => {
    try {
      const response = await fetch(`https://price.jup.ag/v4/token/CPG7gjcjcdZGHE5EJ6LoAL4xqZtNFeWEXXmtkYjAoVaF`, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Jupiter response:', data);
        
        const holderCount = data.holderCount || data.holders || data.totalHolders;
        if (holderCount) {
          const formattedUsers = holderCount > 1000 
            ? `${(holderCount / 1000).toFixed(1)}K` 
            : holderCount.toString();
          setActiveUsers(formattedUsers);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Error fetching from Jupiter:', error);
      return false;
    }
  };

  // Method 5: Try Solscan (your original API)
  const fetchHoldersSolscan = async () => {
    try {
      const response = await fetch('https://public-api.solscan.io/token/holders?tokenAddress=CPG7gjcjcdZGHE5EJ6LoAL4xqZtNFeWEXXmtkYjAoVaF&offset=0&limit=1', {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Solscan response:', data);
        
        if (data.total) {
          const formattedUsers = data.total > 1000 
            ? `${(data.total / 1000).toFixed(1)}K` 
            : data.total.toString();
          setActiveUsers(formattedUsers);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Error fetching from Solscan:', error);
      return false;
    }
  };

  // Main function to fetch active users - tries multiple APIs
  const fetchActiveUsers = async () => {
    console.log('Starting to fetch active users...');
    
    // Try APIs in order of reliability
    const success = await fetchHoldersSolanaTracker() ||
                   await fetchHoldersMoralis() ||
                   await fetchHoldersHelius() ||
                   await fetchHoldersJupiter() ||
                   await fetchHoldersSolscan();
    
    if (!success) {
      console.warn('All APIs failed to fetch holder count');
      setActiveUsers('TBA');
    } else {
      console.log('Successfully fetched holder count from one of the APIs');
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
    
    // Set up interval to refresh data every 60 seconds
    const interval = setInterval(fetchData, 60000);
    
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