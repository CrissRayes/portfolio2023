import { NavLink, Outlet } from 'react-router-dom';

export const Projects = () => {
  const linkActivo = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <div className='projects'>
      <h2>Projects</h2>
      <ul>
        <li>
          <NavLink
            to='/projects'
            className={linkActivo}
            end
          >
            Synaptech
          </NavLink>
        </li>
        <li>
          <NavLink
            to='urbanus'
            className={linkActivo}
          >
            Urbanus
          </NavLink>
        </li>
        <li>
          <NavLink
            to='vernux'
            className={linkActivo}
          >
            Vernux
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
