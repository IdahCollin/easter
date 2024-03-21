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
      <label>
        <input
          type="checkbox"
          checked={prefersReducedMotion}
          onChange={(e) => setPrefersReducedMotion(e.target.checked)}
        />
        One background is plenty enough!
      </label>
    </>
  );
};



/* function App() {
  const [count, setCount] = useState(0)
  
  <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </> */
