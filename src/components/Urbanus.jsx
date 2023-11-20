import { FaGlobe } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

export const Urbanus = () => {
  return (
    <div className='project-detail'>
      <div>
        <img
          className='project-img'
          src='/img/urbanus-web.png'
          alt='Urbanus'
          onClick={() => {
            window.open('https://crissrayes.github.io/webUrbanus', '_blank');
          }}
        />
      </div>
      <div className='project-detail-container'>
        <h3>About</h3>
        <p>
          Urbanus is a real estate company located in Chile. This project
          involved the design, development, and deployment of its corporate
          website.
        </p>
        <div>
          <span className='pill'>JavaScript</span>
          <span className='pill'>Html</span>
          <span className='pill'>Css</span>
          <span className='pill'>PHP</span>
        </div>
        <div className='project-icon'>
          <FaGlobe />
          <NavLink
            to='https://crissrayes.github.io/webUrbanus'
            target='_blank'
            rel='noreferrer'
          >
            View Project
          </NavLink>
        </div>
      </div>
    </div>
  );
};
