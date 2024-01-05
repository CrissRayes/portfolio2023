import { NavLink, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export const Projects = () => {
  const linkActivo = ({ isActive }) => (isActive ? 'active' : '');

  useEffect(() => {
    const nav = document.querySelector('.nav-menu');
    const toggleNavMenu = () => {
      nav.classList.toggle('open');
    };

    const closeNavMenu = (e) => {
      if (!nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    };

    nav.addEventListener('click', toggleNavMenu);
    nav.addEventListener('click', closeNavMenu);

    // Limpia los eventos al desmontar el componente
    return () => {
      nav.removeEventListener('click', toggleNavMenu);
      nav.removeEventListener('click', closeNavMenu);
    };
  }, []);

  return (
    <div className='projects'>
      <h2>Projects</h2>
      <nav className='nav-menu'>
        <div className='hamburger'>
          <div className='icon'></div>
          <div className='icon'></div>
          <div className='icon'></div>
        </div>
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
      </nav>
      <Outlet />
    </div>
  );
};
