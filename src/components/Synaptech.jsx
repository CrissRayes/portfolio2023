import { FaGlobe } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
export const Synaptech = () => {
  return (
    <div className='project-detail'>
      <img
        className='project-img'
        src='/img/synaptech-web.png'
        alt='Synaptech'
        onClick={() => {
          window.open('https://www.synaptech.cl', '_blank');
        }}
      />
      <div>
        <h3>About</h3>
        <p>
          Synaptech is a software and web development company located in Chile.
          This project involved design, development, and deployment of its
          corporate website, and included the integration of a contact form
          using AWS SES as well as the integration of a payment gateway.
        </p>
        <div>
          <span className='pill'>React JS</span>
          <span className='pill'>JavaScript</span>
          <span className='pill'>Tailwind CSS</span>
          <span className='pill'>AWS Amplify</span>
          <span className='pill'>AWS SES</span>
          <span className='pill'>AWS API Gateway</span>
          <span className='pill'>AWS Lambda</span>
        </div>
        <div className='project-icon'>
          <FaGlobe />
          WebSite
          <NavLink
            to='https://www.synaptech.cl'
            target='_blank'
            rel='noreferrer'
          >
            https://www.synaptech.cl
          </NavLink>
        </div>
      </div>
    </div>
  );
};
