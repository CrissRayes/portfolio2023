import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Social = () => {
  return (
    <div className='rrss'>
      <ul>
        <li>
          <Link
            to='https://github.com/CrissRayes'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='icon' />
          </Link>
        </li>
        <li>
          <Link
            to='https://www.linkedin.com/in/crissrayes'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='icon' />
          </Link>
        </li>
      </ul>
    </div>
  );
};
