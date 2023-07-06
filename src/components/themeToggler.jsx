import { useContext} from "react";
import themeContext from "../context/themeContext";
import "./themeToggler.css"
import sun from '../images/sun.png';
import cresent from '../images/crescent.png';

export default function ThemeToggler(){
    const { theme, toggleTheme } = useContext(themeContext);  
    const nightButton = <img width="45px" height="45px" src={ cresent } alt="cresent" />;
    const dayButton = <img width="55px" height="55px" src={ sun } alt="sun" />;
    
    return (
      <div  className={`theme-${theme} themeToggleWrapper`}>         
        <div  onClick={toggleTheme} className="toggleButton">
          { theme === 'light' ? nightButton : dayButton }          
        </div>
        <section className="contentWrapper">
          <h1>THIS IS THE SOME SAMEPLE TEXT</h1><br/>
          <p>Click the button on the top right corner</p>
          </section>
      </div>
    );
  };