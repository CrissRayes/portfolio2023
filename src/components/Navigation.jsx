import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};
