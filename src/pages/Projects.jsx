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
            Web Apps
          </NavLink>
        </li>
        <li>
          <NavLink
            to='webs'
            className={linkActivo}
            end
          >
            Websites
          </NavLink>
        </li>
        <li>
          <NavLink
            to='apis'
            className={linkActivo}
          >
            Apis
          </NavLink>
        </li>
        <li>
          <NavLink
            to='games'
            className={linkActivo}
          >
            Games & Misc
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
