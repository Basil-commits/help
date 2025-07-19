import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (numbers and some symbols)
    const chars = '0123456789ABCDEF';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to store the y position of each column
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    const draw = () => {
      // Black background with slight transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        ctx.fillStyle = i % 3 === 0 ? '#ffff00' : '#ff8f00'; // Vary brightness
        ctx.fillText(char, i * fontSize, drops[i]);

        // Reset drop to top randomly
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i] += fontSize;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'black' }}
    />
  );
};

export default MatrixBackground;