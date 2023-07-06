import React, { useState }   from 'react';
import ThemeContext from './themeContext';

export default function ThemeProvider ({ children }){ 
 

    const [theme, setTheme] = useState('light'); // Initial theme state
  
    // Function to toggle the theme
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    // Create the context value
    const contextValue = {
      theme,
      toggleTheme,
    };
  
    return(
        <ThemeContext.Provider value={contextValue}>
            { children }
        </ThemeContext.Provider>
    );
  };