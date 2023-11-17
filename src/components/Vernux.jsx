import { FaGlobe } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

export const Vernux = () => {
  return (
    <div className='project-detail'>
      <img
        className='project-img'
        src='/img/vernux-web.png'
        alt='Vernux'
        onClick={() => {
          window.open('https://crissrayes.github.io/vernux', '_blank');
        }}
      />
      <div>
        <h3>About</h3>
        <p>
          Vernux is a custom furniture company located in Chile. This project
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
          WebSite
          <NavLink
            to='https://crissrayes.github.io/vernux'
            target='_blank'
            rel='noreferrer'
          >
            https://crissrayes.github.io/vernux
          </NavLink>
        </div>
      </div>
    </div>
  );
};
