import ThemeProvider from './context/themeProvider';
import ThemeToggler from './components/themeToggler';


function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>


  );
}

export default App
