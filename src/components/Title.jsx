import React, { useState, useEffect } from 'react';

function Title() {
  //state variables to track if dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  //use effect to add or remove the dark-theme class on the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  //function to actually call the state change
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header>
        <h1 className="font-mono text-4xl font-bold text-slate-300 pt-3">My React Portfolio</h1>
      </header>
        <div className="theme-container">
        <span
          className="theme-toggle text-slate-300 font-mono transition ease-in-out hover:font-extrabold delay-75 hover:-translate-y-1 hover:scale-110"
          onClick={toggleTheme}>
          {/* if isDarkMode, show 'Light'; if not, show 'Dark' */}
          {isDarkMode ? 'Light' : 'Dark'}
        </span>
      </div>
    </>
  );
}

export default Title;