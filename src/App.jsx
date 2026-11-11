import { useState } from "react";
import "./App.css";

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Theme state
  const [isDark, setIsDark] = useState(false);

  // Increment counter
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Decrement counter
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Reset counter
  const reset = () => {
    setCount(0);
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <div className="container">

        <header className="top-section">
          <div>
            <p className="subtitle">REACT TASK 04</p>
            <h1>Counter App</h1>
            <p className="description">
              Manage your counter with React useState.
            </p>
          </div>

          <button className="theme-btn" onClick={toggleTheme}>
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <main>
          <section className="counter-card">
            <p className="counter-label">CURRENT COUNT</p>

            <h2 className="count-value">{count}</h2>

            <p className="status">
              {count > 0
                ? "Great! Your count is increasing 🚀"
                : count < 0
                ? "Your count is below zero!"
                : "Your counter is ready!"}
            </p>

            <div className="button-group">
              <button
                className="increment-btn"
                onClick={increment}
              >
                + Increment
              </button>

              <button
                className="decrement-btn"
                onClick={decrement}
              >
                − Decrement
              </button>

              <button
                className="reset-btn"
                onClick={reset}
              >
                ↻ Reset
              </button>
            </div>
          </section>

          <section className="info-card">
            <div>
              <h3>Current Theme</h3>
              <p>{isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}</p>
            </div>

            <div>
              <h3>Counter Status</h3>
              <p>
                {count === 0
                  ? "Zero"
                  : count > 0
                  ? "Positive"
                  : "Negative"}
              </p>
            </div>
          </section>
        </main>

        <footer>
          Built with React useState Hook
        </footer>

      </div>
    </div>
  );
}

export default App;