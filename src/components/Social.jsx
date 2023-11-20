import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Social = () => {
  return (
    <div className='rrss'>
      <ul>
        <li>
          <Link to='https://github.com/CrissRayes'>
            <FaGithub className='icon' />
          </Link>
        </li>
        <li>
          <Link to='https://www.linkedin.com/in/crissrayes'>
            <FaLinkedin className='icon' />
          </Link>
        </li>
        <li>
          <Link to={`mailto:cristian.ramirez.cl@gmail.com`}>
            <FaRegEnvelope className='icon' />
          </Link>
        </li>
      </ul>
    </div>
  );
};
