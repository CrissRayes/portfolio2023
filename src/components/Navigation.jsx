import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const linkActivo = ({ isActive }) => (isActive ? 'active' : '');
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
      </ul>
    </nav>
  );
};
