// src/App.js

import React, { useEffect } from 'react';
import { useLocalStorage, useWindowSize } from './hooks';
import './App.css';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const size = useWindowSize();

  const isMobile = size.width <= 768;

  useEffect(() => {
    if (isMobile) {
      setTheme('light');
    }
  }, [isMobile, setTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>{`Current theme: ${theme}`}</h1>
        <button onClick={toggleTheme} disabled={isMobile}>
          Toggle Theme
        </button>
      </header>
    </div>
  );
};

export default App;
