import { FaMoon, FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export const Navigation = () => {
  const linkActivo = ({ isActive }) => (isActive ? 'active' : '');
  const { theme, toggleTheme } = useContext(ThemeContext);

  // useEffect(() => {
  //   toggleTheme();
  // }, []);

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            className={linkActivo}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/projects'
            className={linkActivo}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <button onClick={handleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </li>
      </ul>
    </nav>
  );
};
