import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import routes from './routes/routes';
import { Header } from './components/Header';
import './App.css';

export const App = () => {
  const [iteration, setIteration] = useState(0);
  const colors = ['#ffff9b', '#ffcd9b', '#ffcdff', '#ffff9b', '#cdff9b']; // Background-colors yellow, apricot, pink, yellow, green
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = iteration % colors.length;
      document.body.style.backgroundColor = prefersReducedMotion ? '#ffff9b' : colors[index];
      setIteration(iteration + 1);
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(interval);
  }, [iteration, prefersReducedMotion, colors]);

  return (
    <>
      <BrowserRouter>
        <main>
          <Header />
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
      <div className="centered-label"><label>
        One background is plenty enough!<input
          type="checkbox"
          checked={prefersReducedMotion}
          onChange={(e) => setPrefersReducedMotion(e.target.checked)}
        />

      </label></div>
    </>
  );
};
